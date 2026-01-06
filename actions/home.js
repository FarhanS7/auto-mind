"use server";

import aj from "@/lib/arcjet";
import { serializeCarData } from "@/lib/helpers";
import { db } from "@/lib/prisma";
import { request } from "@arcjet/next";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getFeaturedCars() {
  try {
    const cars = await db.car.findMany({
      where: {
        featured: true,
        status: "AVAILABLE",
      },
      take: 6,
      orderBy: {
        createdAt: "desc",
      },
    });

    return cars.map(serializeCarData);
  } catch (error) {
    console.error("Error fetching featured cars:", error);
    return [];
  }
}

// Function to convert File to base64
async function fileToBase64(file) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
}

export async function processImageSearch(file) {
  try {
    const req = await request();
    const decision = await aj.protect(req, { requested: 5 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        throw new Error("Too many requests. Please try again later.");
      }
      throw new Error("Access denied.");
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const base64Image = await fileToBase64(file);

    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Image,
          mimeType: file.type,
        },
      },
      `Analyze this car image and extract only the following fields as a JSON object:
      {
        "make": "manufacturer name",
        "bodyType": "SUV, Sedan, etc.",
        "color": "primary color"
      }
      Only respond with the JSON object, nothing else.`,
    ]);

    const text = result.response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const carDetails = JSON.parse(cleanedText);

    return {
      success: true,
      data: carDetails,
    };
  } catch (error) {
    console.error("Error processing image search:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

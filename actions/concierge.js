"use server";

import { serializeCarData } from "@/lib/helpers";
import { db } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Handles AI Concierge chat messages.
 * 1. Uses Gemini to extract search filters from natural language.
 * 2. Queries the database based on filters.
 * 3. Returns recommendations and AI response.
 */
export async function getConciergeResponse(messages) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key is not configured");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const lastMessage = messages[messages.length - 1].content;

    const extractionPrompt = `
      You are an expert car sales concierge for "Auto Mind". 
      Given the user's request, extract structured search filters.
      
      User Request: "${lastMessage}"
      
      Extract these fields if mentioned:
      - make (e.g., "Toyota", "Tesla")
      - model (e.g., "Camry", "Model 3")
      - color
      - bodyType (e.g., "SUV", "Sedan", "Hatchback")
      - fuelType (e.g., "Electric", "Gasoline", "Hybrid")
      - transmission (e.g., "Automatic", "Manual")
      - minPrice (number)
      - maxPrice (number)
      - minYear (number)
      - maxYear (number)
      - maxMileage (number)

      Return ONLY a JSON object with these fields. Use null for missing values.
      {
        "make": null,
        "model": null,
        "color": null,
        "bodyType": null,
        "fuelType": null,
        "transmission": null,
        "minPrice": null,
        "maxPrice": null,
        "minYear": null,
        "maxYear": null,
        "maxMileage": null
      }
    `;

    const extractionResult = await model.generateContent(extractionPrompt);
    const extractionText = extractionResult.response.text().replace(/```(?:json)?\n?/g, "").trim();
    let filters = {};
    try {
      filters = JSON.parse(extractionText);
    } catch (e) {
      console.error("Failed to parse filters:", e);
    }

    // Build Prisma query
    const where = {
      status: "AVAILABLE",
    };

    if (filters.make) where.make = { contains: filters.make, mode: "insensitive" };
    if (filters.model) where.model = { contains: filters.model, mode: "insensitive" };
    if (filters.color) where.color = { contains: filters.color, mode: "insensitive" };
    if (filters.bodyType) where.bodyType = { contains: filters.bodyType, mode: "insensitive" };
    if (filters.fuelType) where.fuelType = { contains: filters.fuelType, mode: "insensitive" };
    if (filters.transmission) where.transmission = { contains: filters.transmission, mode: "insensitive" };

    if (filters.minPrice || filters.maxPrice) {
      where.price = {};
      if (filters.minPrice) where.price.gte = filters.minPrice;
      if (filters.maxPrice) where.price.lte = filters.maxPrice;
    }

    if (filters.minYear || filters.maxYear) {
      where.year = {};
      if (filters.minYear) where.year.gte = filters.minYear;
      if (filters.maxYear) where.year.lte = filters.maxYear;
    }

    if (filters.maxMileage) {
      where.mileage = { lte: filters.maxMileage };
    }

    const cars = await db.car.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const serializedCars = cars.map(serializeCarData);

    // Generate AI response based on findings
    const responsePrompt = `
      You are an expert car sales concierge for "Auto Mind".
      User asked: "${lastMessage}"
      
      We found ${serializedCars.length} cars matching their criteria:
      ${JSON.stringify(serializedCars.map(c => ({ make: c.make, model: c.model, price: c.price, year: c.year })))}
      
      Provide a friendly, helpful response to the user. 
      - If cars were found, briefly mention them and explain why they fits.
      - If no cars were found, apologize and suggest adjusting filters or offer to help with something else.
      - Keep it professional but enthusiastic.
      
      Final response should be text only, no JSON.
    `;

    const responseResult = await model.generateContent(responsePrompt);
    const aiResponse = responseResult.response.text();

    return {
      success: true,
      data: {
        response: aiResponse,
        recommendations: serializedCars,
        filters, // Returning filters for debugging/transparency
      }
    };

  } catch (error) {
    console.error("Concierge Error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

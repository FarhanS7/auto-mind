"use server";

import { db } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Fetches market trends data for charts.
 * Returns:
 * 1. Average price by Body Type.
 * 2. Inventory distribution by Make.
 * 3. Price vs Mileage correlation.
 */
export async function getMarketTrends() {
  try {
    const cars = await db.car.findMany({
      where: { status: "AVAILABLE" },
      select: {
        price: true,
        bodyType: true,
        make: true,
        mileage: true,
        year: true,
      },
    });

    // 1. Average price by Body Type
    const bodyTypeMap = {};
    cars.forEach(car => {
      const price = parseFloat(car.price.toString());
      if (!bodyTypeMap[car.bodyType]) {
        bodyTypeMap[car.bodyType] = { name: car.bodyType, total: 0, count: 0 };
      }
      bodyTypeMap[car.bodyType].total += price;
      bodyTypeMap[car.bodyType].count += 1;
    });
    const avgPriceByBodyType = Object.values(bodyTypeMap).map(b => ({
      name: b.name,
      avgPrice: Math.round(b.total / b.count),
    }));

    // 2. Inventory by Make
    const makeMap = {};
    cars.forEach(car => {
      if (!makeMap[car.make]) {
        makeMap[car.make] = { name: car.make, count: 0 };
      }
      makeMap[car.make].count += 1;
    });
    const inventoryByMake = Object.values(makeMap).sort((a, b) => b.count - a.count);

    // 3. Price vs Mileage
    const priceVsMileage = cars.map(car => ({
      mileage: car.mileage,
      price: parseFloat(car.price.toString()),
      label: `${car.make} ${car.year}`,
    }));

    return {
      success: true,
      data: {
        avgPriceByBodyType,
        inventoryByMake,
        priceVsMileage,
      }
    };
  } catch (error) {
    console.error("Market Trends Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Provides an expert valuation for a specific car.
 */
export async function getCarValuation(details) {
  try {
    const { make, model, year, mileage, condition = "Good" } = details;

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key is not configured");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const modelAI = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    // Find similar cars in DB for context
    const similarCars = await db.car.findMany({
      where: {
        make: { contains: make, mode: "insensitive" },
        status: "AVAILABLE",
      },
      take: 5,
    });

    const context = similarCars.length > 0 
      ? `Our current inventory of ${make} includes: ${JSON.stringify(similarCars.map(c => ({ model: c.model, price: c.price, year: c.year, mileage: c.mileage })))}`
      : "We have no similar cars in our local inventory.";

    const prompt = `
      You are a senior automotive appraiser for "Auto Mind".
      Provide a "Fair Market Valuation" for the following vehicle:
      - Make: ${make}
      - Model: ${model}
      - Year: ${year}
      - Mileage: ${mileage} miles
      - Condition: ${condition}
      
      Local context: ${context}
      
      Return a JSON object with:
      {
        "estimatedValue": number,
        "range": { "min": number, "max": number },
        "marketSentiment": "string (e.g., Rising, Stable, Falling)",
        "expertAdvice": "string"
      }
      
      Only return the JSON.
    `;

    const result = await modelAI.generateContent(prompt);
    const text = result.response.text().replace(/```(?:json)?\n?/g, "").trim();
    
    return {
      success: true,
      data: JSON.parse(text),
    };
  } catch (error) {
    console.error("Valuation Error:", error);
    return { success: false, error: error.message };
  }
}

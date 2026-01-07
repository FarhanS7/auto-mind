"use server";

import { serializeCarData } from "@/lib/helpers";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { unstable_cache } from "next/cache";

export const getCarFilters = unstable_cache(
  async () => {
    try {
      const cars = await db.car.findMany({
        select: {
          make: true,
          bodyType: true,
          fuelType: true,
          transmission: true,
          price: true,
        },
      });

      const filters = {
        makes: [...new Set(cars.map((car) => car.make))].sort(),
        bodyTypes: [...new Set(cars.map((car) => car.bodyType))].sort(),
        fuelTypes: [...new Set(cars.map((car) => car.fuelType))].sort(),
        transmissions: [...new Set(cars.map((car) => car.transmission))].sort(),
        priceRange: {
          min: Math.min(...cars.map((car) => parseFloat(car.price))),
          max: Math.max(...cars.map((car) => parseFloat(car.price))),
        },
      };

      return {
        success: true,
        data: filters,
      };
    } catch (error) {
      console.error("Error fetching car filters:", error);
      return {
        success: false,
        error: error.message,
        data: {
          makes: [],
          bodyTypes: [],
          fuelTypes: [],
          transmissions: [],
          priceRange: { min: 0, max: 0 },
        },
      };
    }
  },
  ["car-filters"],
  {
    revalidate: 3600, // 1 hour
    tags: ["cars", "filters"],
  }
);

export async function getCars(filters = {}) {
  try {
    const {
      make,
      bodyType,
      fuelType,
      transmission,
      minPrice,
      maxPrice,
      search,
      color,
      sortBy = "newest",
      page = 1,
      limit = 6,
    } = filters;

    const skip = (page - 1) * limit;

    let where = {
      status: "AVAILABLE",
    };

    if (make) where.make = { equals: make, mode: "insensitive" };
    if (bodyType) where.bodyType = { equals: bodyType, mode: "insensitive" };
    if (fuelType) where.fuelType = { equals: fuelType, mode: "insensitive" };
    if (transmission)
      where.transmission = { equals: transmission, mode: "insensitive" };
    if (color) where.color = { contains: color, mode: "insensitive" };

    if (search) {
      where.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = minPrice.toString();
      if (maxPrice) where.price.lte = maxPrice.toString();
    }

    // Sort mapping
    let orderBy = { createdAt: "desc" };
    if (sortBy === "price_asc") orderBy = { price: "asc" };
    if (sortBy === "price_desc") orderBy = { price: "desc" };
    if (sortBy === "mileage_asc") orderBy = { mileage: "asc" };
    if (sortBy === "oldest") orderBy = { createdAt: "asc" };

    const [cars, total] = await Promise.all([
      db.car.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      db.car.count({ where }),
    ]);

    return {
      success: true,
      data: cars.map(serializeCarData),
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Error fetching cars:", error);
    return {
      success: false,
      error: error.message,
      data: [],
      pagination: { total: 0, pages: 0, currentPage: 1, limit: 6 },
    };
  }
}

export async function getCarById(id) {
  try {
    const car = await db.car.findUnique({
      where: { id },
    });

    if (!car) {
      return {
        success: false,
        error: "Car not found",
      };
    }

    return {
      success: true,
      data: serializeCarData(car),
    };
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getSavedCars() {
  try {
    const { userId } = await auth();
    if (!userId) return [];

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: {
        savedCars: {
          include: { car: true },
          orderBy: { savedAt: "desc" },
        },
      },
    });

    if (!user) return [];

    return user.savedCars.map((saved) => serializeCarData(saved.car));
  } catch (error) {
    console.error("Error fetching saved cars:", error);
    return [];
  }
}

export async function toggleSavedCar(carId) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Please sign in to save cars");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Check if car exists
    const car = await db.car.findUnique({
      where: { id: carId },
    });

    if (!car) {
      throw new Error("Car not found");
    }

    // Check if already saved
    const existingSave = await db.userSavedCar.findUnique({
      where: {
        userId_carId: {
          userId: user.id,
          carId: carId,
        },
      },
    });

    if (existingSave) {
      // Remove from saved
      await db.userSavedCar.delete({
        where: {
          userId_carId: {
            userId: user.id,
            carId: carId,
          },
        },
      });

      return {
        success: true,
        saved: false,
        message: "Removed from favorites",
      };
    } else {
      // Add to saved
      await db.userSavedCar.create({
        data: {
          userId: user.id,
          carId: carId,
        },
      });

      return {
        success: true,
        saved: true,
        message: "Added to favorites",
      };
    }
  } catch (error) {
    console.error("Error toggling saved car:", error);
    throw new Error(error.message || "Failed to toggle saved car");
  }
}


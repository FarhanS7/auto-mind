// app/api/debug/route.js
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const status = {
    database: "checking...",
    env: {
      DATABASE_URL: process.env.DATABASE_URL ? "SET (check length: " + process.env.DATABASE_URL.length + ")" : "MISSING",
      DIRECT_URL: process.env.DIRECT_URL ? "SET" : "MISSING",
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? "SET" : "MISSING",
    }
  };

  try {
    // Try a simple query
    await db.$queryRaw`SELECT 1`;
    status.database = "CONNECTED";
  } catch (error) {
    status.database = "ERROR: " + error.message;
  }

  return NextResponse.json(status);
}

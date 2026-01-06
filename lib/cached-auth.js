import { db } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { cache } from "react";

/**
 * Highly optimized request-level cached user retrieval.
 * Uses React.cache() to deduplicate database lookups within a single request.
 */
export const getCachedUser = cache(async () => {
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    return user;
  } catch (error) {
    console.error("Error in getCachedUser:", error);
    return null;
  }
});

/**
 * Cached version of Clerk userId retrieval.
 */
export const getCachedUserId = cache(async () => {
  try {
    const { userId } = await auth();
    return userId || null;
  } catch {
    return null;
  }
});

/**
 * Returns the full user object from Clerk, cached for the request.
 */
export const getClerkUser = cache(async () => {
  try {
    return await currentUser();
  } catch {
    return null;
  }
});

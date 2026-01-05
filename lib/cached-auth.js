"use server";

import { currentUser } from "@clerk/nextjs/server";
import { cache } from "react";
import { db } from "./prisma";

/**
 * Get current user with request-level caching
 * This prevents multiple database lookups for the same user in a single request
 */
export const getCachedUser = cache(async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
    return null;
  }
});

/**
 * Get Clerk user ID with request-level caching
 * Use this when you only need the Clerk ID, not the full user object
 */
export const getCachedUserId = cache(async () => {
  const user = await currentUser();
  return user?.id || null;
});

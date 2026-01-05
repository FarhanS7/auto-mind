import arcjet, { detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservations(.*)",
]);

// Create Arcjet middleware
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  // characteristics: ["userId"], // Track based on Clerk userId
  rules: [
    // Shield protection for content and security
    shield({
      mode: "DRY_RUN",
    }),
    detectBot({
      mode: "DRY_RUN", // will block requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        // See the full list at https://arcjet.com/bot-list
      ],
    }),
  ],
});

// Create base Clerk middleware with conditional Arcjet protection
const clerk = clerkMiddleware(async (auth, req) => {
  // Only run Arcjet on API routes and protected pages
  const pathname = req.nextUrl.pathname;
  const shouldRunArcjet = 
    pathname.startsWith('/api/') || 
    pathname.startsWith('/admin') ||
    pathname.startsWith('/saved-cars') ||
    pathname.startsWith('/reservations');

  if (shouldRunArcjet) {
    // Run Arcjet protection for sensitive routes
    const decision = await aj.protect(req);
    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }
  }

  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

// Export Clerk middleware directly (Arcjet is now conditional inside)
export default clerk;

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

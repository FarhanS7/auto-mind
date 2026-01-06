import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"], // Track based on User IP
  rules: [
    // Rate limiting for AI search and other operations
    tokenBucket({
      mode: "LIVE",
      refillRate: 30, // 30 tokens
      interval: 3600, // per hour
      capacity: 30, // maximum burst capacity
    }),
  ],
});

export default aj;

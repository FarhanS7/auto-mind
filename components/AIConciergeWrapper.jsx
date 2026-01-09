"use client";

import dynamic from "next/dynamic";

const AIConcierge = dynamic(
  () => import("@/components/ai-concierge").then((mod) => mod.AIConcierge),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function AIConciergeWrapper() {
  return <AIConcierge />;
}

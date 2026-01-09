// components/ClientHome.jsx

import { Suspense } from "react";
import BrowseSections from "./BrowseSection";
import CTA from "./CTASection";
import FAQ from "./FAQSection";
import Featured from "./FeaturedSection";
import HeroSection from "./HeroSection";
import { FeaturedSkeleton } from "./skeletons";

export default function ClientHome() {
  return (
    <div className="flex flex-col pt-20 relative overflow-hidden">
      <HeroSection />
      <Suspense fallback={<FeaturedSkeleton />}>
        <Featured />
      </Suspense>
      <BrowseSections />
      <FAQ />
      <CTA />
    </div>
  );
}

// components/ClientHome.jsx

import BrowseSections from "./BrowseSection";
import CTA from "./CTASection";
import FAQ from "./FAQSection";
import Featured from "./FeaturedSection";
import HeroSection from "./HeroSection";

// No import of Featured here

export default function ClientHome() {
  return (
    <div className="flex flex-col pt-20 relative overflow-hidden">
      <HeroSection />
      {/* Remove <Featured /> from here */}
      <Featured />
      <BrowseSections />
      <FAQ />
      <CTA />
    </div>
  );
}

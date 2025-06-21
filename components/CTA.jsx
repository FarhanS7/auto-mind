import { SignedOut } from "@clerk/nextjs";
import {
  ArrowRight,
  Car,
  Clock,
  Heart,
  Search,
  Shield,
  Sparkles,
  Star,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle Dotted Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      {/* Minimal Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,rgba(0,0,0,0.5)_40px,rgba(0,0,0,0.5)_41px,transparent_42px)] bg-[length:80px_80px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_39px,rgba(0,0,0,0.5)_40px,rgba(0,0,0,0.5)_41px,transparent_42px)] bg-[length:80px_80px]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-10 left-1/4 w-28 h-28 bg-black/4 rounded-3xl rotate-45 animate-float blur-sm"></div>
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-black/3 rounded-full animate-float-delayed blur-sm"></div>
      <div className="absolute bottom-16 left-1/3 w-24 h-24 bg-black/3 rounded-2xl -rotate-12 animate-float-slow blur-sm"></div>
      <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-black/4 rounded-full animate-bounce blur-sm"></div>

      {/* Minimal Accent Dots */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-black rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-black rounded-full opacity-30 animate-ping"></div>
      <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-black rounded-full opacity-25 animate-pulse delay-500"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-black/5 backdrop-blur-xl rounded-2xl border border-black/10 shadow-lg animate-fade-in group hover:bg-black/10 transition-all duration-300">
          <div className="relative">
            <Car className="h-5 w-5 text-black animate-pulse" />
            <div className="absolute inset-0 h-5 w-5 text-black/20 animate-ping opacity-20"></div>
          </div>
          <span className="text-sm font-semibold text-black/80">
            Join 50,000+ Happy Customers
          </span>
          <Heart className="h-4 w-4 text-black/60 animate-pulse group-hover:animate-bounce transition-all duration-300" />
        </div>

        {/* Main CTA Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tighter">
          <span className="block text-black drop-shadow-sm">Ready to Find</span>
          <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent animate-gradient-x">
            Your Dream Car?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-300">
          Join thousands of satisfied customers who discovered their perfect
          vehicle through our{" "}
          <span className="font-semibold text-black">AI-powered platform</span>.
          Start your journey today and experience the future of car shopping.
        </p>

        {/* Enhanced CTA Buttons Container */}
        <div className="animate-fade-in-up delay-500 relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Primary CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-black to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <Button
                  size="lg"
                  className="relative bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="/cars" className="flex items-center gap-3">
                    <Search className="h-5 w-5" />
                    Explore All Cars
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>

              {/* Secondary CTA Button */}
              <SignedOut>
                <div className="relative group">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/80 hover:bg-black hover:text-white border-2 border-black/20 hover:border-black text-black px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    asChild
                  >
                    <Link href="/sign-up" className="flex items-center gap-3">
                      <UserPlus className="h-5 w-5" />
                      Sign Up Free
                      <Sparkles className="h-5 w-5 group-hover:animate-spin transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-500 animate-fade-in delay-700">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="h-5 w-5 text-black/40" />
              <div className="absolute inset-0 h-5 w-5 text-black/20 animate-pulse opacity-50"></div>
            </div>
            <span className="font-medium">Secure & Trusted Platform</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Clock className="h-5 w-5 text-black/40" />
              <div className="absolute inset-0 h-5 w-5 text-black/20 animate-pulse opacity-50 delay-200"></div>
            </div>
            <span className="font-medium">24/7 Customer Support</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Star className="h-5 w-5 text-black/40" />
              <div className="absolute inset-0 h-5 w-5 text-black/20 animate-pulse opacity-50 delay-400"></div>
            </div>
            <span className="font-medium">4.9/5 Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default CTA;

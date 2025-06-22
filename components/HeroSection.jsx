import { HomeSearch } from "@/components/home-search";
import { Sparkles, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* Background Floating Blurs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-black/5 rounded-3xl rotate-12 animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-black/3 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-black/4 rounded-2xl -rotate-12 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-black/3 rounded-full animate-bounce blur-sm"></div>

        {/* Minimal Accent Dots */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-black rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-black rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-black rounded-full opacity-25 animate-pulse delay-500"></div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-black/5 backdrop-blur-xl rounded-2xl border border-black/10 shadow-lg animate-fade-in group hover:bg-black/10 transition-all duration-300">
            <div className="relative">
              <Sparkles className="h-5 w-5 text-black animate-spin-slow" />
              <div className="absolute inset-0 h-5 w-5 text-black/20 animate-ping opacity-20"></div>
            </div>
            <span className="text-sm font-semibold text-black/80">
              AI-Powered Car Discovery Platform
            </span>
            <Star className="h-4 w-4 text-black/60 animate-pulse group-hover:animate-spin transition-all duration-300" />
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter">
            <span className="block text-black drop-shadow-sm">Find your</span>
            <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent animate-gradient-x">
              Dream Car
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600 mt-2">
              with AutoMind AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up delay-300">
            Experience the future of car shopping with our{" "}
            <span className="font-semibold text-black">
              advanced AI-powered platform
            </span>{" "}
            that intelligently matches you with your perfect vehicle from
            thousands of options.
          </p>

          {/* Enhanced Search Component Container */}
          <div className="animate-fade-in-up delay-500 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-2 border border-gray-200 shadow-xl">
              <HomeSearch />
            </div>
          </div>

          {/* Stats or Features Hint */}
          <div className="mt-16 flex justify-center items-center gap-8 text-sm text-gray-500 animate-fade-in delay-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full opacity-40 animate-pulse"></div>
              <span>50,000+ Cars Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full opacity-40 animate-pulse delay-200"></div>
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full opacity-40 animate-pulse delay-400"></div>
              <span>Instant Test Drive Booking</span>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
    </>
  );
};

export default HeroSection;

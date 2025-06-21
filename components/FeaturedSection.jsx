import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link"; // o

const Featured = async () => {
  const featuredCars = await getFeaturedCars();

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Enhanced Subtle Background Patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49px,rgba(0,0,0,0.4)_50px,rgba(0,0,0,0.4)_51px,transparent_52px)] bg-[length:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49px,rgba(0,0,0,0.4)_50px,rgba(0,0,0,0.4)_51px,transparent_52px)] bg-[length:100px_100px]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-32 left-20 w-24 h-24 bg-black/3 rounded-3xl rotate-12 animate-float blur-sm"></div>
      <div className="absolute top-60 right-32 w-16 h-16 bg-black/2 rounded-full animate-float-delayed blur-sm"></div>
      <div className="absolute bottom-40 left-32 w-20 h-20 bg-black/3 rounded-2xl -rotate-12 animate-float-slow blur-sm"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-black/2 rounded-full animate-bounce blur-sm"></div>

      {/* Minimal Accent Dots */}
      <div className="absolute top-40 left-1/4 w-2 h-2 bg-black rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-black rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-black rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-6">
            {/* Premium Accent Line */}
            <div className="relative">
              <div className="w-1.5 h-16 bg-gradient-to-b from-gray-800 via-black to-gray-700 rounded-full shadow-lg"></div>
              <div className="absolute inset-0 w-1.5 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full blur-sm opacity-40"></div>
            </div>

            <div className="relative">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-black/5 backdrop-blur-xl rounded-xl border border-black/10 shadow-sm">
                <div className="relative">
                  <Sparkles className="h-4 w-4 text-black/70 animate-spin-slow" />
                  <div className="absolute inset-0 h-4 w-4 text-black/20 animate-ping opacity-20"></div>
                </div>
                <span className="text-xs font-semibold text-black/70 tracking-wide">
                  CURATED COLLECTION
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter">
                <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
                  Featured Cars
                </span>
              </h2>
              <p className="text-gray-600 mt-3 font-light text-lg">
                Handpicked premium vehicles crafted for excellence
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="group relative px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 hover:border-black/20 hover:bg-black/5 transition-all duration-300 shadow-sm hover:shadow-lg"
            asChild
          >
            <Link href="/cars" className="flex items-center gap-3">
              <span className="font-semibold text-black/80 group-hover:text-black transition-colors">
                View All Cars
              </span>
              <div className="relative overflow-hidden">
                <ChevronRight className="h-5 w-5 text-black/60 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          </Button>
        </div>

        {/* Enhanced Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Card Wrapper with Premium Hover Effect */}
              <div className="relative">
                {/* Subtle Premium Glow Effect on Hover */}
                <div className="absolute -inset-3 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                {/* Subtle Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>

                {/* Main Card Container */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-black/10 shadow-sm group-hover:shadow-xl group-hover:border-black/20 group-hover:bg-white transition-all duration-300">
                  <CarCard car={car} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Accent */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-black rounded-full opacity-20 animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-black/20 to-black/10 opacity-40"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full opacity-30 animate-pulse delay-200"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-black/10 to-black/20 opacity-40"></div>
            <div className="w-2 h-2 bg-black rounded-full opacity-20 animate-pulse delay-400"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 flex justify-center items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full opacity-30 animate-pulse"></div>
            <span className="font-medium">Premium Selection</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full opacity-30 animate-pulse delay-200"></div>
            <span className="font-medium">Verified Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full opacity-30 animate-pulse delay-400"></div>
            <span className="font-medium">Instant Availability</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};
export default Featured;

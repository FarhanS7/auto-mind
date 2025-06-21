"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Car,
  Clock,
  Search,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sample data - replace with your actual data
const carMakes = [
  { name: "Toyota", imageUrl: "/make/toyota.webp" },
  { name: "Honda", imageUrl: "/make/honda.webp" },
  { name: "BMW", imageUrl: "/make/bmw.webp" },
  { name: "Mercedes", imageUrl: "/make/mercedes.webp" },
  { name: "Audi", imageUrl: "/make/audi.webp" },
  { name: "Nissan", imageUrl: "/make/nissan.webp" },
  { name: "Ford", imageUrl: "/make/ford.webp" },
  { name: "Hyundai", imageUrl: "/make/hyundai.webp" },
  { name: "Volkswagen", imageUrl: "/make/volkswagen.webp" },
  { name: "Mazda", imageUrl: "/make/mazda.webp" },
  { name: "Subaru", imageUrl: "/make/subaru.webp" },
  { name: "Lexus", imageUrl: "/make/lexus.webp" },
];

const bodyTypes = [
  { name: "Sedan", imageUrl: "/body/sedan.webp" },
  { name: "SUV", imageUrl: "/body/suv.webp" },
  { name: "Hatchback", imageUrl: "/body/hatchback.webp" },
  { name: "Coupe", imageUrl: "/body/coupe.webp" },
  { name: "Convertible", imageUrl: "/body/convertible.webp" },
  { name: "Wagon", imageUrl: "/body/wagon.webp" },
  { name: "Pickup", imageUrl: "/body/pickup.webp" },
  { name: "Minivan", imageUrl: "/body/minivan.webp" },
];

export default function BrowseSections() {
  return (
    <>
      {/* Browse by Make Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,rgba(0,0,0,0.5)_40px,rgba(0,0,0,0.5)_41px,transparent_42px)] bg-[length:80px_80px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_39px,rgba(0,0,0,0.5)_40px,rgba(0,0,0,0.5)_41px,transparent_42px)] bg-[length:80px_80px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-black/4 rounded-3xl rotate-12 animate-float blur-sm"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-black/3 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-black/3 rounded-2xl -rotate-12 animate-float-slow blur-sm"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-2 h-12 bg-gradient-to-b from-black to-gray-600 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-12 bg-gradient-to-b from-black/50 to-gray-600/50 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-none tracking-tighter">
                  <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
                    Browse by Make
                  </span>
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Explore vehicles from your favorite manufacturers
                </p>
              </div>
            </div>

            <div className="relative group">
              <Button
                variant="ghost"
                className="bg-white/80 hover:bg-black hover:text-white border-2 border-black/20 hover:border-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                asChild
              >
                <Link href="/cars" className="flex items-center gap-3">
                  <Search className="h-5 w-5" />
                  View All Makes
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Makes Grid */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-lg opacity-20 animate-pulse"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {carMakes.map((make, index) => (
                  <Link
                    key={make.name}
                    href={`/cars?make=${make.name}`}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white border border-black/10 group-hover:border-black/20">
                      <div className="h-16 w-auto mx-auto mb-4 relative transform group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={
                            make.imageUrl ||
                            `/make/${make.name.toLowerCase()}.webp`
                          }
                          alt={make.name}
                          fill
                          style={{ objectFit: "contain" }}
                          className="filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-black transition-colors text-lg">
                        {make.name}
                      </h3>
                      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-0.5 bg-black rounded-full mx-auto"></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-16 w-28 h-28 bg-black/3 rounded-3xl rotate-45 animate-float blur-sm"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 bg-black/4 rounded-full animate-float-delayed blur-sm"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-black/5 backdrop-blur-xl rounded-2xl border border-black/10 shadow-lg animate-fade-in group hover:bg-black/10 transition-all duration-300">
              <div className="relative">
                <Star className="h-5 w-5 text-black animate-pulse" />
                <div className="absolute inset-0 h-5 w-5 text-black/20 animate-ping opacity-20"></div>
              </div>
              <span className="text-sm font-semibold text-black/80">
                Premium Car Discovery Experience
              </span>
              <Sparkles className="h-4 w-4 text-black/60 animate-pulse group-hover:animate-spin transition-all duration-300" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tighter">
              <span className="block text-black drop-shadow-sm">
                Why Choose
              </span>
              <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent animate-gradient-x">
                Our Platform
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the difference with our{" "}
              <span className="font-semibold text-black">
                AI-powered approach
              </span>{" "}
              to finding your perfect vehicle.
            </p>

            <div className="relative mx-auto w-32 h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-lg opacity-20 animate-pulse"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Feature 1 */}
                <div className="text-center group animate-fade-in-up">
                  <div className="relative mb-8">
                    <div className="bg-white border-2 border-black/10 group-hover:border-black/30 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <Car className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Zap className="h-4 w-4 text-white animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black group-hover:text-gray-800 transition-colors">
                    Wide Selection
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                    Thousands of verified vehicles from trusted dealerships and
                    private sellers with AI-powered matching technology.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center group animate-fade-in-up delay-200">
                  <div className="relative mb-8">
                    <div className="bg-white border-2 border-black/10 group-hover:border-black/30 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <Calendar className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Clock className="h-4 w-4 text-white animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black group-hover:text-gray-800 transition-colors">
                    Easy Test Drive
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                    Book a test drive online in minutes, with flexible
                    scheduling options and instant confirmation system.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center group animate-fade-in-up delay-400">
                  <div className="relative mb-8">
                    <div className="bg-white border-2 border-black/10 group-hover:border-black/30 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <Shield className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Star className="h-4 w-4 text-white animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black group-hover:text-gray-800 transition-colors">
                    Secure Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                    Verified listings and secure booking process for complete
                    peace of mind throughout your car buying journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Body Type Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-16 left-12 w-20 h-20 bg-black/4 rounded-2xl rotate-12 animate-float blur-sm"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-black/3 rounded-full animate-float-delayed blur-sm"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-2 h-12 bg-gradient-to-b from-black to-gray-600 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-12 bg-gradient-to-b from-black/50 to-gray-600/50 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-none tracking-tighter">
                  <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
                    Browse by Body Type
                  </span>
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Find the perfect vehicle style for your needs
                </p>
              </div>
            </div>

            <div className="relative group">
              <Button
                variant="ghost"
                className="bg-white/80 hover:bg-black hover:text-white border-2 border-black/20 hover:border-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                asChild
              >
                <Link href="/cars" className="flex items-center gap-3">
                  <Car className="h-5 w-5" />
                  View All Types
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Body Types Grid */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-lg opacity-20 animate-pulse"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {bodyTypes.map((type, index) => (
                  <Link
                    key={type.name}
                    href={`/cars?bodyType=${type.name}`}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={
                          type.imageUrl ||
                          `/body/${type.name.toLowerCase()}.webp`
                        }
                        alt={type.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                          {type.name}
                        </h3>
                        <div className="w-8 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

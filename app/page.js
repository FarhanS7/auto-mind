"use client";
// // import { getFeaturedCars } from "@/actions/home";
// import { CarCard } from "@/components/car-card";
// import { HomeSearch } from "@/components/home-search";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { bodyTypes, carMakes, faqItems, featuredCars } from "@/lib/data";
// import { SignedOut } from "@clerk/nextjs";
// import { Calendar, Car, ChevronRight, Shield } from "lucide-react";
// import Image from "next/image";

// import Link from "next/link";

// export default async function Home() {
//   // const featuredCars = await getFeaturedCars();

//   return (
//     <div className="flex flex-col pt-20">
//       {/* Hero Section with Gradient Title */}
//       <section className="relative py-16 md:py-28 dotted-background">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-8">
//             <h1 className="text-5xl md:text-8xl mb-4 gradient-title">
//               Find your Dream Car with AutoMind AI
//             </h1>
//             <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
//               Advanced AI Car Search and test drive from thousands of vehicles.
//             </p>
//           </div>

//           {/* Search Component (Client) */}
//           <HomeSearch />
//         </div>
//       </section>

//       {/* Featured Cars */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold">Featured Cars</h2>
//             <Button variant="ghost" className="flex items-center" asChild>
//               <Link href="/cars">
//                 View All <ChevronRight className="ml-1 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredCars.map((car) => (
//               <CarCard key={car.id} car={car} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Browse by Make */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold">Browse by Make</h2>
//             <Button variant="ghost" className="flex items-center" asChild>
//               <Link href="/cars">
//                 View All <ChevronRight className="ml-1 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {carMakes.map((make) => (
//               <Link
//                 key={make.name}
//                 href={`/cars?make=${make.name}`}
//                 className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
//               >
//                 <div className="h-16 w-auto mx-auto mb-2 relative">
//                   <Image
//                     src={
//                       make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
//                     }
//                     alt={make.name}
//                     fill
//                     style={{ objectFit: "contain" }}
//                   />
//                 </div>
//                 <h3 className="font-medium">{make.name}</h3>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-center mb-12">
//             Why Choose Our Platform
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <Car className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
//               <p className="text-gray-600">
//                 Thousands of verified vehicles from trusted dealerships and
//                 private sellers.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <Calendar className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
//               <p className="text-gray-600">
//                 Book a test drive online in minutes, with flexible scheduling
//                 options.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <Shield className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Secure Process</h3>
//               <p className="text-gray-600">
//                 Verified listings and secure booking process for peace of mind.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Browse by Body Type */}
// <section className="py-12 bg-gray-50">
//   <div className="container mx-auto px-4">
//     <div className="flex justify-between items-center mb-8">
//       <h2 className="text-2xl font-bold">Browse by Body Type</h2>
//       <Button variant="ghost" className="flex items-center" asChild>
//         <Link href="/cars">
//           View All <ChevronRight className="ml-1 h-4 w-4" />
//         </Link>
//       </Button>
//     </div>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {bodyTypes.map((type) => (
//         <Link
//           key={type.name}
//           href={`/cars?bodyType=${type.name}`}
//           className="relative group cursor-pointer"
//         >
//           <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
//             <Image
//               src={
//                 type.imageUrl || `/body/${type.name.toLowerCase()}.webp`
//               }
//               alt={type.name}
//               fill
//               className="object-cover group-hover:scale-105 transition duration-300"
//             />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
//             <h3 className="text-white text-xl font-bold pl-4 pb-2 ">
//               {type.name}
//             </h3>
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* FAQ Section with Accordion */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-center mb-8">
//             Frequently Asked Questions
//           </h2>
//           <Accordion type="single" collapsible className="w-full">
//             {faqItems.map((faq, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger>{faq.question}</AccordionTrigger>
//                 <AccordionContent>{faq.answer}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </section>

//       {/* CTA Section */}
// <section className="py-16 dotted-background text-white">
//   <div className="container mx-auto px-4 text-center">
//     <h2 className="text-3xl font-bold mb-4">
//       Ready to Find Your Dream Car?
//     </h2>
//     <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//       Join thousands of satisfied customers who found their perfect
//       vehicle through our platform.
//     </p>
//     <div className="flex flex-col sm:flex-row justify-center gap-4">
//       <Button size="lg" variant="secondary" asChild>
//         <Link href="/cars">View All Cars</Link>
//       </Button>
//       <SignedOut>
//         <Button size="lg" asChild>
//           <Link href="/sign-up">Sign Up Now</Link>
//         </Button>
//       </SignedOut>
//     </div>
//   </div>
// </section>
//     </div>
//   );
// }

// import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import { HomeSearch } from "@/components/home-search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { bodyTypes, carMakes, faqItems, featuredCars } from "@/lib/data";
import { SignedOut } from "@clerk/nextjs";
import {
  Calendar,
  Car,
  ChevronRight,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export default async function Home() {
  // const featuredCars = await getFeaturedCars();

  return (
    <div className="flex flex-col pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section with Enhanced Gradient Title */}
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

      {/* Featured Cars with Enhanced Design */}
      <section className="py-20 relative bg-gradient-to-b from-slate-50 to-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.3)_25%,rgba(59,130,246,0.3)_26%,transparent_27%)] bg-[length:100px_100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-1.5 h-12 bg-gradient-to-b from-blue-600 via-blue-500 to-purple-600 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 w-1.5 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full blur-sm opacity-60"></div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
                  Featured Cars
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                  Handpicked premium vehicles for you
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="group relative px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 shadow-sm hover:shadow-md"
              asChild
            >
              <Link href="/cars" className="flex items-center gap-2">
                <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                  View All
                </span>
                <div className="relative overflow-hidden">
                  <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </Button>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Wrapper with Subtle Hover Effect */}
                <div className="relative">
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Main Card Container */}
                  <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300">
                    <CarCard car={car} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Make with Glassmorphism */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Browse by Make
              </h2>
            </div>
            <Button
              variant="ghost"
              className="flex items-center group hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link href="/cars">
                View All
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {carMakes.map((make, index) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90 border border-white/20 animate-fade-in-up">
                  <div className="h-16 w-auto mx-auto mb-4 relative transform group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={
                        make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
                      }
                      alt={make.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {make.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Enhanced Icons */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Why Choose Our Platform
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group animate-fade-in-up">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <Car className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="h-3 w-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Wide Selection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thousands of verified vehicles from trusted dealerships and
                private sellers with AI-powered matching.
              </p>
            </div>
            <div className="text-center group animate-fade-in-up delay-200">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <Calendar className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="h-3 w-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Easy Test Drive
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Book a test drive online in minutes, with flexible scheduling
                options and instant confirmation.
              </p>
            </div>
            <div className="text-center group animate-fade-in-up delay-400">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <Shield className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="h-3 w-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Secure Process
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Verified listings and secure booking process for complete peace
                of mind throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Body Type with Enhanced Overlays */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Body Type</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image
                    src={
                      type.imageUrl || `/body/${type.name.toLowerCase()}.webp`
                    }
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <h3 className="text-white text-xl font-bold pl-4 pb-2 ">
                    {type.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Enhanced Accordion */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 px-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 dotted-background text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect
            vehicle through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cars">View All Cars</Link>
            </Button>
            <SignedOut>
              <Button size="lg" asChild>
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .bg-300% {
          background-size: 300%;
        }
      `}</style>
    </div>
  );
}

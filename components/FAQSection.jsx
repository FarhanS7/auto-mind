"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Car,
  Clock,
  HelpCircle,
  Shield,
  Sparkles,
} from "lucide-react";

const faqItems = [
  {
    question: "How does AutoMind AI find the perfect car for me?",
    answer:
      "Our advanced AI algorithm analyzes your preferences, budget, lifestyle, and driving needs to match you with vehicles from our extensive database of over 50,000 cars. The system learns from your interactions and continuously refines recommendations to ensure you find your ideal vehicle.",
  },
  {
    question: "Is the AutoMind platform free to use?",
    answer:
      "Yes! Creating an account and browsing cars is completely free. You only pay when you're ready to purchase or finance a vehicle. We believe in transparent pricing with no hidden fees or subscription costs.",
  },
  {
    question: "Can I schedule test drives through the platform?",
    answer:
      "Absolutely! Once you find a car you're interested in, you can instantly book a test drive at your convenience. Our partner dealerships offer flexible scheduling, including evenings and weekends, to fit your busy lifestyle.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We partner with leading financial institutions to offer competitive financing rates, lease options, and trade-in evaluations. Our AI pre-qualifies you for the best rates before you even visit the dealership, saving you time and ensuring transparency.",
  },
  {
    question: "How accurate are the AI recommendations?",
    answer:
      "Our AI has a 94% customer satisfaction rate for vehicle matches. The system considers over 200 data points including your preferences, driving patterns, budget, and lifestyle factors to ensure highly accurate recommendations tailored specifically to you.",
  },
  {
    question: "Can I sell or trade in my current vehicle?",
    answer:
      "Yes! Our platform provides instant trade-in valuations using current market data and vehicle condition assessments. We also connect you with verified buyers if you prefer to sell privately, maximizing your vehicle's value.",
  },
  {
    question: "What support is available during the buying process?",
    answer:
      "Our dedicated customer success team provides 24/7 support throughout your car buying journey. From initial search to final purchase, we're here to answer questions, facilitate communications, and ensure a smooth experience.",
  },
  {
    question: "Are the vehicles inspected and verified?",
    answer:
      "Every vehicle in our network undergoes a comprehensive inspection and verification process. We provide detailed condition reports, history checks, and authenticity guarantees to ensure you're getting exactly what you expect.",
  },
];

export default function FAQ() {
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
      <div className="absolute top-16 left-12 w-32 h-32 bg-black/4 rounded-3xl rotate-12 animate-float blur-sm"></div>
      <div className="absolute top-32 right-16 w-24 h-24 bg-black/3 rounded-full animate-float-delayed blur-sm"></div>
      <div className="absolute bottom-32 left-16 w-28 h-28 bg-black/3 rounded-2xl -rotate-12 animate-float-slow blur-sm"></div>
      <div className="absolute bottom-16 right-12 w-20 h-20 bg-black/4 rounded-full animate-bounce blur-sm"></div>

      {/* Minimal Accent Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black rounded-full opacity-30 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-black rounded-full opacity-25 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-black/5 backdrop-blur-xl rounded-2xl border border-black/10 shadow-lg animate-fade-in group hover:bg-black/10 transition-all duration-300">
            <div className="relative">
              <HelpCircle className="h-5 w-5 text-black animate-pulse" />
              <div className="absolute inset-0 h-5 w-5 text-black/20 animate-ping opacity-20"></div>
            </div>
            <span className="text-sm font-semibold text-black/80">
              Common Questions Answered
            </span>
            <Sparkles className="h-4 w-4 text-black/60 animate-pulse group-hover:animate-spin transition-all duration-300" />
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tighter">
            <span className="block text-black drop-shadow-sm">
              Frequently Asked
            </span>
            <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent animate-gradient-x">
              Questions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-300">
            Everything you need to know about{" "}
            <span className="font-semibold text-black">AutoMind AI</span> and
            how our platform helps you find the perfect vehicle.
          </p>

          {/* Decorative Line */}
          <div className="relative mx-auto w-32 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto animate-fade-in-up delay-500">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-lg opacity-20 animate-pulse"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
              <Accordion type="single" collapsible className="w-full space-y-6">
                {faqItems.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-black transition-all duration-300 px-8 py-6 [&[data-state=open]]:bg-black/5">
                      <div className="flex items-start gap-4 text-left">
                        <div className="relative mt-1">
                          <div className="w-2 h-2 bg-black rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-black rounded-full opacity-20 animate-pulse"></div>
                        </div>
                        <span className="text-lg md:text-xl leading-tight">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed px-8 pb-8">
                      <div className="pl-6 border-l-2 border-black/10 ml-2">
                        <p className="text-base md:text-lg">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-fade-in delay-1000">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Our support team is here to help you 24/7. Get personalized
              assistance with your car search.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-black to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <button className="relative bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-3">
                  <Shield className="h-5 w-5" />
                  Contact Support
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              <button className="bg-white/80 hover:bg-black hover:text-white border-2 border-black/20 hover:border-black text-black px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-3">
                <Car className="h-5 w-5" />
                Start Car Search
                <Sparkles className="h-5 w-5 group-hover:animate-spin transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-black/40 animate-pulse" />
              <span className="font-medium">Average Response: 2 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-black/40 animate-pulse delay-200" />
              <span className="font-medium">98% Issue Resolution Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}

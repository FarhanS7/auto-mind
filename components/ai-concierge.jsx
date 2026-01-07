"use client";

import { getConciergeResponse } from "@/actions/concierge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, MessageSquare, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const AIConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Auto Mind AI Concierge. How can I help you find your dream car today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await getConciergeResponse([...messages, userMessage]);
      if (response.success) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: response.data.response,
            recommendations: response.data.recommendations,
          },
        ]);
      } else {
        toast.error(response.error || "Failed to get AI response");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <Card className="w-[350px] md:w-[400px] h-[500px] flex flex-col shadow-2xl border-2 animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="bg-blue-600 text-white flex flex-row items-center justify-between py-3 px-4">
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <Bot size={20} />
              AI Concierge
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-blue-700 h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-hidden p-0 bg-gray-50/50">
            <div className="h-full overflow-y-auto p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white border text-gray-800 shadow-sm"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                      
                      {msg.recommendations && msg.recommendations.length > 0 && (
                        <div className="mt-4 space-y-3">
                          <p className="font-semibold text-xs uppercase text-gray-500">
                            Recommended for you:
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {msg.recommendations.map((car) => (
                              <div key={car.id} className="scale-95 origin-left">
                                <RecommendationMiniCard car={car} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white border rounded-2xl px-4 py-2 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-3 border-t bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex w-full gap-2"
            >
              <Input
                placeholder="Ask about a car..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 focus-visible:ring-blue-600"
              />
              <Button type="submit" size="icon" disabled={loading} className="bg-blue-600 hover:bg-blue-700">
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 animate-in fade-in duration-500"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

// Simplified car card for chat results
const RecommendationMiniCard = ({ car }) => {
  return (
    <div className="flex gap-3 bg-white p-2 border rounded-xl hover:border-blue-300 transition-colors cursor-pointer shadow-sm group" onClick={() => window.location.href = `/cars/${car.id}`}>
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={car.images?.[0] || "/placeholder-car.jpg"}
          alt={`${car.make} ${car.model}`}
          className="object-cover w-full h-full group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <h4 className="font-bold text-sm truncate">{car.make} {car.model}</h4>
        <p className="text-blue-600 font-bold text-xs">${car.price.toLocaleString()}</p>
        <div className="text-[10px] text-gray-500 flex gap-1 items-center mt-1">
          <span>{car.year}</span>
          <span>•</span>
          <span className="truncate">{car.transmission}</span>
        </div>
      </div>
    </div>
  );
};

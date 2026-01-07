"use client";

import { getCarValuation } from "@/actions/valuation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Loader2, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from "recharts";
import { toast } from "sonner";

const COLORS = ["#2563eb", "#db2777", "#ea580c", "#16a34a", "#9333ea", "#0891b2"];

export const MarketTrends = ({ data }) => {
  const [valuationLoading, setValuationLoading] = useState(false);
  const [valuationResult, setValuationResult] = useState(null);
  const [valuationForm, setValuationForm] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
  });

  const handleValuation = async (e) => {
    e.preventDefault();
    setValuationLoading(true);
    try {
      const res = await getCarValuation(valuationForm);
      if (res.success) {
        setValuationResult(res.data);
      } else {
        toast.error(res.error);
      }
    } catch (e) {
      toast.error("Valuation failed");
    } finally {
      setValuationLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Market Intelligence</h2>
        <p className="text-gray-500">Live data insights and AI-powered car valuations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Charts Section */}
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="prices" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="prices">Average Prices</TabsTrigger>
              <TabsTrigger value="inventory">Inventory Mix</TabsTrigger>
            </TabsList>
            
            <TabsContent value="prices" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Average Price by Body Type</CardTitle>
                  <CardDescription>Typical selling price for different car styles</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.avgPriceByBodyType}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(val) => `$${val/1000}k`} />
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, "Avg Price"]}
                        contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                      />
                      <Bar dataKey="avgPrice" radius={[4, 4, 0, 0]}>
                        {data.avgPriceByBodyType.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory by Brand</CardTitle>
                  <CardDescription>Current market availability across manufacturers</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                   <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.inventoryByMake}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="count"
                      >
                        {data.inventoryByMake.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Price vs Mileage Correlation</CardTitle>
              <CardDescription>How usage affects valuation (Scatter plot)</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid />
                  <XAxis type="number" dataKey="mileage" name="Mileage" unit=" mi" />
                  <YAxis type="number" dataKey="price" name="Price" unit="$" />
                  <ZAxis type="string" dataKey="label" name="Car" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Cars" data={data.priceVsMileage} fill="#2563eb" />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Valuation Form Section */}
        <div className="space-y-6">
          <Card className="border-2 border-blue-100 shadow-md">
            <CardHeader className="bg-blue-50/50">
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="text-blue-600" />
                AI Car Valuation
              </CardTitle>
              <CardDescription>Get an instant fair-market estimate</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleValuation} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Make</label>
                  <Input 
                    placeholder="e.g. Toyota" 
                    value={valuationForm.make}
                    onChange={(e) => setValuationForm({...valuationForm, make: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Model</label>
                  <Input 
                    placeholder="e.g. Corolla" 
                    value={valuationForm.model}
                    onChange={(e) => setValuationForm({...valuationForm, model: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year</label>
                    <Input 
                      type="number" 
                      placeholder="2022" 
                      value={valuationForm.year}
                      onChange={(e) => setValuationForm({...valuationForm, year: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mileage</label>
                    <Input 
                      type="number" 
                      placeholder="35000" 
                      value={valuationForm.mileage}
                      onChange={(e) => setValuationForm({...valuationForm, mileage: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={valuationLoading}>
                  {valuationLoading ? <Loader2 className="animate-spin" /> : "Get AI Valuation"}
                </Button>
              </form>

              {valuationResult && (
                <div className="mt-8 p-4 bg-gray-50 rounded-2xl border space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase font-semibold">Estimated Value</p>
                    <h3 className="text-3xl font-bold text-blue-600">
                      ${valuationResult.estimatedValue.toLocaleString()}
                    </h3>
                    <Badge variant="outline" className="mt-1">
                      {valuationResult.marketSentiment} Market
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Value Range:</span>
                      <span className="font-medium">
                        ${valuationResult.range.min.toLocaleString()} - ${valuationResult.range.max.toLocaleString()}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl text-xs text-gray-600 border flex gap-2">
                      <Info className="flex-shrink-0 text-blue-500" size={14} />
                      <p>{valuationResult.expertAdvice}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle>Market Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-300">
              <p>• SUV prices have risen 4% this quarter.</p>
              <p>• Electric vehicle inventory is at an all-time high.</p>
              <p>• Rare colors (Green, Orange) carry a 2-3% premium.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

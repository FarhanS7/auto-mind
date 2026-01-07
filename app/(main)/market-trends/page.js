import { getMarketTrends } from "@/actions/valuation";
import { MarketTrends } from "@/components/market-trends";

export default async function MarketTrendsPage() {
  const trendsResponse = await getMarketTrends();

  if (!trendsResponse.success) {
    return (
      <div className="container mx-auto px-4 pt-24 min-h-screen">
        <h1 className="text-2xl font-bold text-red-600">Failed to load market data</h1>
        <p className="text-gray-600">{trendsResponse.error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen">
      <MarketTrends data={trendsResponse.data} />
    </div>
  );
}

import React from "react";
import { useTrendingCoins } from "../../hooks/useTrendingCoins";

const TrendingCoins = () => {
  const { trendingCoins, loading } = useTrendingCoins();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Trending Coins (24h)</h3>
      <div className="flex flex-col gap-3">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span>{coin.item.symbol.toUpperCase()}</span>
            </div>
            <span
              className={`text-sm ${
                coin.item.data.price_change_percentage_24h.usd >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;

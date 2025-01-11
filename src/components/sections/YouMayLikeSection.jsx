import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CoinCard = ({ coin }) => (
  <div className="min-w-[250px] bg-white p-4 rounded-lg border border-gray-200">
    <div className="flex items-center gap-2 mb-2">
      <img src={coin.image} alt={coin.symbol} className="w-6 h-6" />
      <span className="uppercase">{coin.symbol}</span>
      <span
        className={`ml-2 text-sm ${
          coin.price_change_24h >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {coin.price_change_24h?.toFixed(2)}%
      </span>
    </div>

    <div className="text-lg font-bold mb-2">${coin.current_price}</div>

    <img
      src={coin.sparkline}
      alt={`${coin.symbol} price graph`}
      className="w-full h-16"
    />
  </div>
);

const YouMayLikeSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -280 : 280;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x"
        >
          {/* Sample coins - replace with actual data */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="snap-start">
              <CoinCard
                coin={{
                  symbol: "BNB",
                  current_price: 319.34,
                  price_change_24h: 2.56,
                  image: "/api/placeholder/24/24",
                  sparkline: "/api/placeholder/200/64",
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default YouMayLikeSection;

import React from "react";
import { formatCurrency, formatPercentage } from "../../utils/formatter";

const CoinInfo = ({ coinData }) => {
  if (!coinData) return null;

  const { price, details } = coinData;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <img src={details.image.small} alt={details.name} className="w-8 h-8" />
        <h1 className="text-2xl font-bold">{details.name}</h1>
        <span className="text-gray-500">{details.symbol.toUpperCase()}</span>
      </div>

      <div className="flex items-baseline gap-4">
        <h2 className="text-3xl font-bold">${formatCurrency(price.usd)}</h2>
        <span
          className={`text-lg ${
            price.usd_24h_change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {formatPercentage(price.usd_24h_change)}
        </span>
      </div>

      <div className="text-gray-500">₹{formatCurrency(price.inr)}</div>
    </div>
  );
};

export default CoinInfo;

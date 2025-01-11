import React from "react";
import { useParams } from "react-router-dom";
import { useCoinData } from "../hooks/useCoinData";
import CoinInfo from "../components/common/CoinInfo";
import TradingViewChart from "../components/chart/TradingViewChart";
import TrendingCoins from "../components/common/TrendingCoins";

const CoinPage = () => {
  const { coinId = "bitcoin" } = useParams();
  const { coinData, loading } = useCoinData(coinId);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CoinInfo coinData={coinData} />
          <TradingViewChart symbol={coinData?.details?.symbol?.toUpperCase()} />
        </div>
        <div>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;

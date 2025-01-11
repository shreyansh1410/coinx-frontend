import React, { useEffect, useRef } from "react";

const TradingViewChart = ({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: container.current.id,
          symbol: `${symbol}USD`,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          height: 400,
          save_image: false,
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [symbol]);

  return (
    <div id="tradingview_widget" ref={container} className="w-full h-[400px]" />
  );
};

export default TradingViewChart;

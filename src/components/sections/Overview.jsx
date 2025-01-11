"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const Overview = ({ coinData }) => {
  const {
    todaysLow = 46930.22,
    todaysHigh = 49243.93,
    currentPrice = 46953.04,
  } = coinData || {};

  const sliderPosition =
    ((currentPrice - todaysLow) / (todaysHigh - todaysLow)) * 100;

  const fundamentalsData = [
    { label: "Bitcoin Price", value: "$46,953.04" },
    { label: "Market Cap", value: "$123,507,040,047" },
    { label: "Market Cap Dominance", value: "38.345%" },
    { label: "24h Trading Volume", value: "$23,446,202,782" },
    { label: "Volume / Market Cap", value: "0.2976" },
    { label: "All-Time High", value: "$69,044.77" },
    { label: "All-Time Low", value: "$67.81" },
  ];

  return (
    <div className="w-full max-w-[881px]">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="border-b mb-6 w-full justify-start h-auto gap-8 bg-transparent p-0">
          <TabsTrigger
            value="overview"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="fundamentals"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            Fundamentals
          </TabsTrigger>
          <TabsTrigger
            value="news"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            News Insights
          </TabsTrigger>
          <TabsTrigger
            value="sentiments"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            Sentiments
          </TabsTrigger>
          <TabsTrigger
            value="team"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            Team
          </TabsTrigger>
          <TabsTrigger
            value="technicals"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            Technicals
          </TabsTrigger>
          <TabsTrigger
            value="tokenomics"
            className="px-0 py-4 text-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent h-auto"
          >
            Tokenomics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-5">
            <Card>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Performance</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Today's Low</span>
                    <span className="text-sm text-gray-600">Today's High</span>
                  </div>
                  <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
                    <div
                      className="absolute w-1 h-4 bg-black -top-1 -ml-0.5"
                      style={{ left: `${sliderPosition}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm">
                      ${todaysLow.toLocaleString()}
                    </span>
                    <span className="text-sm">
                      ${todaysHigh.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold">Fundamentals</h3>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {fundamentalsData.slice(0, 4).map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between py-2 border-b border-gray-200"
                        >
                          <span className="text-sm text-gray-500">
                            {item.label}
                          </span>
                          <span className="text-sm font-medium">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {fundamentalsData.slice(4).map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between py-2 border-b border-gray-200"
                        >
                          <span className="text-sm text-gray-500">
                            {item.label}
                          </span>
                          <span className="text-sm font-medium">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Sentiment</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500" />
                        <p className="text-base font-medium">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold">Analyst Estimates</h3>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="w-32 h-32 rounded-full bg-[#EBF9F4] flex items-center justify-center">
                      <span className="text-3xl text-[#0FBA83]">76%</span>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-8">
                        <span className="text-sm text-gray-500 w-8">Buy</span>
                        <div
                          className="flex-1 h-2 bg-[#00B386] rounded-sm"
                          style={{ width: "76%" }}
                        />
                        <span className="text-sm text-gray-500">76%</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="text-sm text-gray-500 w-8">Hold</span>
                        <div
                          className="flex-1 h-2 bg-gray-300 rounded-sm"
                          style={{ width: "8%" }}
                        />
                        <span className="text-sm text-gray-500">8%</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="text-sm text-gray-500 w-8">Sell</span>
                        <div
                          className="flex-1 h-2 bg-[#F7324C] rounded-sm"
                          style={{ width: "16%" }}
                        />
                        <span className="text-sm text-gray-500">16%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">About Bitcoin</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">What is Bitcoin?</h4>
                      <p className="text-sm text-gray-600">
                        Bitcoin's price today is US$46,953.04, with a 24-hour
                        trading volume of $23,446,202,782. BTC is +2.91% in the
                        last 24 hours. It has a circulating supply of 19.24M BTC
                        and a max supply of 21M BTC.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        Lorem ipsum dolor sit amet
                      </h4>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam placerat sit laoreet tristique pharetra. Diam id
                        et lectus urna et tellus aliquam dictum at. Viverra
                        suspendisse etiam facilisi diam ut sed. Quam scelerisque
                        fermentum sapien morbi sodales odio sed rhoncus.
                      </p>
                      <p className="text-sm text-gray-600 mt-4">
                        Diam praesent massa dapibus magna aliquam a dictumst
                        volutpat. Egestas vitae pellentesque auctor amet. Nunc
                        sagittis libero adipiscing cursus felis pellentesque
                        interdum. Odio cursus phasellus velit in senectus enim
                        dui. Turpis tristique placerat interdum sed volutpat. Id
                        imperdiet magna eget eros donec cursus nunc.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Already Holding Bitcoin?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] rounded-lg p-4">
                      <div className="flex items-center gap-6">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20205408-m4HR834fybmnXOITU97Ty3hOZvZ8eC.png"
                          alt="Calculate profits"
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="text-white font-bold text-lg mb-2">
                            Calculate your Profits
                          </h4>
                          <Button
                            variant="secondary"
                            className="bg-white text-black hover:bg-gray-100"
                          >
                            Check Now →
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#FF9865] to-[#EF3031] rounded-lg p-4">
                      <div className="flex items-center gap-6">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20205408-m4HR834fybmnXOITU97Ty3hOZvZ8eC.png"
                          alt="Calculate tax liability"
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="text-white font-bold text-lg mb-2">
                            Calculate your tax liability
                          </h4>
                          <Button
                            variant="secondary"
                            className="bg-white text-black hover:bg-gray-100"
                          >
                            Check Now →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Overview;

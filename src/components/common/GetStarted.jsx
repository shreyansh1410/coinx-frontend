import React from "react";
import { ArrowRight } from "lucide-react";

const GetStartedCard = () => {
  return (
    <div className="bg-blue-600 text-white rounded-2xl p-8 mb-6">
      <h2 className="text-2xl font-bold mb-4">
        Get Started with KoinX for FREE
      </h2>
      <p className="text-gray-100 mb-6">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <div className="flex justify-center mb-6">
        <img
          src="/illustration.svg"
          alt="KoinX features illustration"
          className="w-60"
        />
      </div>

      <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
        Get Started for FREE
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default GetStartedCard;

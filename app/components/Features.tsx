import { CircleCheck, CreditCard, Sprout, Truck } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8">
      <h2 className="text-center text-lg md:text-2xl text-gray-800 font-light mt-8">
        What makes our brand different
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-6 mt-11">
        <div className="bg-gray-100 p-11">
          <Truck strokeWidth={0.8} />
          <h4 className="text-base md:text-lg font-light mt-3">
            Next day as standard
          </h4>
          <p className="mt-3 text-xs text-gray-600 leading-4.5">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="bg-gray-100 p-11">
          <CircleCheck strokeWidth={0.8} />
          <h4 className="text-base md:text-lg font-light mt-3">
            Made by true artisans
          </h4>
          <p className="mt-3 text-xs text-gray-600 leading-4.5">
            Handmade crafted goods made with real passion and craftmanship
          </p>
        </div>

        <div className="bg-gray-100 p-11">
          <CreditCard strokeWidth={0.8} />
          <h4 className="text-base md:text-lg font-light mt-3">
            Unbeatable prices
          </h4>
          <p className="mt-3 text-xs text-gray-600 leading-4.5">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        <div className="bg-gray-100 p-11">
          <Sprout strokeWidth={0.8} />
          <h4 className="text-base md:text-lg font-light mt-3">
            Recycled packaging
          </h4>
          <p className="mt-3 text-xs text-gray-600 leading-4.5">
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

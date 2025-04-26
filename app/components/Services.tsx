import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-18">
        <Image
          src="/services.png"
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="cta"
        />

        <div className="bg-gray-200 p-8 md:p-24">
          <div className="max-w-xl">
            <h2 className="text-base md:text-lg text-gray-700 sm:text-3xl font-light tracking-wider leading-6.5 md:leading-10">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h2>

            <p className="mt-6 md:mt-8 text-gray-600 leading-6.5 text-xs md:text-sm font-extralight">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p className="mt-3.5 md:mt-10 text-gray-600 leading-6.5 text-xs md:text-sm font-extralight">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>

          <button className="cursor-pointer p-3.5 px-4 md:px-7 bg-white mt-12 md:mt-52 text-xs lg:text-sm text-gray-700 font-light w-full md:w-auto">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;

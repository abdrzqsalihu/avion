import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="p-5 md:hidden">
        <h1 className="text-2xl text-gray-700 font-light leading-8.5">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className="mt-6 text-sm text-gray-600 font-extralight leading-6.5">
          With our new collection, view over 400 bespoke pieces from homeware
          through to furniture today
        </p>
        <button className="w-full p-3.5 bg-gray-100 mt-8 text-xs text-gray-800 font-light">
          View collection
        </button>
      </div>

      <Image
        src={"/hero.jpeg"}
        alt="hero"
        width={1000}
        height={1000}
        className="mt-6 md:hidden"
      />

      {/* MEDIUM SCREEN  */}
      <div
        className="hidden md:block"
        style={{
          position: "relative",
          width: "100%",
          height: "750px",
          backgroundImage: "url(/hero.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center -180px",
        }}
      >
        <div
          className="bg-white p-8 lg:p-10 max-w-lg lg:max-w-xl"
          style={{
            position: "absolute",
            top: "45%",
            right: "12%",
            transform: "translate(-0%, -50%)",
          }}
        >
          <h1 className="text-xl lg:text-3xl text-gray-700 font-light leading-8 lg:leading-10.5">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="mt-4 lg:mt-6 text-xs lg:text-sm text-gray-500 font-extralight">
            Shop the new Spring 2025 collection today
          </p>

          <button className="p-3.5 px-5 bg-gray-100 mt-12 lg:mt-16 text-xs lg:text-sm text-gray-800 font-light">
            View collection
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

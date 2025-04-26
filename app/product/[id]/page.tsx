import Features from "@/app/components/Features";
import Newsletter from "@/app/components/Newsletter";
import ProductListings from "@/app/components/ProductListings";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/products/chair.png"
          width={750}
          height={500}
          alt="product"
        />

        <div className="p-6 md:p-32 max-w-5xl">
          <h2 className="text-xl md:text-3xl font-light text-gray-700 tracking-tight">
            The Dandy Chair
          </h2>
          <p className="mt-2 md:mt-3 font-extralight text-gray-700 text-sm md:ext-lg">
            £250
          </p>
          <p className="mt-8 md:mt-10 text-gray-800 text-xs tracking-wider">
            Description
          </p>
          <p className="mt-2.5 text-gray-600 text-xs md:text-sm leading-6.5 font-extralight">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>

          <ul className="mt-10 list-disc ml-4 text-xs md:text-sm space-y-2.5 text-gray-800 font-light">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <div className="mt-14 md:mt-16 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <p className="text-gray-800 text-xs">Quantity:</p>
              <div className="flex items-center justify-between bg-gray-100 px-3.5">
                <button
                  type="button"
                  className="text-gray-600 transition hover:opacity-75 cursor-pointer"
                >
                  <Minus strokeWidth={0.9} size={15} />
                </button>

                <input
                  type="number"
                  id="Quantity"
                  value="1"
                  className="h-10 w-14 border-none focus:border-none text-center text-gray-700 font-extralight sm:text-sm [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
                  type="button"
                  className="text-gray-600 transition hover:opacity-75 cursor-pointer"
                >
                  <Plus strokeWidth={0.9} size={15} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#2A254B] p-3.5 px-7 text-white w-full sm:w-auto mt-5 sm:mt-0 cursor-pointer"
            >
              <span className="text-xs md:text-sm font-extralight">
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl p-4 lg:px-8">
        <h2 className="text-lg md:text-2xl text-gray-800 font-light mt-12">
          You might also like
        </h2>
      </div>

      <ProductListings limit={4} />

      <div className="flex justify-center">
        <Link
          href="/product"
          className="cursor-pointer mx-auto p-3.5 px-5 md:px-7 bg-gray-100 text-xs lg:text-sm text-gray-800 font-light"
        >
          View collection
        </Link>
      </div>

      <Features />
      <Newsletter />
    </div>
  );
};

export default page;

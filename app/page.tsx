"use client";

import Link from "next/link";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import ProductListings from "./components/ProductListings";
import { useState } from "react";

export default function Home() {
  const [filters] = useState<{
    category: string[];
    productType: string[];
    price: string[];
  }>({
    category: [],
    productType: [],
    price: [],
  });

  const [sortBy] = useState<string>("Date Added");
  return (
    <div>
      <Hero />
      <Features />
      <div className="mt-14">
        <ProductListings filters={filters} sortBy={sortBy} limit={4} />
      </div>
      <div className="flex justify-center">
        <Link
          href="/product"
          className="cursor-pointer mx-auto p-3.5 px-5 md:px-7 bg-gray-100 text-xs lg:text-sm text-gray-800 font-light"
        >
          View collection
        </Link>
      </div>
      <Cta />
      <Newsletter />
    </div>
  );
}

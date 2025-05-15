"use client";
import React, { useState } from "react";
import ProductListings from "../components/ProductListings";
import ProductFilter from "../components/ProductFilter";

const ProductPage = () => {
  const [filters, setFilters] = useState<{
    category: string[];
    productType: string[];
    price: string[];
  }>({
    category: [],
    productType: [],
    price: [],
  });

  const [sortBy, setSortBy] = useState<string>("Date Added");

  return (
    <div>
      {/* Hero Section */}
      <section className="product-bg-shift-up overflow-hidden bg-[url(/product_bg.jpg)] bg-cover bg-no-repeat">
        <div className="bg-black/10 p-8 py-12 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-screen-2xl md:px-8">
            <h2 className="text-xl font-light text-white sm:text-lg md:text-4xl text-center md:text-left">
              All products
            </h2>
          </div>
        </div>
      </section>

      <ProductFilter onFilterChange={setFilters} onSortChange={setSortBy} />
      <ProductListings filters={filters} sortBy={sortBy} />
    </div>
  );
};

export default ProductPage;

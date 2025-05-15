"use client";

import { FilterProps } from "@/types/products";
import React, { useState } from "react";

function ProductFilter({ onFilterChange, onSortChange }: FilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("Date Added");

  const handleCheckboxChange = (
    section: "category" | "productType" | "price",
    value: string,
    checked: boolean
  ) => {
    let current: string[] = [];
    let setter: (value: string[]) => void;

    if (section === "category") {
      current = selectedCategories;
      setter = setSelectedCategories;
    } else if (section === "productType") {
      current = selectedTypes;
      setter = setSelectedTypes;
    } else {
      current = selectedPriceRanges;
      setter = setSelectedPriceRanges;
    }

    const updated = checked
      ? [...current, value]
      : current.filter((item) => item !== value);

    setter(updated);

    onFilterChange({
      category: section === "category" ? updated : selectedCategories,
      productType: section === "productType" ? updated : selectedTypes,
      price: section === "price" ? updated : selectedPriceRanges,
    });
  };

  const resetSection = (section: "category" | "productType" | "price") => {
    if (section === "category") {
      setSelectedCategories([]);
      onFilterChange({
        category: [],
        productType: selectedTypes,
        price: selectedPriceRanges,
      });
    } else if (section === "productType") {
      setSelectedTypes([]);
      onFilterChange({
        category: selectedCategories,
        productType: [],
        price: selectedPriceRanges,
      });
    } else if (section === "price") {
      setSelectedPriceRanges([]);
      onFilterChange({
        category: selectedCategories,
        productType: selectedTypes,
        price: [],
      });
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    setSortBy(newSort);
    onSortChange(newSort);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 sm:gap-12">
          {/* Category Filter */}
          <details className="group relative">
            <summary className="flex items-center gap-2 text-gray-600 [&::-webkit-details-marker]:hidden cursor-pointer">
              <span className="text-xs md:text-sm"> Category </span>
              <span className="transition-transform group-open:-rotate-180">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
                </svg>
              </span>
            </summary>

            <div className="z-10 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs md:text-sm text-gray-700">
                  {selectedCategories.length} Selected
                </span>
                <button
                  onClick={() => resetSection("category")}
                  className="text-xs text-gray-700 underline hover:text-gray-900 cursor-pointer font-extralight"
                >
                  Reset
                </button>
              </div>

              <fieldset className="p-3">
                <div className="flex flex-col items-start gap-3">
                  {["Chair", "Plant pots", "Crokery"].map((category) => (
                    <label
                      key={category}
                      className="inline-flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "category",
                            category,
                            e.target.checked
                          )
                        }
                        className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      />
                      <span className="text-sm font-light text-gray-700">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </details>

          {/* Product Type Filter */}
          <details className="hidden md:block group relative">
            <summary className="flex items-center gap-2 text-gray-600 [&::-webkit-details-marker]:hidden cursor-pointer">
              <span className="text-sm"> Product type </span>
              <span className="transition-transform group-open:-rotate-180">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
                </svg>
              </span>
            </summary>

            <div className="z-10 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-gray-700">
                  {selectedTypes.length} Selected
                </span>
                <button
                  onClick={() => resetSection("productType")}
                  className="text-xs text-gray-700 underline hover:text-gray-900 cursor-pointer font-extralight"
                >
                  Reset
                </button>
              </div>

              <fieldset className="p-3">
                <div className="flex flex-col items-start gap-3">
                  {["Furniture", "Light fittings", "Sofas"].map((type) => (
                    <label
                      key={type}
                      className="inline-flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "productType",
                            type,
                            e.target.checked
                          )
                        }
                        className="size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      />
                      <span className="text-sm font-light text-gray-700">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </details>

          {/* Price Filter */}
          <details className="group relative">
            <summary className="flex items-center gap-2 text-gray-600 [&::-webkit-details-marker]:hidden cursor-pointer">
              <span className="text-xs md:text-sm"> Price </span>
              <span className="transition-transform group-open:-rotate-180">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
                </svg>
              </span>
            </summary>

            <div className="z-10 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs md:text-sm text-gray-700">
                  {selectedPriceRanges.length} Selected
                </span>
                <button
                  onClick={() => resetSection("price")}
                  className="text-xs text-gray-700 underline hover:text-gray-900 cursor-pointer font-extralight"
                >
                  Reset
                </button>
              </div>

              <fieldset className="p-3">
                <div className="flex flex-col items-start gap-3">
                  {["0-100", "101-250", "250+"].map((priceRange) => (
                    <label
                      key={priceRange}
                      className="inline-flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(priceRange)}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "price",
                            priceRange,
                            e.target.checked
                          )
                        }
                        className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      />
                      <span className="text-xs md:text-sm font-light text-gray-700">
                        {priceRange.replace("-", " - ")}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </details>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-10">
          <p className="hidden md:block text-sm text-gray-600">Sorting by:</p>
          <div className="relative w-32 md:w-36">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-open:-rotate-180 absolute top-0 bottom-0 my-auto text-gray-400 right-3"
            >
              <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
            </svg>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="w-full px-3 py-2 text-xs md:text-sm text-gray-600 outline-none cursor-pointer appearance-none"
            >
              <option>Date Added</option>
              <option>Name</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;

"use client";

import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ListingsProps {
  limit?: number;
  onProductsLoaded?: (products: Product[]) => void;
  filters?: {
    category: string[];
    productType: string[];
    price: string[];
  };
  sortBy: string;
}

function ProductListings({
  limit,
  onProductsLoaded,
  filters,
  sortBy,
}: ListingsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        const productsArray = Array.isArray(data)
          ? data
          : data.products
          ? data.products
          : [];

        // console.log("API response:", data);
        // console.log("Processed products array:", productsArray);

        setProducts(productsArray);

        // Passes the products data to parent component if callback exists
        if (onProductsLoaded) {
          onProductsLoaded(productsArray);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [onProductsLoaded]);

  const filterProducts = (all: Product[]) => {
    return all.filter((product) => {
      const inCategory =
        !filters?.category?.length ||
        filters.category.includes(product.category || "");
      const inType =
        !filters?.productType?.length ||
        filters.productType.includes(product.productType || "");
      const inPrice =
        !filters?.price?.length ||
        filters.price.some((range) => {
          const price = parseFloat(product.price);
          if (range.endsWith("+")) {
            const min = parseFloat(range.slice(0, -1));
            return price > min;
          }
          const [minStr, maxStr] = range.split("-").map((s) => s.trim());
          const min = parseFloat(minStr);
          const max = parseFloat(maxStr);
          return price >= min && price <= max;
        });

      return inCategory && inType && inPrice;
    });
  };

  const filtered = filterProducts(products);

  // Sort filtered products based on sortBy
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Date Added") {
      return (
        new Date(b.createdAt || "").getTime() -
        new Date(a.createdAt || "").getTime()
      );
    }
    if (sortBy === "Name") {
      return (a.title || "").localeCompare(b.title || "");
    }
    // if (sortBy === "Best Selling") {
    //   return (b.sales || 0) - (a.sales || 0);
    // }
    return 0;
  });

  const displayedProducts = limit ? filtered.slice(0, limit) : sorted;

  if (loading) {
    return (
      <div className="mx-auto max-w-screen-2xl p-4 lg:p-8 text-center">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-screen-2xl p-4 lg:p-8 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8">
      {displayedProducts.length === 0 ? (
        <div className="text-center py-8">
          <p>No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {displayedProducts.map((product, index) => (
            <div key={index}>
              <Link
                href={`/product/${product._id}`}
                className="group block overflow-hidden mb-10"
              >
                <div className="relative h-[210px] sm:h-[420px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="mt-2 md:mt-5">
                  <h3 className="text-sm md:text-base text-gray-800 font-light group-hover:underline group-hover:underline-offset-4">
                    {product.title}
                  </h3>
                  <p className="text-xs md:text-sm mt-1 md:mt-1.5 tracking-wide text-gray-700 font-extralight">
                    £{product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListings;

"use client";

import Features from "@/app/components/Features";
import Newsletter from "@/app/components/Newsletter";
import ProductListings from "@/app/components/ProductListings";
import { Product } from "@/types/products";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleProductPage = () => {
  const params = useParams();
  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [sortBy] = useState<string>("Date Added");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${productId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) {
    return <div className="p-10 text-center">Loading product...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={product.image || "/products/chair.png"}
          width={700}
          height={600}
          alt={product.title}
        />

        <div className="p-6 md:p-32 max-w-5xl">
          <h2 className="text-xl md:text-3xl font-light text-gray-700 tracking-tight">
            {product.title}
          </h2>
          <p className="mt-2 md:mt-3 font-extralight text-gray-700 text-sm md:ext-lg">
            £{product.price}
          </p>
          <p className="mt-8 md:mt-10 text-gray-800 text-xs tracking-wider">
            Description
          </p>
          <p className="mt-2.5 text-gray-600 text-xs md:text-sm leading-6.5 font-extralight">
            {product.description || "No description available"}
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
                  onClick={handleDecreaseQuantity}
                  className="text-gray-600 transition hover:opacity-75 cursor-pointer"
                >
                  <Minus strokeWidth={0.9} size={15} />
                </button>

                <input
                  type="number"
                  id="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="h-10 w-14 border-none focus:border-none text-center text-gray-700 font-extralight sm:text-sm [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
                  type="button"
                  onClick={handleIncreaseQuantity}
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

      <ProductListings
        filters={{
          category: product.category ? [product.category] : [],
          productType: product.productType ? [product.productType] : [],
          price: [],
        }}
        sortBy={sortBy}
        limit={4}
        excludeProductId={product._id}
      />

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

export default SingleProductPage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import { Minus, Plus } from "lucide-react";

interface CartItem extends Product {
  quantity: number;
}

// This is a mock data for demonstration purposes
// In a real application, you would fetch this from your cart state or API
const mockCartItems: CartItem[] = [
  {
    _id: 1,
    title: "Graystone vase",
    createdAt: "2023-01-01",
    sales: 10,
    price: "85",
    description: "A timeless ceramic vase with a fit color grey glaze.",
    image: "/products/product1.png",
    quantity: 1,
  },
  {
    _id: 2,
    title: "Basic white vase",
    createdAt: "2023-01-02",
    sales: 15,
    price: "125",
    description: "Beautiful and simple this is one for the classics",
    image: "/products/product2.png",
    quantity: 1,
  },
];

function CartListing() {
  const [quantity, setQuantity] = useState(1);
  // Calculate total price
  const total = mockCartItems.reduce(
    (sum, item) => sum + parseInt(item.price) * item.quantity,
    0
  );

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="w-full mt-10 md:mt-14">
      <div className="mb-8 overflow-x-auto hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="pb-4 font-light">Product</th>
              <th className="pb-4 font-light">Quantity</th>
              <th className="pb-4 font-light text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {mockCartItems.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                <td className="py-8">
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-20 overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-normal tracking-wide text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 font-light max-w-xs line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-1">£{item.price}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-left">
                  <div className="flex items-center justify-between bg-gray-100 px-3.5 w-[50%] -ml-5">
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
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
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
                </td>
                <td className="py-4 text-right text-gray-800">
                  £{parseInt(item.price) * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {mockCartItems.map((item) => (
          <div key={item._id} className="border-b border-gray-200">
            <div className="py-8">
              <div className="flex items-center gap-4">
                <div className="relative h-36 w-36 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <h3 className="font-normal text-base tracking-wide text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-light max-w-xs line-clamp-2">
                      {item.description}
                    </p>
                    <p className="mt-1 text-sm">£{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 px-3.5 w-[45%] mt-3">
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
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
                      className="h-8 w-10 border-none focus:border-none text-center text-gray-700 font-extralight text-sm [&::-webkit-inner-spin-button]:appearance-none"
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="w-full max-w-md">
          <div className="flex justify-end gap-5 pb-4 text-base md:text-lg font-light">
            <span className="text-[#2A254B]">Subtotal</span>
            <span>£{total}</span>
          </div>
          <p className="text-xs text-right -mt-1 text-gray-700 font-light">
            Taxes and shipping are calculated at checkout
          </p>
          <div className="md:w-[65%] ml-auto">
            <button className="mt-6 w-full bg-[#2A254B] py-3 font-light text-sm md:text-base text-white hover:opacity-95 ">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListing;

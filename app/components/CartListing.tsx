"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";

interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

interface CartListingProps {
  items: CartItem[];
}

function CartListing({ items }: CartListingProps) {
  const { updateQuantity, removeFromCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + parseInt(item.product.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Your cart is empty</p>
        <button className="mt-8">
          <Link
            href="/product"
            className=" w-full bg-[#2A254B] py-3 font-light text-sm  text-white hover:opacity-95 px-10"
          >
            Continue shopping
          </Link>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full mt-10 md:mt-14">
      <div className="mb-8 overflow-x-auto hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="pb-4 font-light">Product</th>
              <th className="pb-4 font-light">Quantity</th>
              <th className="pb-4 font-light text-right">Total</th>
              <th className="pb-4 font-light text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.productId} className="border-b border-gray-200">
                <td className="py-8">
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-20 overflow-hidden bg-gray-100">
                      <Image
                        src={item.product.image || ""}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-normal tracking-wide text-gray-800">
                        {item.product.title}
                      </h3>
                      <p className="text-xs text-gray-600 font-light max-w-xs line-clamp-2">
                        {item.product.description}
                      </p>
                      <p className="mt-1">£{item.product.price}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-left">
                  <div className="flex items-center justify-between bg-gray-100 px-3.5 w-[50%] -ml-5">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="text-gray-600 transition hover:opacity-75 cursor-pointer"
                    >
                      <Minus strokeWidth={0.9} size={15} />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.productId,
                          parseInt(e.target.value) || 1
                        )
                      }
                      className="h-10 w-14 border-none focus:border-none text-center text-gray-700 font-extralight sm:text-sm [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      className="text-gray-600 transition hover:opacity-75 cursor-pointer"
                    >
                      <Plus strokeWidth={0.9} size={15} />
                    </button>
                  </div>
                </td>
                <td className="py-4 text-right text-gray-800">
                  £{parseInt(item.product.price) * item.quantity}
                </td>
                <td className="py-4 text-right text-gray-800">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-500 transition hover:opacity-75 cursor-pointer"
                  >
                    <Trash2 strokeWidth={0.9} size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {items.map((item) => (
          <div key={item.productId} className="border-b border-gray-200">
            <div className="py-8">
              <div className="flex items-center gap-4">
                <div className="relative h-36 w-36 overflow-hidden bg-gray-100">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="space-y-2">
                    <h3 className="font-normal text-base tracking-wide text-gray-800">
                      {item.product.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-light max-w-xs line-clamp-2">
                      {item.product.description}
                    </p>
                    <p className="mt-1 text-sm">£{item.product.price}</p>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 px-3.5 w-[45%] mt-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="text-gray-600 transition hover:opacity-75 cursor-pointer"
                    >
                      <Minus strokeWidth={0.9} size={15} />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.productId,
                          parseInt(e.target.value) || 1
                        )
                      }
                      className="h-8 w-10 border-none focus:border-none text-center text-gray-700 font-extralight text-sm [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
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
      <div className="flex justify-end mt-4 md:mt-0">
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

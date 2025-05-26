"use client";

import React, { useEffect } from "react";
import CartListing from "../components/CartListing";
import { useAuthStore } from "@/stores/authStore";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";

function CartPage() {
  const { isLoggedIn, checkAuth } = useAuthStore();
  const { items, isLoading, error, fetchCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      await checkAuth();
      if (isLoggedIn) {
        fetchCart();
      }
    };

    init();
  }, [checkAuth, fetchCart, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin?redirect=/cart");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <div className="p-10 text-center">Please sign in to view your cart</div>
    );
  }

  if (isLoading) {
    return <div className="p-10 text-center">Loading cart...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }
  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8 mt-2 md:mt-8">
      <h1 className="text-xl md:text-3xl font-extralight tracking-tighter text-center text-gray-800">
        Your shopping cart
      </h1>
      <CartListing items={items} />
    </div>
  );
}

export default CartPage;

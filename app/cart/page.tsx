import React from "react";
import CartListing from "../components/CartListing";

function CartPage() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8 mt-2 md:mt-8">
      <h1 className="text-xl md:text-3xl font-extralight tracking-tighter text-gray-800">
        Your shopping cart
      </h1>
      <CartListing />
    </div>
  );
}

export default CartPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    title: "The Dandy chair",
    price: "£250",
    image: "/products/product1.png",
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: "£155",
    image: "/products/product2.png",
  },
  {
    id: 3,
    title: "The Silky Vase",
    price: "£125",
    image: "/products/product3.png",
  },
  {
    id: 4,
    title: "The Lucy Lamp",
    price: "£399",
    image: "/products/product4.png",
  },
];

function ProductListings() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6 mt-14">
        {products.map((product) => (
          <div key={product.id}>
            <Link href="#" className="group block overflow-hidden">
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
                  {product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListings;

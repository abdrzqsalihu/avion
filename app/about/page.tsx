import Link from "next/link";
import React from "react";
import Cta from "../components/Cta";
import Services from "../components/Services";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";

const AboutPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-4 lg:px-8 flex flex-col md:flex-row justify-between md:items-center md:pt-24 gap-10">
        <h2 className="text-xl md:text-2xl text-gray-800 font-light max-w-4xl leading-7 md:leading-9">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h2>
        <Link
          href="/product"
          className="cursor-pointer md:mx-auto text-center p-3.5 px-5 md:px-8 bg-gray-100 text-xs lg:text-sm text-gray-800 font-light md:mr-8"
        >
          View our products
        </Link>
      </div>

      <Cta />
      <Services />
      <Features />
      <Newsletter />
    </div>
  );
};

export default AboutPage;

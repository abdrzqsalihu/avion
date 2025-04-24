import { Check } from "lucide-react";
import React from "react";

function Newsletter() {
  return (
    <section className="bg-shift-up overflow-hidden bg-[url(/newsletter.jpg)] bg-cover bg-no-repeat mt-8">
      <div className="bg-black/20 p-8 py-10 md:p-12 lg:px-16 lg:py-24">
        <div className="md:text-center">
          <h2 className="text-xl font-light text-white sm:text-lg md:text-4xl">
            Join the club and get the benefits
          </h2>

          <p className="mx-auto max-w-lg text-white/90 font-extralight mt-3 md:mt-5 md:text-center text-xs md:text-base">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>

          <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-10 gap-3.5 md:gap-8">
            <div className="flex items-center gap-2.5">
              <Check size={16} className="bg-white rounded-full p-1" />{" "}
              <span className="text-white/90 font-extralight text-xs md:text-sm">
                Exclusive offers
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check size={16} className="bg-white rounded-full p-1" />{" "}
              <span className="text-white/90 font-extralight text-xs md:text-sm">
                Free events
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check size={16} className="bg-white rounded-full p-1" />{" "}
              <span className="text-white/90 font-extralight text-xs md:text-sm">
                Large discounts
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 md:mt-12 max-w-xl">
            <form action="#" className="sm:flex">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your Email address"
                  className="w-full bg-white p-4 md:p-5 text-gray-500 font-extralight text-xs md:text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-[#2A254B] p-3.5 px-7 md:py-5 text-white w-full sm:w-auto mt-3.5 sm:mt-0 cursor-pointer"
              >
                <span className="text-xs md:text-sm font-extralight">
                  {" "}
                  Sign Up{" "}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

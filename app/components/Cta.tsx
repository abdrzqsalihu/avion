import Image from "next/image";
import React from "react";

function Cta() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8">
      <section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 md:mt-18">
          <div className="bg-[#2A254B] p-8 md:p-24">
            <div className="max-w-lg">
              <h2 className="text-lg text-white/90 sm:text-3xl font-light tracking-wider">
                It started with a small idea
              </h2>

              <p className="mt-3.5 md:mt-5 text-gray-300 text-xs md:text-sm font-extralight">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </p>
            </div>

            <button className="cursor-pointer p-3.5 px-4 md:px-7 bg-[#F9F9F926] mt-12 lg:mt-52 text-xs lg:text-sm text-white/90 font-light w-full md:w-auto">
              View collection
            </button>
          </div>

          <div>
            <Image
              src="/cta.png"
              width={800}
              height={500}
              className="h-full w-full object-cover"
              alt="cta"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;

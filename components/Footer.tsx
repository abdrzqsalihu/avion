import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#2A254B]">
        <div className="mx-auto max-w-screen-2xl p-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-2">
            <div className="py-8 lg:py-16 lg:pe-16">
              <div className="grid grid-cols-1 gap-12 md:gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-light text-white tracking-wide">Menu</p>

                  <ul className="mt-4.5 md:mt-6 space-y-4 md:space-y-4.5 text-xs">
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        {" "}
                        New arrivals
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Best sellers
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Recently viewed
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Popular this week
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        All products
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-light text-white tracking-wide">
                    Categories
                  </p>

                  <ul className="mt-4.5 md:mt-6 space-y-4 md:space-y-4.5 text-xs">
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Crockery
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Furniture
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Homeware
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Plant pots
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Chairs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Crokery
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-light text-white tracking-wide">
                    Our company
                  </p>

                  <ul className="mt-4.5 md:mt-6 space-y-4 md:space-y-4.5 text-xs">
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        About us
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Vacancies
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white/70 transition hover:opacity-75 font-extralight"
                      >
                        Return policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="py-8 lg:py-16 space-y-4">
              <div>
                <h2 className="text-base md:text-lg font-light text-white">
                  Join our mailing list
                </h2>
              </div>

              <form action="#" className="sm:flex mt-5">
                <div className="sm:flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your Email address"
                    className="w-full bg-[#F9F9F926] p-4 md:p-5 text-white placeholder:text-white/80 font-extralight text-xs md:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white p-3.5 px-7 md:py-4 text-[#2A254B] w-full sm:w-auto mt-3.5 sm:mt-0 cursor-pointer"
                >
                  <span className="text-xs md:text-sm font-extralight">
                    {" "}
                    Sign Up{" "}
                  </span>
                </button>
              </form>
            </div>
          </div>

          <hr className="text-[#4E4D93]" />

          <div className="mt-4 py-2 flex flex-col md:flex-row items-center gap-4.5 justify-between">
            <p className="text-sm md:text-xs text-white/70">
              Copyright 2025 Avion LTD
            </p>

            <div className="flex items-center gap-4.5 md:gap-6">
              <Linkedin className="text-white/70 size-5" />
              <Facebook className="text-white/70 size-5" />
              <Instagram className="text-white/70 size-5" />
              <Twitter className="text-white/70 size-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

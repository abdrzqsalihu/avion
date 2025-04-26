import React from "react";

function ProductFilter() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 lg:p-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 sm:gap-12">
          <details className="group relative">
            <summary className="flex items-center gap-2 text-gray-600 [&::-webkit-details-marker]:hidden cursor-pointer">
              <span className="text-xs md:text-sm"> Category </span>

              <span className="transition-transform group-open:-rotate-180">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
                </svg>
              </span>
            </summary>

            <div className="z-10 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs md:text-sm text-gray-700">
                  {" "}
                  0 Selected{" "}
                </span>

                <button
                  type="button"
                  className="text-xs text-gray-700 underline transition-colors hover:text-gray-900 cursor-pointer font-extralight"
                >
                  Reset
                </button>
              </div>

              <fieldset className="p-3">
                <legend className="sr-only">Checkboxes</legend>

                <div className="flex flex-col items-start gap-3">
                  <label
                    htmlFor="Option1"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option1"
                    />

                    <span className="text-sm font-light text-gray-700">
                      Chair
                    </span>
                  </label>

                  <label
                    htmlFor="Option2"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option2"
                    />

                    <span className="text-sm font-light text-gray-700">
                      Plant pots
                    </span>
                  </label>

                  <label
                    htmlFor="Option3"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option3"
                    />

                    <span className="text-sm font-light text-gray-700">
                      Crokery
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </details>

          <details className="hidden md:block group relative">
            <summary className="flex items-center gap-2 text-gray-600 [&::-webkit-details-marker]:hidden cursor-pointer">
              <span className="text-sm"> Product type </span>

              <span className="transition-transform group-open:-rotate-180">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
                </svg>
              </span>
            </summary>

            <div className="z-10 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  className="text-xs text-gray-700 underline transition-colors hover:text-gray-900 cursor-pointer font-extralight"
                >
                  Reset
                </button>
              </div>

              <fieldset className="p-3">
                <legend className="sr-only">Checkboxes</legend>

                <div className="flex flex-col items-start gap-3">
                  <label
                    htmlFor="Option1"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option1"
                    />

                    <span className="text-sm font-light text-gray-700">
                      Furniture
                    </span>
                  </label>

                  <label
                    htmlFor="Option2"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option2"
                    />

                    <span className="text-sm font-light text-gray-700">
                      Light fittings
                    </span>
                  </label>

                  <label
                    htmlFor="Option3"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option3"
                    />

                    <span className="text-sm font-light text-gray-700">
                      Sofas
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </details>

          <details className="group relative">
            <summary className="flex items-center gap-2 text-gray-600 [&::-webkit-details-marker]:hidden cursor-pointer">
              <span className="text-xs md:text-sm"> Price </span>

              <span className="transition-transform group-open:-rotate-180">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
                </svg>
              </span>
            </summary>

            <div className="z-10 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs md:text-sm text-gray-700">
                  {" "}
                  0 Selected{" "}
                </span>

                <button
                  type="button"
                  className="text-xs text-gray-700 underline transition-colors hover:text-gray-900 cursor-pointer font-extralight"
                >
                  Reset
                </button>
              </div>

              <fieldset className="p-3">
                <legend className="sr-only">Checkboxes</legend>

                <div className="flex flex-col items-start gap-3">
                  <label
                    htmlFor="Option1"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option1"
                    />

                    <span className="text-xs md:text-sm font-light text-gray-700">
                      0 - 100
                    </span>
                  </label>

                  <label
                    htmlFor="Option2"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option2"
                    />

                    <span className="text-xs md:text-sm font-light text-gray-700">
                      101 - 250
                    </span>
                  </label>

                  <label
                    htmlFor="Option3"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      className="size-3.5 md:size-4 rounded border-gray-300 shadow-sm cursor-pointer"
                      id="Option3"
                    />

                    <span className="text-xs md:text-sm font-light text-gray-700">
                      250+
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </details>
        </div>

        <div className="flex items-center gap-10">
          <p className="hidden md:block text-sm text-gray-600">Sorting by:</p>
          <div className="relative w-32 md:w-36">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-open:-rotate-180 absolute top-0 bottom-0 my-auto text-gray-400 right-3"
            >
              <path d="M8 0L4 5L0 0H8Z" fill="#2A254B" />
            </svg>
            <select
              className="w-full px-3 py-2 text-xs md:text-sm text-gray-600 outline-none cursor-pointer
            appearance-none"
            >
              <option>Date Added</option>
              <option>Name</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;

"use client";
import Link from "next/link";
import React, { useState } from "react";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <main className="w-full flex flex-col items-center justify-center px-5 my-20">
        <div className="max-w-sm w-full text-gray-600 space-y-5">
          <div className="text-center pb-4">
            <div className="mt-3">
              <h3 className="text-gray-800 text-xl font-medium tracking-wider">
                Signin to your account
              </h3>

              {/* {error && (
            <p className="text-red-500 text-base text-center mt-4">
              {error}
            </p>
          )} */}
            </div>
          </div>
          <form className="space-y-5">
            <div>
              <label className="font-light text-sm">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border text-sm font-light"
              />
            </div>
            <div>
              <label className="font-light text-sm">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border text-sm font-light"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-x-2.5">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="checkbox-item peer hidden"
                />
                <label
                  htmlFor="remember-me-checkbox"
                  className="relative flex w-4 h-4 bg-white peer-checked:bg-[#2A254B] border ring-offset-2 ring-[#2A254B] duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[1px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
                <span>Remember me</span>
              </div>
              <Link
                href=""
                className="text-center text-[#2A254B] hover:opacity-85 text-xs"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white font-light hover:opacity-90 duration-150 
           flex items-center justify-center bg-[#2A254B]  ${
             isLoading ? "opacity-75" : ""
           }`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <div className="dot-spinner">
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                </div>
              ) : (
                "Signin"
              )}
            </button>
          </form>

          <p className="text-center text-light text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="signup"
              className="text-[#2A254B] hover:opacity-85 ml-1 font-medium"
            >
              Signup
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default SignInPage;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return Swal.fire({
        title: "Error!",
        text: "Passwords do not match",
        icon: "warning",
        confirmButtonColor: "#2A254B",
        confirmButtonText: "Close",
      });
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          title: "Error!",
          text: data.error || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#2A254B",
          confirmButtonText: "Close",
        });
      } else {
        Swal.fire({
          title: "Success!",
          text: "Account created successfully",
          icon: "success",
          confirmButtonColor: "#2A254B",
          confirmButtonText: "Close",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/product");
          }
        });
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text:
          err instanceof Error ? err.message : "An unexpected error occurred",
        icon: "error",
        confirmButtonColor: "#2A254B",
        confirmButtonText: "Close",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <main className="w-full flex flex-col items-center justify-center px-5 my-20">
        <div className="max-w-sm w-full text-gray-600 space-y-5">
          <div className="text-center pb-4">
            <div className="mt-3">
              <h3 className="text-gray-800 text-xl font-medium tracking-wider">
                Create your account
              </h3>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-light text-sm">Fullname</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border text-sm font-light"
              />
            </div>
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
              <label className="font-light text-sm">Phone</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <div>
              <label className="font-light text-sm">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            </div>
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white font-light hover:opacity-90 duration-150 
       flex items-center justify-center bg-[#2A254B]  ${
         isLoading ? "opacity-75 cursor-progress" : "cursor-pointer"
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
                "Signup"
              )}
            </button>
          </form>

          <p className="text-center text-light text-sm">
            Already have an account?{" "}
            <Link
              href="signin"
              className="text-[#2A254B] hover:opacity-85 ml-1 font-medium"
            >
              Signin
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default SignUpPage;

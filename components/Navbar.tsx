"use client";

import { useAuthStore } from "@/stores/authStore";
import { LogOut, Search, ShoppingCart, UserCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/product" },
    { label: "About us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { isLoggedIn, checkAuth, logout } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Check auth on mount
  }, []);

  const handleUserClick = () => {
    router.push(isLoggedIn ? "/account" : "/signin");
  };

  return (
    <header className="mx-auto max-w-screen-2xl p-4 lg:p-8 relative z-50">
      <div className="flex items-center justify-between">
        <button className="hidden md:block">
          <Search strokeWidth={0.9} />
        </button>

        <Link href={"/"} className="font-medium text-xl md:text-2xl">
          Avion
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center sm:gap-6.5">
            <Link href="/cart">
              <ShoppingCart strokeWidth={0.9} size={22} />
            </Link>
            <button onClick={handleUserClick} className="cursor-pointer">
              <UserCircle strokeWidth={0.9} size={22} />
            </button>
            {isLoggedIn && (
              <button onClick={logout} className="cursor-pointer">
                <LogOut strokeWidth={0.9} size={20} />
              </button>
            )}
          </div>

          <button className="cursor-pointer">
            <Search strokeWidth={0.9} className="sm:hidden" />
          </button>

          {/* Custom animated hamburger toggle */}
          <div className="block md:hidden">
            <label className="hamburger mt-2.5">
              <input
                type="checkbox"
                checked={isMenuOpen}
                onChange={toggleMenu}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <hr className="mt-3 md:mt-6 text-gray-300" />

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-center mt-6 -ml-10">
        <nav aria-label="Global">
          <ul className="flex items-center gap-8 text-sm">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link
                  className="text-gray-700 transition hover:text-gray-600/75"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Slide-in Menu */}
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-[75%] bg-white z-50 p-6 shadow-lg transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            {/* Close button */}
            <label className="hamburger">
              <input
                type="checkbox"
                checked={isMenuOpen}
                onChange={toggleMenu}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </label>
          </div>

          <nav className="flex flex-col gap-6 text-sm">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={toggleMenu}
                className="text-gray-800 hover:text-black transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 border-t pt-6 flex items-center gap-6 text-gray-700">
            <Link href="/cart">
              <ShoppingCart strokeWidth={1.2} size={22} />
            </Link>
            <button onClick={handleUserClick} className="cursor-pointer">
              <UserCircle strokeWidth={1.2} size={22} />
            </button>
            {isLoggedIn && (
              <button onClick={logout} className="cursor-pointer">
                <LogOut strokeWidth={1.2} size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

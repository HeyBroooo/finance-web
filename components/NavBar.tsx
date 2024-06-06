"use client";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white/20 backdrop-blur-md">
      <div className="px-5 py-3 lg:px-10 lg:py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} placeholder="empty" alt="urify" />
        </div>

        {/* Menu icon (Hamburger) */}
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Nav links for desktop */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link href="/" className="text-[#FF5555] font-extrabold">
            Home
          </Link>
          <Link href="/">About Us</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Features</Link>
        </nav>

        {/* Download button for desktop */}
        <Link
          href="/"
          className="hidden lg:block px-6 py-3 bg-black text-white rounded-md text-base hover:bg-opacity-80"
        >
          Download
        </Link>
      </div>

      {/* Nav links and download button for mobile */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden flex-col items-center bg-white/20 backdrop-blur-md py-5`}
      >
        <Link href="/" className="py-3 text-[#FF5555] font-extrabold">
          Home
        </Link>
        <Link href="/" className="py-3">
          About Us
        </Link>
        <Link href="/" className="py-3">
          Pricing
        </Link>
        <Link href="/" className="py-3">
          Features
        </Link>
        {/* Download button for mobile */}
        <Link
          href="/"
          className="py-3 px-6 bg-black text-white rounded-md text-base mt-5 hover:bg-opacity-80"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}

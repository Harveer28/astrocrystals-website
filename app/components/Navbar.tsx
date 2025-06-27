"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">Astro Crystals</Link>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="#products">Products</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <button className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Shop Now
        </button>
      </div>
    </header>
  );
}

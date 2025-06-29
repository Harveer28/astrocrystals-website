"use client";

import Image from "next/image";
import Head from "next/head";

const products = [
  {
    name: "Pyrite Bracelet",
    price: "₹699",
    image: "/images/pyrite.png",
  },
  {
    name: "Amethyst Bracelet",
    price: "₹799",
    image: "/images/amethyst.png",
  },
  {
    name: "Rose Quartz Bracelet",
    price: "₹599",
    image: "/images/rose-quartz.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* SEO Meta Tags */}
      <Head>
        <title>Astro Crystals | Healing Bracelets</title>
        <meta name="description" content="Buy powerful crystal bracelets for healing and positivity." />
        <meta name="keywords" content="Astro Crystals, Healing Crystals, Crystal Bracelets, Astrology, Energy Healing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-purple-700">Astro Crystals</h1>
          <nav className="space-x-6 text-purple-600 font-semibold">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-300 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-900">Discover the Power of Crystals</h2>
        <p className="text-lg text-purple-800 mb-6">Heal your mind and soul with our premium crystal bracelets.</p>
        <a href="/products" className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-medium transition">
          Shop Now
        </a>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-8">Best-Selling Crystals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="mx-auto rounded"
              />
              <h3 className="mt-4 text-xl font-semibold text-purple-700">{product.name}</h3>
              <p className="text-purple-600 font-bold">{product.price}</p>
              <div className="mt-4 flex justify-center gap-4">
                <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Add to Cart</button>
                <button className="border border-purple-700 text-purple-700 px-4 py-2 rounded hover:bg-purple-100">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Why Choose Astro Crystals?</h2>
        <p className="max-w-2xl mx-auto text-purple-700">
          Our crystals are handpicked, energized, and designed to align your energies with the universe for healing,
          protection, and positivity.
        </p>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <div className="bg-purple-50 p-4 rounded shadow text-left">
            <p className="text-gray-700">“Absolutely love the Amethyst bracelet. I feel calmer and more focused!”</p>
            <p className="font-bold mt-2 text-purple-700">- Meera S.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded shadow text-left">
            <p className="text-gray-700">“My Rose Quartz bracelet brought me unexpected peace. Thank you!”</p>
            <p className="font-bold mt-2 text-purple-700">- Rahul M.</p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="bg-purple-900 text-white text-center py-10 mt-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>Email: support@astrocrystals.in</p>
          <p>Phone: +91 98765 43210</p>
          <p className="mt-4">© 2025 Astro Crystals. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} />
      </a>
    </div>
  );
}

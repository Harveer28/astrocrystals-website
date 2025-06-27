"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Rose Quartz Bracelet",
    price: "₹599",
    image: "/bracelet1.jpg",
  },
  {
    name: "Amethyst Bracelet",
    price: "₹799",
    image: "/bracelet2.jpg",
  },
  {
    name: "Tiger Eye Bracelet",
    price: "₹499",
    image: "/bracelet3.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Astro Crystals – Healing Energy Bracelets</title>
        <meta
          name="description"
          content="Buy healing crystal bracelets for love, protection, career, and energy balance. Trusted by thousands. Made with real crystals."
        />
        <meta name="keywords" content="Astro Crystals, crystal bracelet, healing crystals, astrology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-900">
        {/* Navbar */}
        <header className="sticky top-0 bg-white shadow-md z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-purple-800">Astro Crystals</h1>
            <nav className="space-x-4 text-purple-700">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-r from-purple-100 to-purple-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800 font-playfair">
            Discover the Power of Crystals
          </h2>
          <p className="text-lg text-purple-700 max-w-xl mx-auto mb-8">
            Healing energies crafted in the form of beautiful crystal bracelets.
          </p>
          <Link
            href="/products"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
          >
            Shop Now
          </Link>
        </section>

        {/* Product Preview Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 font-playfair">Best-Selling Crystals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our powerful healing crystal bracelets, handcrafted to align your energy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-purple-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-md mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold text-purple-800">{product.name}</h3>
                <p className="text-purple-600 font-bold mt-2">{product.price}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-purple-700 text-purple-700 rounded hover:bg-purple-100 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-4">Email: support@astrocrystals.in</p>
            <p>© 2025 Astro Crystals. All rights reserved.</p>
          </div>
        </footer>

        {/* WhatsApp Chat Floating Button */}
        <a
          href="https://wa.me/916350216150"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 z-50"
          target="_blank"
        >
          Chat on WhatsApp
        </a>
      </main>
    </>
  );
}

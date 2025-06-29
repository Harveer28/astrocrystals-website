'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Astro Crystals</h1>
        <p className="text-lg">Explore healing crystal bracelets tailored to your zodiac and energy.</p>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Best-Selling Crystals</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our powerful healing crystal bracelets, handcrafted to align your energy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pyrite */}
          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg p-4 shadow-md text-center">
            <img src="/images/pyrite.jpg" alt="Pyrite Bracelet" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Pyrite Bracelet</h3>
            <p className="text-blue-700 font-bold mt-2">₹699</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add to Cart</button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded">Buy Now</button>
            </div>
          </motion.div>

          {/* Amethyst */}
          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg p-4 shadow-md text-center">
            <img src="/images/amethyst.jpg" alt="Amethyst Bracelet" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Amethyst Bracelet</h3>
            <p className="text-blue-700 font-bold mt-2">₹799</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add to Cart</button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded">Buy Now</button>
            </div>
          </motion.div>

          {/* Rose Quartz */}
          <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg p-4 shadow-md text-center">
            <img src="/images/rose-quartz.jpg" alt="Rose Quartz Bracelet" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Rose Quartz Bracelet</h3>
            <p className="text-blue-700 font-bold mt-2">₹599</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add to Cart</button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded">Buy Now</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded shadow">
            <p className="italic">"Absolutely love the energy!"</p>
            <p className="mt-2 text-sm text-gray-500">- Verified Customer</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="italic">"I felt a shift in just a week!"</p>
            <p className="mt-2 text-sm text-gray-500">- Verified Customer</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="italic">"High-quality and beautiful"</p>
            <p className="mt-2 text-sm text-gray-500">- Verified Customer</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <section className="py-8 text-center">
        <a
          href="https://wa.me/919999999999" // <-- Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}

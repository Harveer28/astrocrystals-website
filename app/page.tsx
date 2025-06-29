'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-4xl font-bold mb-4">Welcome to Astro Crystals</h1>
          <p className="text-lg max-w-xl mx-auto">Explore healing crystal bracelets tailored to your zodiac and energy.</p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-700">Best-Selling Crystals</h2>
          <p className="text-gray-600 mt-2">Explore our powerful healing crystal bracelets, handcrafted to align your energy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Pyrite Bracelet",
              price: "₹699",
              image: "/images/pyrite.jpg",
            },
            {
              title: "Amethyst Bracelet",
              price: "₹799",
              image: "/images/amethyst.jpg",
            },
            {
              title: "Rose Quartz Bracelet",
              price: "₹599",
              image: "/images/rose-quartz.jpg",
            },
          ].map((product, index) => (
            <motion.div key={index} className="border rounded-lg shadow-md p-4 text-center" whileHover={{ scale: 1.03 }}>
              <img src={product.image} alt={product.title} className="mx-auto h-40 object-contain" />
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
              <div className="flex justify-center mt-4 gap-3">
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add to Cart</button>
                <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-100">Buy Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-700">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {["Absolutely love the energy!", "I felt a shift in just a week!", "High-quality and beautiful."].map((review, i) => (
            <div key={i} className="bg-white border shadow rounded-lg p-6 text-center">
              <p className="italic text-gray-700">"{review}"</p>
              <p className="mt-2 text-sm text-purple-700 font-semibold">- Verified Customer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Button */}
      <div className="text-center my-12">
        <a
          href="https://wa.me/919876543210?text=Hi%20I'm%20interested%20in%20your%20Astro%20Crystals"
          target="_blank"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6 text-center">
        <p>&copy; 2025 Astro Crystals. All rights reserved.</p>
      </footer>
    </main>
  );
}

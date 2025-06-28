'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-20 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to Astro Crystals
        </motion.h1>
        <motion.p 
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover the power of healing crystals based on your zodiac sign.
        </motion.p>
      </section>

      {/* Products Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Crystal Bracelets</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pyrite */}
          <div className="shadow-lg rounded-lg p-6 text-center border hover:shadow-xl">
            <Image src="/images/pyrite.jpeg" alt="Pyrite" width={300} height={300} className="mx-auto rounded-md" />
            <h3 className="text-xl font-semibold mt-4">Pyrite</h3>
            <p className="text-sm mt-2">Boosts confidence, attracts money and abundance.</p>
          </div>

          {/* Amethyst */}
          <div className="shadow-lg rounded-lg p-6 text-center border hover:shadow-xl">
            <Image src="/images/amythest2.png" alt="Amethyst" width={300} height={300} className="mx-auto rounded-md" />
            <h3 className="text-xl font-semibold mt-4">Amethyst</h3>
            <p className="text-sm mt-2">Relieves stress, promotes inner peace and intuition.</p>
          </div>

          {/* Rose Quartz */}
          <div className="shadow-lg rounded-lg p-6 text-center border hover:shadow-xl">
            <Image src="/images/rose quartz.jpg" alt="Rose Quartz" width={300} height={300} className="mx-auto rounded-md" />
            <h3 className="text-xl font-semibold mt-4">Rose Quartz</h3>
            <p className="text-sm mt-2">Known for love, compassion, and heart healing.</p>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-lg mb-6">
            <p className="text-sm">"These crystals are pure magic! I feel more grounded and positive every day."</p>
            <p className="mt-2 font-semibold text-right">- Priya Sharma</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-sm">"I bought the rose quartz bracelet and it genuinely brought emotional calm."</p>
            <p className="mt-2 font-semibold text-right">- Rohan Verma</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Watch Our Crystal Energy In Action</h2>
        <video
          src="/video/promo.mp4"
          controls
          autoPlay
          loop
          muted
          className="mx-auto w-full max-w-2xl rounded-lg shadow-lg"
        ></video>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Astro Crystals | All rights reserved.
        </div>
      </footer>
    </main>
  );
}

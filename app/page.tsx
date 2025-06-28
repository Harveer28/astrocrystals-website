'use client';
import React from 'react';

export default function HomePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-200 to-pink-100 py-20 text-center">
        <h1 className="text-5xl font-bold text-purple-900">Welcome to Astro Crystals</h1>
        <p className="mt-4 text-xl text-gray-700">Your guide to powerful healing through crystals</p>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">Our Crystal Bracelets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Pyrite */}
          <div className="text-center shadow-lg p-6 rounded-lg border border-gray-100 hover:shadow-xl transition">
            <img src="/images/pyrite.jpeg" alt="Pyrite" className="mx-auto w-56 h-56 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-purple-800">Pyrite</h3>
            <p className="text-gray-600 mt-2">Boosts confidence and attracts abundance.</p>
          </div>

          {/* Rose Quartz */}
          <div className="text-center shadow-lg p-6 rounded-lg border border-gray-100 hover:shadow-xl transition">
            <img src="/images/rose quartz.jpg" alt="Rose Quartz" className="mx-auto w-56 h-56 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-purple-800">Rose Quartz</h3>
            <p className="text-gray-600 mt-2">Promotes love, peace and emotional healing.</p>
          </div>

          {/* Amythest */}
          <div className="text-center shadow-lg p-6 rounded-lg border border-gray-100 hover:shadow-xl transition">
            <img src="/images/amythest2.png" alt="Amythest" className="mx-auto w-56 h-56 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-purple-800">Amythest</h3>
            <p className="text-gray-600 mt-2">Calms the mind and enhances intuition.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-purple-50 py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">"These crystals changed my energy completely! Highly recommend for anyone seeking clarity."</p>
            <p className="mt-4 font-semibold text-purple-800">– Meera S.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">"Astro Crystals is my go-to for quality bracelets. Beautiful and effective!"</p>
            <p className="mt-4 font-semibold text-purple-800">– Rahul D.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 mt-10">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Astro Crystals. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for your spiritual journey.</p>
        </div>
      </footer>
    </main>
  );
}

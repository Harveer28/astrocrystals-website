'use client';
import React from 'react';

export default function HomePage() {
  return (
    <div className="p-8 bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Crystal Bracelets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Pyrite */}
        <div className="text-center">
          <img
            src="/images/pyrite.jpeg"
            alt="Pyrite Bracelet"
            className="mx-auto w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Pyrite</h2>
        </div>

        {/* Rose Quartz */}
        <div className="text-center">
          <img
            src="/images/rose quartz.jpg"
            alt="Rose Quartz Bracelet"
            className="mx-auto w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Rose Quartz</h2>
        </div>

        {/* Amythest */}
        <div className="text-center">
          <img
            src="/images/amythest2.png"
            alt="Amythest Bracelet"
            className="mx-auto w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Amythest</h2>
        </div>
      </div>
    </div>
  );
}

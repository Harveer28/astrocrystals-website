'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-center px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Astro Crystals</h1>
      <p className="text-lg text-gray-600 mb-10">Explore healing crystal bracelets tailored to your zodiac and energy.</p>

      <h2 className="text-3xl font-semibold mb-6 text-blue-700">Best-Selling Crystals</h2>
      <p className="text-gray-500 mb-8">Explore our powerful healing crystal bracelets, handcrafted to align your energy.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            name: 'Pyrite Bracelet',
            price: '₹699',
            image: '/images/pyrite.jpg',
          },
          {
            name: 'Amethyst Bracelet',
            price: '₹799',
            image: '/images/amethyst.jpg',
          },
          {
            name: 'Rose Quartz Bracelet',
            price: '₹599',
            image: '/images/rose-quartz.jpg',
          },
        ].map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-blue-700 mt-1 font-bold">{product.price}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold text-blue-700 mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          'Absolutely love the energy!',
          'I felt a shift in just a week!',
          'High-quality and beautiful!',
        ].map((review, index) => (
          <div key={index} className="bg-white p-6 rounded shadow text-gray-600">
            <p className="italic">"{review}"</p>
            <p className="mt-2 text-sm">- Verified Customer</p>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}

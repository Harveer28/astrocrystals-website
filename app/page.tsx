"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Astro Crystals</h1>
        <p className="mt-4 text-lg md:text-xl">
          Explore healing crystal bracelets tailored to your zodiac and energy.
        </p>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-16 px-4 md:px-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-2">Best-Selling Crystals</h2>
        <p className="mb-8 text-gray-600">
          Explore our powerful healing crystal bracelets, handcrafted to align your energy.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* PYRITE */}
          <div className="border rounded-lg shadow p-4 hover:shadow-xl transition">
            <Image
              src="/images/pyrite.jpg"
              alt="Pyrite Bracelet"
              width={300}
              height={300}
              className="mx-auto rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Pyrite Bracelet</h3>
            <p className="text-gray-600 mt-1">₹699</p>
            <div className="flex justify-center gap-2 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Add to Cart
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
                Buy Now
              </button>
            </div>
          </div>

          {/* AMETHYST */}
          <div className="border rounded-lg shadow p-4 hover:shadow-xl transition">
            <Image
              src="/images/amethyst.jpg"
              alt="Amethyst Bracelet"
              width={300}
              height={300}
              className="mx-auto rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Amethyst Bracelet</h3>
            <p className="text-gray-600 mt-1">₹799</p>
            <div className="flex justify-center gap-2 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Add to Cart
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
                Buy Now
              </button>
            </div>
          </div>

          {/* ROSE QUARTZ */}
          <div className="border rounded-lg shadow p-4 hover:shadow-xl transition">
            <Image
              src="/images/rose-quartz.jpg"
              alt="Rose Quartz Bracelet"
              width={300}
              height={300}
              className="mx-auto rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Rose Quartz Bracelet</h3>
            <p className="text-gray-600 mt-1">₹599</p>
            <div className="flex justify-center gap-2 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Add to Cart
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-gray-100 py-16 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="italic">"Absolutely love the energy!"</p>
            <p className="text-sm text-gray-500 mt-2">– Verified Customer</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="italic">"I felt a shift in just a week!"</p>
            <p className="text-sm text-gray-500 mt-2">– Verified Customer</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="italic">"High-quality and beautiful."</p>
            <p className="text-sm text-gray-500 mt-2">– Verified Customer</p>
          </div>
        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/916350216150"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        Chat on WhatsApp
      </a>
    </main>
  );
}

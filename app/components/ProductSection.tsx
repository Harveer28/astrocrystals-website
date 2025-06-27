"use client";

import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Top Bracelets</h2>
        <p className="mb-10 text-lg text-gray-600">Choose from our best-selling energized crystal bracelets</p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <Image
              src="/images/bracelet1.jpg"
              alt="Rose Quartz Bracelet"
              width={400}
              height={300}
              className="rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Rose Quartz</h3>
            <p className="text-sm text-gray-500">Attracts Love & Self-Healing</p>
            <p className="text-cyan-700 font-bold mt-2">₹599</p>
          </div>

          <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <Image
              src="/images/bracelet2.jpg"
              alt="Amethyst Bracelet"
              width={400}
              height={300}
              className="rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Amethyst</h3>
            <p className="text-sm text-gray-500">Peace & Positivity</p>
            <p className="text-cyan-700 font-bold mt-2">₹799</p>
          </div>

          <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <Image
              src="/images/bracelet3.jpg"
              alt="Tiger Eye Bracelet"
              width={400}
              height={300}
              className="rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Tiger Eye</h3>
            <p className="text-sm text-gray-500">Confidence & Protection</p>
            <p className="text-cyan-700 font-bold mt-2">₹699</p>
          </div>
        </div>
      </div>
    </section>
  );
}

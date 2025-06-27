"use client";
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-900 to-purple-800 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Discover the Power of Healing Crystals</h1>
      <p className="text-xl mb-6">Find the perfect crystal bracelet aligned with your zodiac and energy.</p>
      <div className="space-x-4">
        <a href="#products" className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Shop Bracelets</a>
        <a href="#quiz" className="border border-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-purple-900 transition">Find Your Crystal</a>
      </div>
    </section>
  );
}

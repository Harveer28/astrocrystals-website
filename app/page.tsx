'use client'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useCart } from './context/CartContext'

export default function Home() {
  const { cart } = useCart()

  return (
    <>
      <Head>
        <title>Astro Crystals - Healing Bracelets</title>
        <meta name="description" content="Buy energy healing crystal bracelets – Pyrite, Amethyst, Rose Quartz and more. Personalized recommendations. Free spiritual guidance." />
        <meta name="keywords" content="astro crystals, healing crystals, pyrite bracelet, amethyst, rose quartz, astrology products" />
        <meta name="author" content="Astro Crystals" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-purple-100 to-white px-6">
        {/* Top Navigation */}
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-purple-800">Astro Crystals</h1>
          <div className="space-x-4">
            <Link href="/" className="text-purple-800 hover:underline">Home</Link>
            <Link href="/products" className="text-purple-800 hover:underline">Products</Link>
            <Link href="/about" className="text-purple-800 hover:underline">About</Link>
            <Link href="/contact" className="text-purple-800 hover:underline">Contact</Link>
            <Link href="/cart" className="text-purple-800 hover:underline">
              🛒 Cart ({cart.length})
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Discover the Power of Crystals</h2>
          <p className="text-gray-700 mb-6">Bring peace, abundance and positivity to your life with our energy healing bracelets.</p>
          <Link href="/products">
            <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition">Shop Now</button>
          </Link>
        </section>

        {/* Products Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {/* Pyrite */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <Image src="/images/pyrite.png" alt="Pyrite Bracelet" width={200} height={200} className="mx-auto rounded" />
            <h3 className="text-lg font-semibold mt-4">Pyrite Bracelet</h3>
            <p className="text-gray-600">Attracts wealth and success.</p>
          </div>
          {/* Amethyst */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <Image src="/images/amythest.png" alt="Amethyst Bracelet" width={200} height={200} className="mx-auto rounded" />
            <h3 className="text-lg font-semibold mt-4">Amethyst Bracelet</h3>
            <p className="text-gray-600">Brings calmness and spiritual insight.</p>
          </div>
          {/* Rose Quartz */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <Image src="/images/rose-quartz.png" alt="Rose Quartz Bracelet" width={200} height={200} className="mx-auto rounded" />
            <h3 className="text-lg font-semibold mt-4">Rose Quartz Bracelet</h3>
            <p className="text-gray-600">Opens heart to love and compassion.</p>
          </div>
        </section>

        {/* About */}
        <section className="py-12 text-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Why Choose Astro Crystals?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide personalized astrology-based healing crystal bracelets to bring abundance, clarity, and love into your life. All bracelets are spiritually cleansed and energized.
          </p>
        </section>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20order%20a%20healing%20crystal"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬
        </a>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-6 text-sm">
          © 2025 Astro Crystals. All rights reserved.
        </footer>
      </main>
    </>
  )
}

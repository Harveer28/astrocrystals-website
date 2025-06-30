'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Amethyst Bracelet',
      price: 499,
      image: '/images/amethyst.jpg',
    },
    {
      id: 2,
      name: 'Pyrite Bracelet',
      price: 599,
      image: '/images/pyrite.jpg',
    },
    {
      id: 3,
      name: 'Rose Quartz Bracelet',
      price: 399,
      image: '/images/rosequartz.jpg',
    },
  ];

  return (
    <>
      {/* 🧿 Head section */}
      <main className="min-h-screen bg-gradient-to-b from-purple-100 to-white px-4 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Welcome to Astro Crystals</h1>
          <p className="text-gray-700 mb-8 text-lg">
            Discover the power of healing crystals for your mind, body, and soul.
          </p>

          {/* 🔮 Product Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mx-auto rounded"
                />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-600">₹{product.price}</p>
                <button
  onClick={() =>
    addToCart({ ...product, id: product.id.toString(), quantity: 1 })
  }
  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
>
  Add to Cart
</button>

              </div>
            ))}
          </div>

          {/* 💬 Review Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Customer Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 shadow rounded">
                <p className="text-gray-800">
                  "Amazing energy! I can feel the positivity since I started wearing the Amethyst bracelet."
                </p>
                <span className="block text-sm text-gray-500 mt-2">– Priya S.</span>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <p className="text-gray-800">
                  "Fast delivery, great packaging, and authentic crystals. Highly recommended!"
                </p>
                <span className="block text-sm text-gray-500 mt-2">– Rohit K.</span>
              </div>
            </div>
          </div>

          {/* 🔗 Page Links */}
          <div className="mt-16 flex justify-center gap-4 flex-wrap">
            <Link href="/about" className="text-purple-700 hover:underline">About Us</Link>
            <Link href="/contact" className="text-purple-700 hover:underline">Contact</Link>
            <Link href="/products" className="text-purple-700 hover:underline">Products</Link>
            <Link href="/cart" className="text-purple-700 hover:underline">Cart</Link>
          </div>
        </div>
      </main>

      {/* ✅ WhatsApp Button */}
      <a
        href="https://wa.me/916350216150"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="30" height="30">
          <path d="M20 4.5A10.47 10.47 0 0012.16 2 10.49 10.49 0 002 12.5c0 1.84.5 3.57 1.36 5.05L2 22l4.7-1.29A10.46 10.46 0 0012.16 23a10.49 10.49 0 0010.34-10.5A10.48 10.48 0 0020 4.5zM12.16 21c-1.56 0-3.07-.4-4.38-1.15l-.31-.18-2.8.77.74-2.73-.2-.34A8.52 8.52 0 013.5 12.5 8.5 8.5 0 0112.16 4a8.5 8.5 0 018.34 8.5 8.5 8.5 0 01-8.34 8.5zm4.58-6.18c-.25-.12-1.47-.73-1.7-.82s-.39-.12-.56.12-.64.82-.78.99-.29.18-.54.06a6.97 6.97 0 01-2.05-1.28 7.6 7.6 0 01-1.4-1.73c-.15-.26-.02-.4.11-.53.11-.12.25-.29.38-.44.13-.14.17-.24.25-.4s.04-.29-.02-.4-.56-1.34-.77-1.83c-.2-.48-.4-.42-.56-.42h-.48c-.18 0-.46.06-.7.29s-.92.9-.92 2.2.94 2.56 1.08 2.74c.13.18 1.86 2.84 4.5 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.47-.6 1.68-1.18.2-.59.2-1.1.14-1.18-.06-.09-.23-.14-.48-.25z" />
        </svg>
      </a>
    </>
  );
}

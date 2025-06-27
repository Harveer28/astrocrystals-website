"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Contact Us</h2>
        <p className="text-purple-700 mb-4">Have questions or want a custom bracelet?</p>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

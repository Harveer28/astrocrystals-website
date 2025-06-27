export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 Astro Crystals. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
          <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

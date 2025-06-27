"use client";

export default function ZodiacSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-100 to-purple-300 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">
          Find Your Crystal by Zodiac Sign
        </h2>
        <p className="text-lg text-purple-700 mb-8">
          Select your zodiac sign to explore healing crystals that match your astrological energy.
        </p>
        <div className="max-w-md mx-auto">
          <select className="w-full p-3 rounded-md border border-purple-400 text-purple-800">
            {[
              "Aries",
              "Taurus",
              "Gemini",
              "Cancer",
              "Leo",
              "Virgo",
              "Libra",
              "Scorpio",
              "Sagittarius",
              "Capricorn",
              "Aquarius",
              "Pisces",
            ].map((sign) => (
              <option key={sign} value={sign}>
                {sign}
              </option>
            ))}
          </select>
        </div>
        <button className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition">
          Explore Zodiac Collection
        </button>
      </div>
    </section>
  );
}

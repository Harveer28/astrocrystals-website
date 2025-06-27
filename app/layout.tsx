import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astro Crystals - Healing Crystal Bracelets",
  description: "Buy powerful healing crystal bracelets to balance your energy and chakras. 100% genuine stones.",
  keywords: ["Astro Crystals", "Healing Bracelets", "Chakra Stones", "Crystal Jewelry", "Astrology Crystals"],
  metadataBase: new URL("https://astrocrystals.in"),
  openGraph: {
    title: "Astro Crystals",
    description: "Powerful healing crystal bracelets to attract positivity and balance.",
    url: "https://astrocrystals.in",
    siteName: "Astro Crystals",
    images: [
      {
        url: "/og-image.jpg", // ⚠️ Add this image inside your /public folder
        width: 1200,
        height: 630,
        alt: "Astro Crystals - Healing Bracelets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // ⚠️ Add favicon.ico inside public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Shri VHS Global Trade Private Limited | Indian Agricultural Exporter",
  description: "Shri VHS Global Trade Private Limited is a trusted Indian merchant exporter connecting premium Indian agricultural products—rice, spices, fresh fruits, vegetables, edible oils, and natural commodities—with global markets.",
  keywords: [
    "Shri VHS Global Trade",
    "Indian Agricultural Exporter",
    "Basmati Rice Exporter India",
    "Indian Spice Exporter",
    "Dry Red Chillies Export",
    "Turmeric Powder Bulk Export",
    "Fresh Indian Mangoes Export",
    "Groundnut Oil Export India",
    "B2B Agricultural Merchant Exporter",
    "Hyderabad Merchant Exporter"
  ],
  authors: [{ name: "Shri VHS Global Trade Private Limited" }],
  openGraph: {
    title: "Shri VHS Global Trade Private Limited | Connecting Indian Agriculture to Global Markets",
    description: "Delivering India's finest agricultural products to global markets with uncompromising quality, reliability, and trust.",
    url: "https://shrivhsglobaltrade.com",
    siteName: "Shri VHS Global Trade",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri VHS Global Trade Private Limited",
    description: "Premium Indian agricultural exporter connecting farm produce with international markets.",
    site: "@VHSGlobalTrade",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shri VHS Global Trade Private Limited",
    "url": "https://www.shrivhsglobaltrade.com",
    "logo": "https://www.shrivhsglobaltrade.com/logo.png",
    "description": "Trusted Indian merchant exporter connecting premium Indian agricultural products—rice, spices, fresh fruits, vegetables, edible oils, and natural commodities—with global markets.",
    "telephone": "+91 70958 51852",
    "email": "info@shrivhsglobaltrade.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://x.com/VHSGlobalTrade",
      "https://www.instagram.com"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFAF7] text-[#0F1F1A] antialiased selection:bg-[#C59B27] selection:text-white">
        {children}
      </body>
    </html>
  );
}


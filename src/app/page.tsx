"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProductCategories } from "@/components/home/ProductCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyUs } from "@/components/home/WhyUs";
import { FarmToGlobalProcess } from "@/components/home/FarmToGlobalProcess";
import { PackagingSection } from "@/components/home/PackagingSection";
import { QualityCompliance } from "@/components/home/QualityCompliance";
import { GlobalMarketsSection } from "@/components/home/GlobalMarketsSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);

  const handleOpenQuote = (product?: Product | null) => {
    setSelectedProductForQuote(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  const handleSelectCategory = (category: Category) => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#0F1F1A]">
      
      {/* 1. HEADER */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* 2. HERO */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3. TRUST STRIP */}
        <TrustStrip />

        {/* 4. PRODUCT CATEGORIES */}
        <ProductCategories onSelectCategory={handleSelectCategory} />

        {/* 5. FEATURED PRODUCTS */}
        <FeaturedProducts onSelectQuote={(p) => handleOpenQuote(p)} />

        {/* 6. WHY SHRI VHS GLOBAL TRADE */}
        <WhyUs />

        {/* 7. FARM TO GLOBAL MARKET */}
        <FarmToGlobalProcess />

        {/* 8. PACKAGING */}
        <PackagingSection onOpenQuote={() => handleOpenQuote()} />

        {/* 9. QUALITY & COMPLIANCE */}
        <QualityCompliance />

        {/* 10. GLOBAL MARKETS */}
        <GlobalMarketsSection onOpenQuote={() => handleOpenQuote()} />

        {/* 11. ABOUT PREVIEW */}
        <AboutPreview />

        {/* 12. FINAL CTA */}
        <FinalCTA onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 13. FOOTER */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        selectedProduct={selectedProductForQuote}
      />
    </div>
  );
}

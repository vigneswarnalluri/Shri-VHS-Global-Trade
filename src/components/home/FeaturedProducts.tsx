"use client";

import React, { useState } from "react";
import Link from "next/link";
import { productsData, Product } from "@/data/products";
import { AppleCardsCarousel } from "../ui/apple-cards-carousel";
import { ArrowRight, Filter } from "lucide-react";

interface FeaturedProductsProps {
  onSelectQuote?: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onSelectQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All 18 Catalogue Products" },
    { id: "rice-grains", name: "Rice & Grains" },
    { id: "spices", name: "Spices" },
    { id: "fresh-fruits", name: "Fresh Fruits" },
    { id: "fresh-vegetables", name: "Fresh Vegetables" },
    { id: "edible-oils", name: "Edible Oils" },
    { id: "natural-agricultural", name: "Natural & Agricultural" },
  ];

  const filteredProducts = activeCategory === "all"
    ? productsData
    : productsData.filter((p) => p.categoryId === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-tight">
              Our Export Catalogue
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4A5D56] font-light leading-relaxed">
              Explore our range of agricultural commodities sourced from India for international buyers and bulk commercial supply.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-xl border border-[#0D3B2E] px-5 py-2.5 text-xs font-semibold text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white transition-colors"
            >
              <span>Request Custom Catalogue Quote</span>
              <ArrowRight className="h-4 w-4 text-[#C59B27]" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-[#7A8E87] font-semibold pr-3 border-r border-[#E2DFD5] shrink-0">
            <Filter className="h-3.5 w-3.5 text-[#C59B27]" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0D3B2E] text-white shadow-sm"
                  : "bg-[#FAFAF7] text-[#4A5D56] hover:bg-[#0D3B2E]/10 hover:text-[#0D3B2E] border border-[#E2DFD5]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Apple Cards Carousel with Filtered Commodities */}
        <AppleCardsCarousel
          products={filteredProducts}
          onSelectQuote={onSelectQuote}
        />

      </div>
    </section>
  );
};

export default FeaturedProducts;

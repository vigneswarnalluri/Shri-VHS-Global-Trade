"use client";

import React, { useState } from "react";
import { productsData, Product } from "@/data/products";
import { ProductCard } from "../ui/ProductCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ArrowRight, Filter } from "lucide-react";

interface FeaturedProductsProps {
  onSelectQuote: (product: Product) => void;
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
    <section id="products" className="py-20 bg-white border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Catalogue Selection"
            title="Featured Export Products"
            description="Explore our full selection of export-grade commodities. Select any item to view packaging options or request a bulk commercial quote."
          />

          <div className="shrink-0">
            <Button
              variant="outline-green"
              size="md"
              onClick={() => onSelectQuote(productsData[0])}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Request Custom Catalogue Quote
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-[#7A8E87] font-semibold pr-2 border-r border-[#E2DFD5] shrink-0">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0D3B2E] text-white shadow-sm"
                  : "bg-[#FAFAF7] text-[#4A5D56] hover:bg-[#0D3B2E]/10 hover:text-[#0D3B2E] border border-[#E2DFD5]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectQuote={onSelectQuote}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

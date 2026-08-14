"use client";

import React from "react";
import { categoriesData, Category } from "@/data/categories";
import { SkewedCarousel } from "../ui/skewed-carousel-tw";
import { SectionHeading } from "../ui/SectionHeading";

interface ProductCategoriesProps {
  onSelectCategory?: (category: Category) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 sm:py-24 bg-[#FAFAF7] border-b border-[#E2DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="Explore Our Product Range"
          description="We specialize in six primary agricultural export categories sourced directly from India's agricultural hubs."
          align="center"
          className="mb-8"
        />

        {/* 3D Skewed Carousel for Product Categories */}
        <div className="w-full">
          <SkewedCarousel
            items={categoriesData}
            initialIndex={1}
            cardWidth={350}
            cardHeight={460}
            rotation={24}
            inactiveScale={0.86}
            perspective={1200}
            showControls={true}
            showDots={true}
            autoplay={true}
            autoplayInterval={4000}
            onSelect={(item) => {
              const matched = categoriesData.find((c) => c.id === item.id);
              if (matched && onSelectCategory) {
                onSelectCategory(matched);
              }
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;

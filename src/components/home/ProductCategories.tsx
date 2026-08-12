import React from "react";
import { categoriesData, Category } from "@/data/categories";
import { CategoryCard } from "../ui/CategoryCard";
import { SectionHeading } from "../ui/SectionHeading";

interface ProductCategoriesProps {
  onSelectCategory?: (category: Category) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 bg-[#FAFAF7] border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Product Range"
          title="Core Export Categories"
          description="We specialize in six primary agricultural export categories sourced directly from India's agricultural hubs."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={onSelectCategory}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

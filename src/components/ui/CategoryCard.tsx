import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  onSelect?: (category: Category) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect?.(category)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-[#E2DFD5] p-6 hover-lift cursor-pointer"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-lg bg-[#0D3B2E]/5 mb-5">
        <Image
          src={category.image}
          alt={category.name}
          width={400}
          height={250}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B2E]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-[#0D3B2E]">
          {category.itemCount} Varieties
        </span>
      </div>


      <div className="flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-xl font-bold text-[#0F1F1A] group-hover:text-[#0D3B2E] transition-colors">
              {category.name}
            </h3>
            <div className="h-8 w-8 rounded-full bg-[#FAFAF7] border border-[#E2DFD5] flex items-center justify-center text-[#0D3B2E] group-hover:bg-[#C59B27] group-hover:text-white group-hover:border-[#C59B27] transition-all">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          <p className="text-sm text-[#4A5D56] line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E2DFD5]/60 flex items-center text-xs font-medium text-[#C59B27] group-hover:text-[#0D3B2E] transition-colors">
          <span>Explore Category Products</span>
        </div>
      </div>
    </div>
  );
};

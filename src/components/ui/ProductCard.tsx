import React from "react";
import { Package, Check, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelectQuote?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectQuote }) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-[#E2DFD5] hover-lift">
      <div className="relative h-52 w-full overflow-hidden bg-[#0D3B2E]/5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-md bg-[#0D3B2E]/90 text-white backdrop-blur-sm px-2.5 py-1 text-xs font-medium tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-[#0F1F1A] group-hover:text-[#0D3B2E] transition-colors">
              {product.name}
            </h3>
          </div>
          {product.subtitle && (
            <p className="text-xs font-semibold text-[#C59B27] mt-0.5 tracking-wide uppercase">
              {product.subtitle}
            </p>
          )}

          <p className="mt-2 text-xs italic text-[#4A5D56] font-serif">
            "{product.tagline}"
          </p>

          <p className="mt-2 text-sm text-[#4A5D56] line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Feature tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {product.features.slice(0, 3).map((feat, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0D3B2E] bg-[#0D3B2E]/5 px-2 py-0.5 rounded"
            >
              <Check className="h-3 w-3 text-[#C59B27]" />
              {feat}
            </span>
          ))}
        </div>

        {/* Packaging details */}
        <div className="mt-auto pt-4 border-t border-[#E2DFD5]/60">
          <div className="flex items-start gap-2 mb-4">
            <Package className="h-4 w-4 text-[#C59B27] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-[#0F1F1A] block mb-1">Catalogue Packaging:</span>
              <div className="flex flex-wrap gap-1">
                {product.packaging.map((pack, pIdx) => (
                  <span
                    key={pIdx}
                    className="bg-[#FAFAF7] border border-[#E2DFD5] text-[#4A5D56] px-1.5 py-0.5 rounded text-[10px]"
                  >
                    {pack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectQuote?.(product)}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0D3B2E] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#165342] transition-colors"
          >
            <span>Request Quote</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#C59B27]" />
          </button>
        </div>
      </div>
    </div>
  );
};

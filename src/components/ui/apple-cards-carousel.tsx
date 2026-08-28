"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  MapPin,
  Ship,
  Package,
  FileCheck2,
} from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface AppleCardsCarouselProps {
  products: Product[];
  onSelectQuote?: (product: Product) => void;
}

export const AppleCardsCarousel: React.FC<AppleCardsCarouselProps> = ({
  products,
  onSelectQuote,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    const current = carouselRef.current;
    if (current) {
      current.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        current.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [checkScrollability, products]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">

      {/* Top Controls: Minimal Navigation Buttons */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <span className="text-xs font-mono text-[#7A8E87] tracking-wider uppercase">
          Showing {products.length} Export Commodities
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Previous Commodities"
            className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer",
              canScrollLeft
                ? "bg-white border-[#E2DFD5] text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white shadow-xs"
                : "bg-[#FAFAF7] border-[#E2DFD5]/60 text-gray-400 cursor-not-allowed opacity-40"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Next Commodities"
            className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer",
              canScrollRight
                ? "bg-white border-[#E2DFD5] text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white shadow-xs"
                : "bg-[#FAFAF7] border-[#E2DFD5]/60 text-gray-400 cursor-not-allowed opacity-40"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={carouselRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            onClick={() => setSelectedProduct(product)}
            className="shrink-0 snap-start w-[285px] sm:w-[360px] h-[440px] sm:h-[490px] rounded-3xl relative overflow-hidden bg-[#07241C] border border-[#E2DFD5] shadow-[0_4px_20px_-4px_rgba(13,59,46,0.06)] hover:shadow-xl hover:border-[#0D3B2E]/50 transition-all duration-400 flex flex-col justify-between cursor-pointer group"
          >
            {/* High-Resolution Commodity Photography */}
            <div className="absolute inset-0 z-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 285px, 360px"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Subtle Dark Gradient Overlay for Maximum Typographic Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 transition-opacity group-hover:from-black/95" />
            </div>

            {/* Top Row: Clean Category Badge */}
            <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#C59B27] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                {product.category}
              </span>
            </div>

            {/* Bottom Content: Typographic Hierarchy */}
            <div className="relative z-10 p-5 sm:p-6 text-white space-y-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug group-hover:text-[#F8F1DE] transition-colors">
                  {product.name}
                </h3>
                {product.subtitle && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C59B27] block mt-0.5 truncate" title={product.subtitle}>
                    {product.subtitle}
                  </span>
                )}
              </div>

              {/* Short Commercial Descriptor */}
              <p className="text-xs text-gray-300 font-light line-clamp-1 truncate leading-relaxed">
                {product.features[0] ? `${product.features[0]} • ${product.features[1] || ''}` : product.description}
              </p>

              {/* View Specs Trigger */}
              <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-xs gap-3">
                <span className="text-[10px] font-mono text-gray-300/90 truncate min-w-0 flex-1" title={product.specs?.moq || '1 FCL'}>
                  MOQ: {product.specs?.moq ? product.specs.moq.split('(')[0].trim() : '1 FCL'}
                </span>
                <span className="text-xs font-semibold text-[#C59B27] group-hover:text-white flex items-center gap-1 transition-colors shrink-0 whitespace-nowrap">
                  <span>View Specs</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* ================= PRODUCT DETAIL & SPECIFICATION MODAL ================= */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E2DFD5] my-auto max-h-[92vh] flex flex-col"
            >
              {/* Modal Banner */}
              <div className="relative h-56 sm:h-64 w-full shrink-0 bg-[#07241C]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer z-10 shadow-sm"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/20 px-2.5 py-0.5 rounded-full border border-[#C59B27]/40 inline-block mb-1.5">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {selectedProduct.name}
                  </h3>
                  {selectedProduct.subtitle && (
                    <p className="text-xs text-gray-300 font-mono uppercase tracking-wider mt-0.5">
                      {selectedProduct.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#0F1F1A]">

                {/* 1. Commodity Overview */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D3B2E] mb-2 flex items-center gap-1.5">
                    <FileCheck2 className="h-4 w-4 text-[#C59B27]" />
                    <span>Commodity Overview</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5D56] leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* 2. Objective Technical Specifications Table */}
                <div className="pt-4 border-t border-[#E2DFD5]">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D3B2E] mb-3">
                    Technical Specifications
                  </h4>

                  <div className="rounded-2xl border border-[#E2DFD5] overflow-hidden bg-[#FAFAF7]">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#0D3B2E]/5 border-b border-[#E2DFD5] text-[#0D3B2E]">
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider w-1/3">Specification</th>
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2DFD5]">
                        {selectedProduct.specs.variety && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Variety / Cultivar</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A] font-medium">{selectedProduct.specs.variety}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.grainType && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Grain Type / Calibration</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A] font-medium">{selectedProduct.specs.grainType}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.grade && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Export Grade</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A] font-medium">{selectedProduct.specs.grade}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.processing && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Processing Method</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A] font-medium">{selectedProduct.specs.processing}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.moisture && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Moisture Limit</td>
                            <td className="py-2.5 px-4 text-[#0D3B2E] font-bold font-mono">{selectedProduct.specs.moisture}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.broken && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Broken Percentage</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A] font-mono">{selectedProduct.specs.broken}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.purity && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Purity / Purity Standard</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A] font-medium">{selectedProduct.specs.purity}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.moq && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Minimum Order Quantity (MOQ)</td>
                            <td className="py-2.5 px-4 text-[#C59B27] font-bold">{selectedProduct.specs.moq}</td>
                          </tr>
                        )}
                        {selectedProduct.specs.shelfLife && (
                          <tr>
                            <td className="py-2.5 px-4 font-semibold text-[#4A5D56] bg-white/50">Shelf Life</td>
                            <td className="py-2.5 px-4 text-[#0F1F1A]">{selectedProduct.specs.shelfLife}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. Export Packaging Formats */}
                <div className="pt-4 border-t border-[#E2DFD5]">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D3B2E] mb-2.5 flex items-center gap-1.5">
                    <Package className="h-4 w-4 text-[#C59B27]" />
                    <span>Standard Export Packaging</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.packaging.map((pack, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#0D3B2E]/5 border border-[#0D3B2E]/15 text-xs font-semibold text-[#0D3B2E]"
                      >
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Origin Hub & Dispatch Ports */}
                <div className="pt-4 border-t border-[#E2DFD5] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4A5D56]">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5]">
                    <MapPin className="h-4 w-4 text-[#0D3B2E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F1F1A] block">Origin Sourcing Hub:</span>
                      <span>{selectedProduct.specs.origin || "India"}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5]">
                    <Ship className="h-4 w-4 text-[#0D3B2E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F1F1A] block">Primary Dispatch Ports:</span>
                      <span>{selectedProduct.specs.dispatchPorts || "JNPT Mumbai • Chennai • Vizag"}</span>
                    </div>
                  </div>
                </div>

                {/* 5. Modal Sticky / Footer CTA */}
                <div className="pt-5 border-t border-[#E2DFD5] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-[#7A8E87] font-mono">
                    Incoterms 2020: FOB, CIF, CFR, EXW
                  </span>

                  <Link
                    href={`/quote?product=${selectedProduct.id}`}
                    onClick={() => {
                      onSelectQuote?.(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D3B2E] hover:bg-[#165342] text-white px-6 py-3 text-xs font-bold shadow-md transition-colors"
                  >
                    <span>Request Quotation for {selectedProduct.name} &rarr;</span>
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AppleCardsCarousel;

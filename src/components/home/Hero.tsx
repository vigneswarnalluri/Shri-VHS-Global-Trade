"use client";

import React from "react";
import { companyData } from "@/data/company";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative w-full bg-[#FAFAF7] py-16 lg:py-28 border-b border-[#E2DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Restrained Editorial Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Small uppercase eyebrow label */}
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0D3B2E] uppercase block">
              INDIA / GLOBAL AGRICULTURAL TRADE
            </span>

            {/* Main Editorial Serif Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-[1.1]">
              Connecting Indian Agriculture to <span className="text-[#0D3B2E] italic underline decoration-[#C59B27] decoration-2 underline-offset-8">Global Markets</span>
            </h1>

            {/* Narrow Supporting Text */}
            <p className="text-base sm:text-lg text-[#4A5D56] leading-relaxed max-w-md">
              Supplying quality agricultural products from India to global markets with reliability and trust.
            </p>

            {/* Refined CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0D3B2E] px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#165342] transition-colors"
              >
                <span>Explore Products</span>
                <span className="text-[#C59B27]">→</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#0D3B2E] hover:text-[#C59B27] transition-colors text-left"
              >
                <span>Request a Quote</span>
                <span className="text-[#C59B27]">↗</span>
              </button>
            </div>

            {/* Simple Editorial Trust Line */}
            <div className="pt-10 border-t border-[#E2DFD5]/80 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] font-semibold tracking-[0.16em] text-[#7A8E87] uppercase">
              <span>QUALITY-FOCUSED SUPPLY</span>
              <span className="text-[#C59B27]">•</span>
              <span>EXPORT-READY</span>
              <span className="text-[#C59B27]">•</span>
              <span>GLOBAL DELIVERY</span>
            </div>

          </div>

          {/* Right Column: ONE Premium High-Resolution Photographic Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-[#E2DFD5] bg-white p-1.5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1400"
                alt="Indian Agricultural Commodities"
                className="h-80 sm:h-[420px] w-full object-cover object-center rounded-lg"
              />
            </div>
            
            {/* Elegant Small Caption */}
            <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#7A8E87] uppercase pl-1">
              <span className="h-0.5 w-5 bg-[#C59B27] inline-block" />
              <span>INDIA / AGRICULTURAL SOURCING</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

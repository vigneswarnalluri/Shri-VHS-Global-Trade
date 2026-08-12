import React from "react";
import { ArrowRight, Globe, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "../ui/Button";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E2DFD5]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#0D3B2E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0D3B2E]/5 border border-[#0D3B2E]/15 px-3.5 py-1.5 text-xs font-semibold text-[#0D3B2E]">
              <Globe className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>Merchant Exporter • Hyderabad, India</span>
              <span className="text-[#C59B27]">•</span>
              <span className="text-[#4A5D56] font-normal">Direct B2B Supply</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-[1.12]">
              Connecting Indian Agriculture to <span className="text-[#0D3B2E] italic underline decoration-[#C59B27] decoration-2 underline-offset-8">Global Markets</span>
            </h1>

            {/* Factual Subtitle */}
            <p className="text-base sm:text-lg text-[#4A5D56] leading-relaxed max-w-2xl">
              {companyData.subline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#products" className="w-full sm:w-auto">
                <Button
                  variant="primary-green"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Products
                </Button>
              </a>

              <Button
                variant="primary-gold"
                size="lg"
                onClick={onOpenQuote}
                icon={<ChevronRight className="h-4 w-4" />}
              >
                Request a Quote
              </Button>
            </div>

            {/* Factual Highlights */}
            <div className="pt-6 border-t border-[#E2DFD5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-[#0F1F1A]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>Direct Farmer Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>International Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>Bulk Export Logistics</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Composition - Multi-Commodity Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Multi-Commodity Grid Composite */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E2DFD5] bg-white shadow-xl hover-lift p-2">
                <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                  
                  {/* Top Left: Spices (Turmeric / Chillies) */}
                  <div className="relative h-44 overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600"
                      alt="Indian Export Spices"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white">
                      Spices & Turmeric
                    </span>
                  </div>

                  {/* Top Right: Fresh Fruits (Mangoes / Coconuts) */}
                  <div className="relative h-44 overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600"
                      alt="Fresh Indian Mangoes"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white">
                      Fresh Produce
                    </span>
                  </div>

                  {/* Bottom Left: Grains (Rice) */}
                  <div className="relative h-44 overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600"
                      alt="Premium Basmati Rice Grains"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white">
                      Rice & Grains
                    </span>
                  </div>

                  {/* Bottom Right: Fresh Vegetables & Oils */}
                  <div className="relative h-44 overflow-hidden group bg-[#0D3B2E]/10">
                    <img
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
                      alt="Fresh Vegetables"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white">
                      Fresh Vegetables
                    </span>
                  </div>

                </div>

                {/* Floating Overlay Info Badge - Non-numerical & Supportable */}
                <div className="mt-2 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E2DFD5] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#0D3B2E] flex items-center justify-center text-white shrink-0">
                      <ShieldCheck className="h-5 w-5 text-[#C59B27]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F1F1A]">Export-Ready Quality</h4>
                      <p className="text-[11px] text-[#4A5D56]">Multi-Category Agricultural Supply</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Accent Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#07241C] text-white p-3.5 rounded-xl border border-white/10 shadow-xl max-w-xs items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] shrink-0">
                  <Globe className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[#C59B27] font-semibold block">Global Supply Chain</span>
                  <span className="text-gray-300 text-[11px]">Connecting India to International Markets</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

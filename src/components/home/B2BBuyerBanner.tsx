"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  PackageCheck,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Ship,
  CheckCircle2,
  Globe,
  Clock,
  FileCheck,
  Anchor,
} from "lucide-react";

interface B2BBuyerBannerProps {
  onOpenQuote?: () => void;
}

export const B2BBuyerBanner: React.FC<B2BBuyerBannerProps> = () => {
  return (
    <section className="bg-[#FAFAF7] py-20 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0D3B2E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-tight">
            Streamlined B2B Agricultural Procurement
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A5D56] font-light leading-relaxed">
            Engineered for international food distributors, wholesale commodity importers, and supermarket retail networks seeking reliable, certified Indian agricultural supply.
          </p>
        </div>

        {/* ================= ACETERNITY-STYLE BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ---------------- BENTO CARD 1: Bulk Cargo & FCL Allocation (Span 7) ---------------- */}
          <div className="lg:col-span-7 bg-[#07241C] text-white rounded-3xl border border-white/10 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-lg group hover:border-[#C59B27]/40 transition-all duration-300">
            {/* Background subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C59B27]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C59B27] bg-[#C59B27]/15 px-3 py-1 rounded-full border border-[#C59B27]/30">
                  Container Capacity &amp; Logistics
                </span>
                <span className="text-xs text-gray-400 font-mono">FCL &bull; Breakbulk</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Bulk Commercial Supply &amp; Vessel Loading
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                Direct container stuffing from central processing mills with certified tare weight records, multi-container consolidation, and seamless export clearance.
              </p>
            </div>

            {/* Visual Container Metric Mockup */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-gray-300 text-xs mb-2">
                    <span>20ft Container</span>
                    <Ship className="h-3.5 w-3.5 text-[#C59B27]" />
                  </div>
                  <span className="text-xl font-bold font-mono text-white">24–26 MT</span>
                  <span className="text-[10px] text-gray-400 mt-1">Standard Dry FCL Cargo</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-gray-300 text-xs mb-2">
                    <span>40ft High Cube</span>
                    <Layers className="h-3.5 w-3.5 text-[#C59B27]" />
                  </div>
                  <span className="text-xl font-bold font-mono text-white">27–28 MT</span>
                  <span className="text-[10px] text-gray-400 mt-1">Volumetric &amp; Palletized</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#C59B27]/10 border border-[#C59B27]/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[#C59B27] text-xs mb-2">
                    <span>Reefer Cargo</span>
                    <Anchor className="h-3.5 w-3.5 text-[#C59B27]" />
                  </div>
                  <span className="text-xl font-bold font-mono text-white">+2°C to +8°C</span>
                  <span className="text-[10px] text-gray-300 mt-1">Cold Chain Fresh Produce</span>
                </div>

              </div>
            </div>
          </div>

          {/* ---------------- BENTO CARD 2: Real-time Quality & Lab Assurance (Span 5) ---------------- */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E2DFD5] p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0D3B2E]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0D3B2E] bg-[#0D3B2E]/5 px-3 py-1 rounded-full border border-[#0D3B2E]/10">
                  Lab Certified
                </span>
                <ShieldCheck className="h-5 w-5 text-[#C59B27]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F1F1A] mb-2">
                Buyer Lab Specifications &amp; Quality Tolerance
              </h3>
              <p className="text-xs text-[#4A5D56] leading-relaxed">
                Custom grain grading, moisture control, optical color sorting, and SGS / Bureau Veritas inspection tests before container dispatch.
              </p>
            </div>

            {/* Visual Quality Parameters Card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAFAF7] border border-[#E2DFD5] space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4A5D56] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D3B2E]" />
                  Purity &amp; Admixture Limit:
                </span>
                <span className="font-mono font-bold text-[#0F1F1A]">99.0% – 99.5% Min</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4A5D56] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D3B2E]" />
                  Moisture Content Standard:
                </span>
                <span className="font-mono font-bold text-[#0D3B2E]">&le; 12.0% Max</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4A5D56] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D3B2E]" />
                  Pre-Shipment Inspection:
                </span>
                <span className="font-mono font-bold text-[#C59B27]">SGS / Intertek</span>
              </div>
            </div>
          </div>

          {/* ---------------- BENTO CARD 3: Export Packaging & Private Labeling (Span 4) ---------------- */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E2DFD5] p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0D3B2E]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0D3B2E] bg-[#0D3B2E]/5 px-3 py-1 rounded-full border border-[#0D3B2E]/10">
                  Custom Packing
                </span>
                <PackageCheck className="h-5 w-5 text-[#C59B27]" />
              </div>

              <h3 className="text-xl font-serif font-bold text-[#0F1F1A] mb-2">
                Export Packaging &amp; Private Label
              </h3>
              <p className="text-xs text-[#4A5D56] leading-relaxed mb-4">
                Packaging tailored for supermarkets, food processors, and wholesale trade.
              </p>

              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5] text-xs font-semibold text-[#0F1F1A] flex items-center justify-between">
                  <span>Retail Pouches (100g – 5kg)</span>
                  <span className="text-[10px] text-[#C59B27] font-mono uppercase">Supermarkets</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5] text-xs font-semibold text-[#0F1F1A] flex items-center justify-between">
                  <span>PP / Jute Bags (25kg &amp; 50kg)</span>
                  <span className="text-[10px] text-[#0D3B2E] font-mono uppercase">Wholesale</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5] text-xs font-semibold text-[#0F1F1A] flex items-center justify-between">
                  <span>Jumbo Bulk Bags (1 MT Totes)</span>
                  <span className="text-[10px] text-[#7A8E87] font-mono uppercase">Industrial</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2DFD5] flex items-center gap-2 text-xs text-[#7A8E87]">
              <FileCheck className="h-3.5 w-3.5 text-[#0D3B2E]" />
              <span>Full private brand graphic printing available</span>
            </div>
          </div>

          {/* ---------------- BENTO CARD 4: Ocean Freight & Port Gateways (Span 4) ---------------- */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E2DFD5] p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0D3B2E]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0D3B2E] bg-[#0D3B2E]/5 px-3 py-1 rounded-full border border-[#0D3B2E]/10">
                  Port Logistics
                </span>
                <Globe className="h-5 w-5 text-[#C59B27]" />
              </div>

              <h3 className="text-xl font-serif font-bold text-[#0F1F1A] mb-2">
                FOB &amp; CIF Global Freight Terms
              </h3>
              <p className="text-xs text-[#4A5D56] leading-relaxed mb-4">
                Dispatches coordinated through India&apos;s premier deep-water container ports to destinations worldwide.
              </p>

              {/* Transit Ports Visual */}
              <div className="p-3.5 rounded-2xl bg-[#07241C] text-white space-y-2">
                <div className="flex justify-between text-xs border-b border-white/10 pb-1.5">
                  <span className="text-gray-300">JNPT Mumbai &rarr; Jebel Ali (UAE)</span>
                  <span className="font-mono text-[#C59B27] font-bold">4–6 Days</span>
                </div>
                <div className="flex justify-between text-xs border-b border-white/10 pb-1.5">
                  <span className="text-gray-300">Chennai &rarr; Singapore / SE Asia</span>
                  <span className="font-mono text-[#C59B27] font-bold">5–8 Days</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300">JNPT &rarr; Rotterdam / Europe</span>
                  <span className="font-mono text-[#C59B27] font-bold">18–22 Days</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2DFD5] flex items-center gap-2 text-xs text-[#7A8E87]">
              <Clock className="h-3.5 w-3.5 text-[#0D3B2E]" />
              <span>Incoterms 2020: FOB, CIF, CFR, EXW</span>
            </div>
          </div>

          {/* ---------------- BENTO CARD 5: Commercial Proforma & Fast RFQ (Span 4) ---------------- */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0D3B2E] to-[#07241C] text-white rounded-3xl border border-white/10 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-lg group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#C59B27]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C59B27] bg-[#C59B27]/15 px-3 py-1 rounded-full border border-[#C59B27]/30">
                  Instant Quotation
                </span>
                <FileSpreadsheet className="h-5 w-5 text-[#C59B27]" />
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Commercial Proforma Desk
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Receive detailed proforma quotation sheets with current commodity benchmark prices, ocean freight, and packing timelines.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/quote"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#C59B27] px-5 py-3 text-xs font-bold text-white hover:bg-[#D4AF37] transition-colors shadow-md"
              >
                <span>Request Commercial Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-5 py-2.5 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
              >
                <span>Contact Export Desk</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

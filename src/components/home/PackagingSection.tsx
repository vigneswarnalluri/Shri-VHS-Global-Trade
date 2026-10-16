"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Package,
  Box,
  Layers,
  Shield,
  CheckCircle2,
} from "lucide-react";

interface PackagingSectionProps {
  onOpenQuote?: (packagingType?: string) => void;
}

interface PackagingOption {
  id: string;
  badgeNumber: string;
  categoryCode: string;
  tabLabel: string;
  badge: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  compliance: string;
  icon: React.ComponentType<{ className?: string }>;
  formats: string;
  tareSummary: string;
  capacitySummary: string;
}

export const PackagingSection: React.FC<PackagingSectionProps> = ({ onOpenQuote }) => {
  const packagingOptions: PackagingOption[] = [
    {
      id: "retail",
      badgeNumber: "01",
      categoryCode: "RETAIL",
      tabLabel: "Retail Packaging",
      badge: "Consumer & Supermarkets",
      title: "Hygienic Retail Packaging",
      summary: "Consumer-ready units engineered for direct supermarket shelf placement with oxygen-barrier laminate.",
      image: "/images/packaging/retail-packaging.jpg",
      imageAlt: "Premium stand-up zipper pouches and food-grade bottles for retail export",
      compliance: "FSSAI & ISO 22000 Food Grade",
      icon: Package,
      formats: "Stand-Up Pouches · Quad-Seal · PET Bottles",
      tareSummary: "100g to 5kg",
      capacitySummary: "18,000–20,000 kg / FCL",
    },
    {
      id: "wholesale",
      badgeNumber: "02",
      categoryCode: "COMMERCIAL",
      tabLabel: "Wholesale Packaging",
      badge: "Commercial & Food Service",
      title: "Commercial Wholesale Units",
      summary: "High-tenacity bags designed for food processing plants, catering networks, and regional distributors.",
      image: "/images/packaging/wholesale-packaging.jpg",
      imageAlt: "Shrink-wrapped palletized 25kg PP woven export sacks in warehouse",
      compliance: "High-Tenacity Multi-Wall Commercial",
      icon: Box,
      formats: "25kg PP Woven Sacks · Multi-Wall Kraft · Tins",
      tareSummary: "10kg to 30kg",
      capacitySummary: "24,000–25,000 kg / FCL",
    },
    {
      id: "bulk",
      badgeNumber: "03",
      categoryCode: "BULK CARGO",
      tabLabel: "Bulk Ocean Cargo",
      badge: "Maritime Ocean Freight",
      title: "Heavy-Duty Bulk Cargo",
      summary: "Industrial jumbo containers engineered to withstand multi-week maritime transit and port crane loading.",
      image: "/images/packaging/bulk-ocean-cargo.jpg",
      imageAlt: "1000kg FIBC jumbo bulk bags on pallets beside shipping container at port",
      compliance: "Seaworthy FCL Approved · ISO 9001",
      icon: Layers,
      formats: "1,000kg FIBC Jumbo Bags · 50kg PP/Jute",
      tareSummary: "50kg to 1,000kg",
      capacitySummary: "24,000–26,000 kg / FCL",
    },
    {
      id: "custom",
      badgeNumber: "04",
      categoryCode: "OEM / BRAND",
      tabLabel: "Custom & Private Label",
      badge: "OEM & Destination Compliance",
      title: "Tailored OEM Solutions",
      summary: "Custom outer bag specifications, 8-color rotogravure buyer branding, and destination quarantine compliance.",
      image: "/images/packaging/custom-privatelabel.jpg",
      imageAlt: "Private label export packaging collection with custom boxes and pouches",
      compliance: "SGS Audit Ready · Custom Labels",
      icon: Shield,
      formats: "8-Color Rotogravure · Custom Barcoding",
      tareSummary: "Custom Specs",
      capacitySummary: "Optimized FCL Load",
    },
  ];

  return (
    <section id="packaging" className="py-20 sm:py-24 bg-white border-t border-[#EFECE6] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Packaging Solutions"
          description="Standardized commercial, retail, and bulk packaging specifications engineered for ocean transit and international customs compliance."
          align="center"
          className="mb-12 sm:mb-14"
        />

        {/* ================= 4 SPACIOUS MINIMALIST CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {packagingOptions.map((opt) => (
            <div
              key={opt.id}
              onClick={() => onOpenQuote?.(opt.title)}
              className="minimal-packaging-card h-[395px] p-5 sm:p-5.5 select-none flex flex-col justify-between group"
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${opt.tabLabel}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenQuote?.(opt.title);
                }
              }}
            >
              {/* DEFAULT FRONT VIEW (UNHOVERED) */}
              <div className="card-front-content">
                
                {/* Top Row: Category index */}
                <div className="flex items-center pb-2.5 border-b border-[#F0ECE1]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#C59B27] tracking-wider">
                      {opt.badgeNumber}
                    </span>
                    <span className="text-[#D8D4C8] text-xs font-light">/</span>
                    <span className="text-[10px] font-bold tracking-widest text-[#7A8E87] uppercase">
                      {opt.categoryCode}
                    </span>
                  </div>
                </div>

                {/* Center: Image Frame */}
                <div className="my-auto py-2">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E8E5DC] bg-[#F7F5EE] shadow-2xs">
                    <Image
                      src={opt.image}
                      alt={opt.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Bottom Row: Typography and Specifications Bar */}
                <div className="pt-1">
                  <h4 className="text-[15px] font-bold text-[#0F1F1A] tracking-tight leading-snug">
                    {opt.tabLabel}
                  </h4>
                  <p className="text-xs text-[#5C6E67] font-normal mt-0.5 truncate">
                    {opt.badge}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-[#F0ECE1] flex items-center text-xs">
                    <span className="text-[11px] font-semibold text-[#0D3B2E] bg-[#FAF8F2] border border-[#E5E2D9] px-2.5 py-0.5 whitespace-nowrap">
                      {opt.tareSummary}
                    </span>
                  </div>
                </div>

              </div>

              {/* HOVER REVEAL OVERLAY (DUAL-SIDE GREEN SWEEP) */}
              <div className="card-hover-reveal p-5 sm:p-5.5 flex flex-col justify-between text-white">
                <div>
                  <div className="pb-2.5 border-b border-white/15">
                    <span className="text-[10px] font-bold tracking-widest text-[#C59B27] uppercase">
                      {opt.badgeNumber} · SPECIFICATION
                    </span>
                  </div>

                  <h4 className="text-[15.5px] sm:text-base font-bold text-white tracking-tight leading-tight mt-2.5">
                    {opt.tabLabel}
                  </h4>
                  <p className="text-[11px] text-[#C59B27] mt-0.5 font-medium">
                    {opt.compliance}
                  </p>

                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed mt-2 mb-3">
                    {opt.summary}
                  </p>

                  <div className="space-y-2 text-xs pt-2.5 border-t border-white/15">
                    <div>
                      <span className="text-[9.5px] uppercase tracking-wider text-white/60 block font-medium">
                        Formats:
                      </span>
                      <span className="font-semibold text-white block text-[11.5px] truncate">
                        {opt.formats}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-0.5 whitespace-nowrap gap-2">
                      <span className="text-white/60 whitespace-nowrap shrink-0">Container Load:</span>
                      <span className="font-bold text-[#C59B27] whitespace-nowrap text-right">{opt.capacitySummary}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-end">
                  <div className="btn-geometric-wipe-light px-4 py-1.5 text-[11px] shadow-2xs rounded-none">
                    <span>Request Quote</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA & Assurance Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/quote"
            onClick={(e) => {
              if (onOpenQuote) {
                e.preventDefault();
                onOpenQuote();
              }
            }}
            className="btn-geometric-wipe px-8 py-3.5 text-xs sm:text-sm shadow-sm rounded-none"
          >
            <span className="tracking-wide">Request Custom Packaging & Export Quote</span>
          </Link>
          <div className="mt-4 flex items-center justify-center gap-2 text-[11.5px] text-[#7A8E87]">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#0D3B2E]" />
            <span>ISPM-15 certified heat-treated wooden pallets, container desiccants, and SGS inspection standard on all orders.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagingSection;

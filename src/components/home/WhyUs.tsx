"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";
import {
  CheckCircle2,
  ShieldCheck,
  Ship,
  DollarSign,
  Package,
  Clock,
  BadgeCheck,
  Check,
} from "lucide-react";

interface WhyUsProps {
  onOpenQuote?: () => void;
}

interface AdvantagePillar {
  title: string;
  tag: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  metrics: string[];
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenQuote }) => {
  const advantagePillars: AdvantagePillar[] = [
    {
      title: "Direct Farm-Gate Sourcing",
      tag: "Origin Sourcing",
      description:
        "Procuring directly from verified farming communities across India's prime agricultural belts, cutting intermediaries for peak freshness and origin purity.",
      icon: CheckCircle2,
      metrics: ["100% Farm-Gate Traceability", "Zero Trading Intermediaries"],
    },
    {
      title: "Strict International Quality Compliance",
      tag: "Quality Control",
      description:
        "Strict adherence to destination country phytosanitary protocols, foreign matter limits, and certified lab purity benchmarks before container sealing.",
      icon: ShieldCheck,
      metrics: ["APEDA & Phytosanitary Cleared", "Optical Sorter Graded"],
    },
    {
      title: "Reliable Port Freight & FCL Logistics",
      tag: "Ocean Freight",
      description:
        "FCL 20ft & 40ft container allocations coordinated via major Indian ports with Tier-1 shipping lines and scheduled weekly departures.",
      icon: Ship,
      metrics: ["24–26 MT FCL Capacity", "Gateway Ports: JNPT · Mundra · Chennai"],
    },
    {
      title: "Competitive Direct-Origin Pricing",
      tag: "Commercial Economics",
      description:
        "Direct-from-mill purchasing power and lean logistics provide international importers with sharp, transparent FOB and CIF export pricing.",
      icon: DollarSign,
      metrics: ["FOB & CIF Quotations", "Volume Price Protection"],
    },
    {
      title: "Certified Transit & Bulk Packaging",
      tag: "Packaging Standards",
      description:
        "Hygienic multi-wall paper bags, moisture-proof PP woven sacks, container liners, and private labeling engineered for long ocean voyages.",
      icon: Package,
      metrics: ["25kg, 50kg PP & Jumbo Bags", "Private Labeling Available"],
    },
    {
      title: "Dedicated 24/7 Global Trade Desk",
      tag: "Trade Support",
      description:
        "Rapid quotation turnaround, milestone dispatch updates, and dedicated bilingual trade account coordination for international procurement teams.",
      icon: Clock,
      metrics: ["< 24-Hour Quote Turnaround", "Real-Time Container Milestones"],
    },
  ];

  const pledges = [
    {
      title: "100% Farm-Gate Origin Traceability",
      desc: "Guaranteed authentic Indian agricultural provenance with zero broker markups.",
    },
    {
      title: "Pre-Shipment Lab & Quarantine Audit",
      desc: "Certified purity, moisture levels, and SGS/phytosanitary inspection before stuffing.",
    },
    {
      title: "Tri-Port Gateway Logistics",
      desc: "Flexible stuffing and customs dispatch from Mundra, JNPT, and Chennai.",
    },
    {
      title: "Binding Commercial Discipline",
      desc: "Honored FOB/CIF pricing contracts, transparent bills of lading, and freight insurance.",
    },
  ];

  const certifications = [
    "APEDA Registered",
    "Spices Board of India",
    "FSSAI Certified",
    "ISO 9001:2015 Standards",
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Why Global Buyers Partner with Shri VHS"
          description="Built on strict commercial discipline, direct agricultural origin sourcing, and committed international B2B client satisfaction."
          align="center"
          className="mb-12 sm:mb-14"
        />

        {/* Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN: EXECUTIVE EXPORT COMMITMENT ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-white border border-[#E2DFD5] p-7 sm:p-8 shadow-xs">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D3B2E]/5 border border-[#0D3B2E]/10 text-[#0D3B2E] text-[11px] font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C59B27]" />
                <span>The Shri VHS Export Commitment</span>
              </div>

              {/* Card Title & Pitch */}
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-snug mb-2.5">
                Our Guarantee to International Importers
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6E67] leading-relaxed mb-6">
                We eliminate trading opacity. Every consignment dispatched under Shri VHS Global Trade is backed by direct origin sourcing, certified tare weights, and complete customs transparency.
              </p>

              {/* 4 Core Pledges */}
              <div className="space-y-3 mb-6">
                {pledges.map((pledge, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5]"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-[#0D3B2E]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#0D3B2E] stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-semibold text-[#0F1F1A]">
                          {pledge.title}
                        </h4>
                        <p className="text-[11px] text-[#5C6E67] mt-0.5 leading-relaxed">
                          {pledge.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Statutory Regulatory Framework Strip */}
              <div className="pt-4 pb-5 border-t border-[#E2DFD5]">
                <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#7A8E87] block mb-2">
                  Official Regulatory Compliance:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {certifications.map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAFAF7] text-[#0F1F1A] border border-[#E2DFD5] text-[10.5px] font-medium"
                    >
                      <BadgeCheck className="h-3 w-3 text-[#C59B27]" />
                      <span>{cert}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimalist CTA Button */}
              <Link
                href="/quote"
                onClick={(e) => {
                  if (onOpenQuote) {
                    e.preventDefault();
                    onOpenQuote();
                  }
                }}
                className="btn-geometric-wipe w-full py-3 px-5 text-xs rounded-none shadow-xs text-center"
              >
                <span>Request Custom Export Quote</span>
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 6 ADVANTAGE PILLAR CARDS ================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantagePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-white border border-[#E2DFD5] p-5 shadow-2xs hover:border-[#0D3B2E] hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header: Icon & Domain Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className="h-9 w-9 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5] flex items-center justify-center text-[#0D3B2E]">
                          <IconComponent className="h-4 w-4 text-[#C59B27]" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7A8E87] bg-[#FAFAF7] px-2 py-0.5 rounded border border-[#E2DFD5]">
                          {pillar.tag}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h4 className="text-sm font-bold text-[#0F1F1A] mb-1.5 leading-snug">
                        {pillar.title}
                      </h4>

                      {/* Card Description */}
                      <p className="text-xs text-[#5C6E67] leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Metrics / Proof Badge Footer */}
                    <div className="pt-3 border-t border-[#EFECE6] space-y-1">
                      {pillar.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-1.5 text-[11px] text-[#4A5D56]"
                        >
                          <Check className="h-3 w-3 text-[#0D3B2E] shrink-0 stroke-[2.5]" />
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyUs;

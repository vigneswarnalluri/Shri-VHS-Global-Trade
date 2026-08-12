"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight, Globe, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "../ui/Button";

interface HeroProps {
  onOpenQuote: () => void;
}

const contentContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const contentItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.8, bounce: 0 },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] py-14 lg:py-24 border-b border-[#E2DFD5]">
      
      {/* Subtle radial glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C59B27]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#0D3B2E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Content */}
          <motion.div
            variants={contentContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow Tag */}
            <motion.div variants={contentItem} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0D3B2E]/5 border border-[#0D3B2E]/15 px-3.5 py-1.5 text-xs font-semibold text-[#0D3B2E]">
                <Globe className="h-3.5 w-3.5 text-[#C59B27]" />
                <span>Merchant Exporter • Hyderabad, India</span>
                <span className="text-[#C59B27]">•</span>
                <span className="text-[#4A5D56] font-normal">Direct B2B Supply</span>
              </div>
            </motion.div>

            {/* Editorial Serif Headline */}
            <motion.h1
              variants={contentItem}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-[1.12]"
            >
              Connecting Indian Agriculture to <span className="text-[#0D3B2E] italic underline decoration-[#C59B27] decoration-2 underline-offset-8">Global Markets</span>
            </motion.h1>

            {/* Factual Subline */}
            <motion.p
              variants={contentItem}
              className="text-base sm:text-lg text-[#4A5D56] leading-relaxed max-w-2xl"
            >
              {companyData.subline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={contentItem}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
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
            </motion.div>

            {/* 3 Compact Trust Points */}
            <motion.div
              variants={contentItem}
              className="pt-6 border-t border-[#E2DFD5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-[#0F1F1A]"
            >
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
            </motion.div>

          </motion.div>

          {/* Right Column: ONE Dominant High-Resolution Agricultural Photograph */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Single Dominant Photo Container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E2DFD5] bg-white shadow-xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200"
                  alt="Indian Agricultural Export Commodities"
                  className="h-80 sm:h-[420px] w-full object-cover object-center"
                />
                
                {/* Subtle bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B2E]/80 via-transparent to-transparent opacity-80" />

                {/* Single Minimal Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E2DFD5] shadow-lg flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#0D3B2E] flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="h-5 w-5 text-[#C59B27]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F1F1A]">Export-Ready Quality</h4>
                    <p className="text-[11px] text-[#4A5D56]">Global Supply Chain</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

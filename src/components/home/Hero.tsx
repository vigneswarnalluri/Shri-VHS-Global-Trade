"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight, Globe, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "../ui/Button";

interface HeroProps {
  onOpenQuote: () => void;
}

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.035, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 1.15, bounce: 0 },
  },
};

const contentContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const contentItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.72, bounce: 0 },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#FAFAF7] font-sans text-[#0F1F1A] antialiased border-b border-[#E2DFD5] flex flex-col justify-between pt-36 lg:pt-40">
      
      {/* Seamless Full-Bleed Background Photo spanning behind Header and Hero */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="absolute inset-0 -top-24 will-change-transform pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1800"
          alt="Indian Agricultural Spices & Produce"
          className="h-[120%] w-full object-cover object-center"
        />
      </motion.div>

      {/* Top-Heavy Fade Mask: High opacity white fade at top, reducing smoothly down towards the bottom food colors */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,247,0.96)_0%,rgba(250,250,247,0.88)_25%,rgba(250,250,247,0.55)_55%,rgba(250,250,247,0.12)_82%,rgba(250,250,247,0.02)_100%)]"
        aria-hidden="true"
      />
      
      {/* Center Radial Soft White Glow Overlay for Headline Contrast */}
      <div
        className="absolute inset-x-0 top-1/3 h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.55)_45%,rgba(255,255,255,0)_80%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto flex w-full max-w-[820px] flex-col items-center text-center"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={contentItem}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D3B2E]/20 bg-white/85 px-4 py-1.5 text-xs font-semibold text-[#0D3B2E] shadow-xs backdrop-blur-md">
              <Globe className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>Merchant Exporter • Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            variants={contentItem}
            className="mt-6 max-w-4xl font-serif text-[clamp(2.5rem,4.6vw,5.25rem)] leading-[1.02] font-bold tracking-tight text-balance text-[#0F1F1A]"
          >
            Connecting Indian Agriculture to <span className="text-[#0D3B2E] italic underline decoration-[#C59B27] decoration-2 underline-offset-8">Global Markets</span>
          </motion.h1>

          {/* Supporting Subline */}
          <motion.p
            variants={contentItem}
            className="mt-6 max-w-[560px] text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.45] font-normal text-pretty text-[#4A5D56]"
          >
            Supplying quality agricultural products from India to global markets with reliability and trust.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={contentItem}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a href="#products" className="w-full sm:w-auto">
              <Button
                variant="primary-green"
                size="lg"
                className="w-full sm:w-auto px-7 py-3.5 shadow-xs"
                icon={<ArrowRight className="h-4 w-4 text-[#C59B27]" />}
              >
                Explore Products
              </Button>
            </a>

            <Button
              variant="primary-gold"
              size="lg"
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-3.5 shadow-xs"
              icon={<ChevronRight className="h-4 w-4" />}
            >
              Request a Quote
            </Button>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Floating White Pill */}
      <div className="relative z-10 pb-8 flex justify-center px-4">
        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            variants={contentItem}
            className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-full bg-white/90 border border-[#E2DFD5] px-6 py-2.5 shadow-md backdrop-blur-md text-xs font-semibold text-[#0F1F1A]"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#C59B27]" />
              <span>Export-Ready Quality</span>
            </div>
            <span className="hidden sm:inline text-[#E2DFD5]">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#C59B27]" />
              <span>Trusted Sourcing</span>
            </div>
            <span className="hidden sm:inline text-[#E2DFD5]">•</span>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#C59B27]" />
              <span>Export-Ready Logistics</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

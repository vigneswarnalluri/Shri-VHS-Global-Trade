"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

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
      
      {/* Custom Generated Indian Agricultural Commodities Background Photo */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="absolute inset-0 -top-24 will-change-transform pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/images/hero-bg.png"
          alt="Indian Agricultural Export Produce & Spices"
          className="h-[120%] w-full object-cover object-center"
        />
      </motion.div>

      {/* Top-Heavy Fade Mask: High opacity white fade at top, reducing smoothly down towards bottom */}
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
          {/* Refined Editorial Eyebrow Label */}
          <motion.div variants={contentItem}>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] text-[#0D3B2E] uppercase">
              <span>MERCHANT EXPORTER</span>
              <span className="text-[#C59B27]">•</span>
              <span>HYDERABAD, INDIA</span>
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

          {/* Premium Editorial Text Link CTAs */}
          <motion.div
            variants={contentItem}
            className="mt-9 flex flex-row items-center justify-center gap-8 sm:gap-10"
          >
            {/* Primary Action: Editorial Text Link with Muted Gold Underline Accent */}
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 py-1 text-sm sm:text-base font-semibold text-[#0D3B2E] transition-colors"
            >
              <span className="relative">
                Explore Products
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#C59B27]/80 transition-all duration-300 group-hover:bg-[#C59B27]" />
              </span>
              <span className="text-[#C59B27] text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>

            {/* Secondary Action: Visually Lighter Editorial Text Action */}
            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center gap-1.5 py-1 text-sm sm:text-base font-medium text-[#0D3B2E]/90 hover:text-[#0D3B2E] transition-colors"
            >
              <span className="relative">
                Request a Quote
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C59B27] transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="text-[#C59B27] text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>
          </motion.div>

        </motion.div>

      </div>

      {/* Repositioned Editorial Trust Line with High Contrast */}
      <div className="relative z-10 pb-10 flex justify-center px-4">
        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            variants={contentItem}
            className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0D3B2E]"
          >
            <span>QUALITY-FOCUSED SUPPLY</span>
            <span className="text-[#C59B27]">•</span>
            <span>EXPORT-READY</span>
            <span className="text-[#C59B27]">•</span>
            <span>GLOBAL DELIVERY</span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

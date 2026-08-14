"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonGroup9 } from "@/components/ui/button-group-9";

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
    <section className="relative isolate min-h-screen min-h-svh w-full overflow-hidden bg-[#FAFAF7] font-sans text-[#0F1F1A] antialiased border-b border-[#E2DFD5] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8">

      {/* Custom Generated Indian Agricultural Commodities Background Photo */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="absolute inset-0 -top-24 will-change-transform pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.png"
          alt="Indian Agricultural Export Produce & Spices"
          fill
          priority
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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-6">

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

          {/* ButtonGroup9 Hero Action CTA */}
          <motion.div
            variants={contentItem}
            className="mt-9 flex justify-center"
          >
            <ButtonGroup9
              items={[
                {
                  label: "Explore Products",
                  icon: ArrowRight,
                  href: "#products",
                  variant: "primary",
                },
                {
                  label: "Request a Quote",
                  icon: ArrowUpRight,
                  onClick: onOpenQuote,
                  variant: "secondary",
                },
              ]}
            />
          </motion.div>

          {/* Editorial Trust Line placed directly under CTAs */}
          <motion.div
            variants={contentItem}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0D3B2E]"
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

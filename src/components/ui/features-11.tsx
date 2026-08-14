"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  HeartHandshake, 
  Globe2 
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Features11Props {
  className?: string;
}

const defaultFeatures: FeatureCardItem[] = [
  {
    id: "quality",
    number: "01",
    title: "Verified Export-Grade Quality",
    description:
      "No more sorting surprises or inconsistent batches. Every consignment undergoes multi-tier physical, moisture, and lab inspections before dispatch.",
    icon: ShieldCheck,
  },
  {
    id: "sourcing",
    number: "02",
    title: "Direct Farmgate Sourcing",
    description:
      "Transparent origin pricing and verified farming collective partnerships, because authentic produce should come with full supply chain traceability.",
    icon: HeartHandshake,
  },
  {
    id: "logistics",
    number: "03",
    title: "Friction-Free Global Delivery",
    description:
      "Complete phytosanitary clearances, export documentation, and sea/air freight logistics so your cargo arrives seamlessly on schedule.",
    icon: Globe2,
  },
];

export const Features11: React.FC<Features11Props> = ({ className = "" }) => {
  return (
    <section className={cn("relative isolate overflow-hidden bg-[#FAFAF7] text-[#0F1F1A] py-20 sm:py-24 lg:py-28 border-b border-[#E2DFD5]", className)}>
      
      {/* Soft Ambient Radial Light Glow with gentle drift */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] bg-[radial-gradient(ellipse_at_center,rgba(197,155,39,0.07)_0%,transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-16">
          
          {/* Left: Large Editorial Statement */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.08] text-[#0F1F1A]"
            >
              Because sourcing from India <br className="hidden sm:block" />
              shouldn&apos;t be{" "}
              <motion.span
                className="inline-block font-serif italic font-normal text-[#C59B27]"
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.15, duration: 0.6, type: "spring" }}
              >
                this
              </motion.span>{" "}
              <br />
              <motion.span
                className="relative inline-block font-serif italic font-normal text-[#0D3B2E]"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.25, duration: 0.6, type: "spring" }}
              >
                complicated
                {/* Subtle Golden Underline Animation */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#C59B27]/60 origin-left rounded-full"
                />
              </motion.span>
            </motion.h2>
          </div>

          {/* Right: Clean Editorial Supporting Paragraph */}
          <div className="lg:col-span-4 lg:pb-2">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#4A5D56] leading-relaxed font-normal"
            >
              We&apos;ve experienced agricultural supply bottlenecks firsthand, so we built a direct, transparent pipeline from Indian farmgates to global ports.
            </motion.p>
          </div>

        </div>

        {/* 3 Horizontal Workflow / Feature Cards with Direct Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {defaultFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 55, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.14,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#E2DFD5] p-7 sm:p-8 shadow-[0_4px_20px_-4px_rgba(13,59,46,0.04)]"
              >
                <div>
                  {/* Top Row: Icon on left, index on right */}
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D3B2E]/[0.05] border border-[#0D3B2E]/10 text-[#0D3B2E] transition-all duration-300 group-hover:bg-[#0D3B2E] group-hover:text-[#E5C365] group-hover:border-[#0D3B2E] group-hover:scale-105 shadow-xs">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <span className="text-xs font-mono font-semibold text-[#7A8E87] select-none">
                      {feature.number}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F1F1A] mb-2.5 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-xs sm:text-sm text-[#4A5D56] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features11;

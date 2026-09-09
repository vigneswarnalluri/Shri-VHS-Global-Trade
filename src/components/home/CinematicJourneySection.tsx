"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  Video,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

interface StagePoint {
  title: string;
  desc: string;
}

interface StageItem {
  id: string;
  num: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: StagePoint[];
  tag: string;
  statBadge: { value: string; label: string };
  image: string;
  hasVideo?: boolean;
}

const STAGES: StageItem[] = [
  {
    id: "source",
    num: "01",
    tabLabel: "SOURCE",
    eyebrow: "STAGE 01 • ORIGIN PROCUREMENT",
    title: "Direct Farm-Gate Sourcing",
    subtitle: "Direct procurement from India's fertile agricultural belts",
    description:
      "We partner directly with Farmer Producer Organizations (FPOs) and verified regional growers across Maharashtra, Andhra Pradesh, and Gujarat. By sourcing at farm-gate, we eliminate unnecessary middlemen, ensuring farm freshness, direct traceability, and fair producer pricing.",
    keyPoints: [
      {
        title: "Direct Farm Partnerships",
        desc: "Long-term procurement contracts with regional farm clusters for steady seasonal supply.",
      },
      {
        title: "Pre-Harvest Soil & MRL Audits",
        desc: "Soil testing and residue monitoring to comply with strict international buyer standards.",
      },
      {
        title: "Synchronized Harvesting",
        desc: "Crops harvested at peak physiological maturity to maximize stability during international transit.",
      },
    ],
    tag: "Origin Procurement",
    statBadge: { value: "100%", label: "Traceable to Origin" },
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    hasVideo: true,
  },
  {
    id: "select",
    num: "02",
    tabLabel: "SELECT",
    eyebrow: "STAGE 02 • QUALITY SELECTION",
    title: "Rigorous Quality Grading & Audit",
    subtitle: "Zero-tolerance multi-parameter export inspection",
    description:
      "Every batch undergoes rigorous quality grading upon arrival at our staging facilities. Trained inspectors and automated sorters evaluate crop size, color uniformity, moisture levels, and cosmetic purity to meet strict export market parameters.",
    keyPoints: [
      {
        title: "Dual Optical & Manual Inspection",
        desc: "Trained manual sorting combined with optical sizing ensures completely blemish-free batches.",
      },
      {
        title: "Laboratory Moisture & Brix Testing",
        desc: "Certified testing for moisture percentage, sugar Brix levels, and absence of foreign matter.",
      },
      {
        title: "Export Grade-A Sorting",
        desc: "Only produce fulfilling export grade criteria is approved for packaging and international shipping.",
      },
    ],
    tag: "Quality Assurance",
    statBadge: { value: "Grade A", label: "Export Standard" },
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "prepare",
    num: "03",
    tabLabel: "PREPARE",
    eyebrow: "STAGE 03 • PROCESSING & SANITATION",
    title: "Hygienic Sorting & Phytosanitary Prep",
    subtitle: "Processed in certified, temperature-controlled facilities",
    description:
      "Produce is prepared in clean, modern processing hubs adhering to HACCP and ISO food safety protocols. Steps include gentle sanitizing wash cycles, controlled dehumidification, sizing, and phytosanitary treatments required by destination quarantine authorities.",
    keyPoints: [
      {
        title: "Clean Facility Handling",
        desc: "Hygienic processing environments maintaining strict hygiene and cross-contamination prevention.",
      },
      {
        title: "Custom Cut, Sizing & Waxing",
        desc: "Tailored to buyer specifications including food-grade protective waxing for perishable produce.",
      },
      {
        title: "Phytosanitary Pre-Inspection",
        desc: "Pre-cleared with APEDA and national plant quarantine authorities for seamless customs entry.",
      },
    ],
    tag: "Certified Facilities",
    statBadge: { value: "ISO & APEDA", label: "Process Compliance" },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "pack",
    num: "04",
    tabLabel: "PACK",
    eyebrow: "STAGE 04 • EXPORT PACKAGING",
    title: "Engineered Export-Grade Packaging",
    subtitle: "Built to withstand long ocean voyages and multi-modal transit",
    description:
      "Packaging is engineered specifically for global transit conditions. We use high-strength 5-ply corrugated cartons, food-grade polypropylene bags, vacuum liners, and ethylene absorbers, all palletized with edge protectors and moisture-proof stretch wrap.",
    keyPoints: [
      {
        title: "Heavy-Duty Corrugated Cartons",
        desc: "5-ply ventilated master cartons with reinforced corners preventing crushing under stack pressure.",
      },
      {
        title: "Modified Atmosphere Liners",
        desc: "Ethylene gas scavengers and breathable liners to prevent premature ripening during transit.",
      },
      {
        title: "Palletized & Shrink-Wrapped",
        desc: "Standardized fumigated wooden and plastic pallets loaded for safe forklift handling.",
      },
    ],
    tag: "Transit Packaging",
    statBadge: { value: "5-Ply", label: "Reinforced Cartons" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "ship",
    num: "05",
    tabLabel: "SHIP",
    eyebrow: "STAGE 05 • GLOBAL LOGISTICS",
    title: "Cold-Chain Transit & Ocean Freight",
    subtitle: "Temperature-logged reefer containers and direct port routing",
    description:
      "From origin facilities to premier Indian ports—including Nhava Sheva (JNPT), Chennai, and Mundra—our shipments travel in calibrated refrigerated containers. Continuous digital telematics monitor temperature and relative humidity throughout the sea voyage.",
    keyPoints: [
      {
        title: "IoT Temperature Loggers",
        desc: "Continuous real-time temperature and relative humidity tracking from packing to final arrival.",
      },
      {
        title: "Direct Port Gateways",
        desc: "Strategic logistics dispatch via India's top container terminals minimizing port dwell time.",
      },
      {
        title: "Tier-1 Carrier Allocations",
        desc: "Contracted cargo vessel space with premier shipping lines ensuring prompt sailing schedules.",
      },
    ],
    tag: "Reefer Cold-Chain",
    statBadge: { value: "24/7", label: "Telematics Monitored" },
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "deliver",
    num: "06",
    tabLabel: "DELIVER",
    eyebrow: "STAGE 06 • DESTINATION DELIVERY",
    title: "Destination Arrival & Final Handover",
    subtitle: "Connecting Indian harvest reliably to international buyers",
    description:
      "Upon berthing at destination ports across the Middle East, Southeast Asia, Europe, and North America, our logistics partners assist with rapid customs clearance, health inspections, and final delivery sign-off to importers, distributors, and food processors.",
    keyPoints: [
      {
        title: "Complete Documentation Package",
        desc: "Original Bill of Lading, Phytosanitary Certificate, Certificate of Origin, and SGS inspection reports.",
      },
      {
        title: "Rapid Port Clearance Support",
        desc: "Proactive coordination with consignee clearing agents to release cargo without port demurrage.",
      },
      {
        title: "Long-Term Supply Contracts",
        desc: "Reliable recurring shipment programs with flexible Incoterms (FOB, CIF, CFR) tailored to buyer needs.",
      },
    ],
    tag: "Destination Delivery",
    statBadge: { value: "Global", label: "Port Reach" },
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200",
  },
];

export const CinematicJourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentStage = STAGES[activeIndex];

  // Auto-play cycle through stages if enabled
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STAGES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % STAGES.length);
  };

  const handleSelectStage = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(idx);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <section
      id="export-journey"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF7] text-[#0F1F1A] border-y border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B27]">
              EXPORT SUPPLY CHAIN • 6-STAGE PIPELINE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#0F1F1A] leading-tight">
            How We Deliver Quality to the World
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A5D56] leading-relaxed">
            From direct farm procurement across India to destination ports globally,
            explore our transparent, quality-assured export lifecycle.
          </p>
        </div>

        {/* 6-Stage Timeline Tabs */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 sm:gap-3">
            {STAGES.map((stage, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleSelectStage(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                    isActive
                      ? "bg-[#0D3B2E] text-white border-[#0D3B2E] shadow-md shadow-[#0D3B2E]/15 scale-[1.02]"
                      : "bg-white text-stone-600 border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`h-5 w-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-colors ${
                      isActive
                        ? "bg-[#C59B27] text-white"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {stage.num}
                  </span>
                  <span>{stage.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Balanced Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Rich Stage Details Card (Zero Overlays, Clean White Surface) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-sm flex flex-col justify-between min-h-[520px]">
              
              <div>
                {/* Top Badge & Stage Index */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C59B27]/10 text-[#C59B27] text-[11px] font-mono font-bold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentStage.eyebrow}
                  </span>

                  <span className="text-xs font-mono font-semibold text-stone-400">
                    STAGE {currentStage.num} OF {STAGES.length.toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3B2E] tracking-tight mb-2">
                  {currentStage.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-[#C59B27] mb-4">
                  {currentStage.subtitle}
                </p>

                {/* Main Narrative */}
                <p className="text-sm sm:text-base text-[#4A5D56] leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                {/* Key Operational Highlights */}
                <div className="space-y-3.5 pt-4 border-t border-stone-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Operational Highlights
                  </p>
                  {currentStage.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 text-[#0D3B2E]">
                        <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-[#0F1F1A] block">
                          {point.title}
                        </span>
                        <span className="text-xs text-stone-500 leading-snug block">
                          {point.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation & Controls */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                
                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Stage"
                    className="p-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 transition-colors shadow-sm cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Stage"
                    className="p-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 transition-colors shadow-sm cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="ml-2 text-xs font-mono text-stone-500 font-medium">
                    {activeIndex + 1} / {STAGES.length}
                  </span>
                </div>

                {/* Auto-Play Toggle & Action */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                      isAutoPlaying
                        ? "bg-[#C59B27]/10 text-[#C59B27] border-[#C59B27]/30"
                        : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3" />
                        <span>Auto-playing</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3" />
                        <span>Auto-play</span>
                      </>
                    )}
                  </button>

                  <a
                    href="/#products"
                    className="text-xs font-bold text-[#0D3B2E] hover:text-[#C59B27] transition-colors underline underline-offset-4"
                  >
                    View Products &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: High-Definition Media Viewport (ZERO OVERLAYS - Pure Natural Clarity) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-100 aspect-[16/11] sm:aspect-[16/10] w-full">
              
              {/* The Media (Video or Crisp Image) — NO DARK OVERLAYS, NO GRADIENT MASKS */}
              <AnimatePresence mode="wait">
                {currentStage.hasVideo && showVideo ? (
                  <motion.div
                    key="video-display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/videos/hero-poster.jpg"
                      className="w-full h-full object-cover object-center"
                    >
                      <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    </video>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentStage.id + "-image"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentStage.image}
                      alt={currentStage.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority={activeIndex === 0}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Discreet Top Floating Bar (Crisp Solid Chips, NOT Darkening the Photo) */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/95 text-[#0D3B2E] text-[11px] font-bold tracking-wider uppercase shadow-sm border border-stone-200/60 pointer-events-auto backdrop-blur-sm">
                  {currentStage.tag}
                </span>

                {/* Media Switcher / Video Controls (If Video Available) */}
                {currentStage.hasVideo && (
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={() => setShowVideo((prev) => !prev)}
                      className="px-2.5 py-1 rounded-full bg-white/95 text-stone-700 text-xs font-semibold shadow-sm border border-stone-200/60 hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer backdrop-blur-sm"
                      title={showVideo ? "Switch to Photo View" : "Switch to Video View"}
                    >
                      {showVideo ? (
                        <>
                          <ImageIcon className="w-3 h-3 text-[#C59B27]" />
                          <span>Photo</span>
                        </>
                      ) : (
                        <>
                          <Video className="w-3 h-3 text-[#0D3B2E]" />
                          <span>Video</span>
                        </>
                      )}
                    </button>

                    {showVideo && (
                      <button
                        onClick={toggleVideoPlay}
                        className="p-1.5 rounded-full bg-white/95 text-stone-700 shadow-sm border border-stone-200/60 hover:bg-stone-50 transition-colors cursor-pointer backdrop-blur-sm"
                        aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                      >
                        {isVideoPlaying ? (
                          <Pause className="w-3 h-3 text-stone-800" />
                        ) : (
                          <Play className="w-3 h-3 text-stone-800" />
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Discreet Bottom-Right Stat Pill */}
              <div className="absolute bottom-4 right-4 pointer-events-none">
                <div className="bg-white/95 px-3.5 py-1.5 rounded-xl shadow-md border border-stone-200/70 backdrop-blur-sm">
                  <div className="text-xs font-bold text-[#0D3B2E]">
                    {currentStage.statBadge.value}
                  </div>
                  <div className="text-[10px] text-stone-500 font-medium">
                    {currentStage.statBadge.label}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CinematicJourneySection;

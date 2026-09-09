"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonGroup9 } from "@/components/ui/button-group-9";

interface HeroProps {
  onOpenQuote?: () => void;
}

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

export const Hero: React.FC<HeroProps> = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check user prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Handle video autoplay & pause based on reduced motion
  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented by browser policy; poster image remains clean fallback
          });
        }
      }
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative isolate min-h-screen min-h-svh w-full overflow-hidden bg-[#07241C] font-sans antialiased flex flex-col justify-center pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12">

      {/* 1. Background Video & Static Poster Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* High-quality static poster fallback: Visible before video loads, if video fails, or when reduced motion is preferred */}
        <Image
          src="/images/hero-poster.webp"
          alt="Shri VHS Global Trade Agricultural Farmland"
          fill
          priority
          sizes="100vw"
          className={`h-full w-full object-cover object-center transition-opacity duration-1000 ${
            isVideoLoaded && !prefersReducedMotion && !videoError ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Cinematic Semantic Background Video */}
        {!prefersReducedMotion && !videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.webp"
            aria-hidden="true"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* 2. Sophisticated Dark Gradient Overlay System */}
      {/* Top Header Scrim: Smooth dark gradient so floating navigation pill & top bar sit elegantly */}
      <div
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#07241C]/90 via-[#07241C]/65 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Full Section Ambient Scrim: Deep emerald-charcoal balance keeping video visible yet text razor-sharp */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#07241C]/80 via-[#07241C]/60 to-[#07241C]/85 pointer-events-none"
        aria-hidden="true"
      />

      {/* Center Radial Soft Glow Vignette for Headline Contrast */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,36,28,0.30)_0%,rgba(7,36,28,0.72)_75%,rgba(5,26,20,0.92)_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom Smooth Transition to #FAFAF7 (blends seamlessly into next section) */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#FAFAF7] via-[#FAFAF7]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Balanced Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-6">

        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto flex w-full max-w-[820px] flex-col items-center text-center -translate-y-8 sm:-translate-y-11 md:-translate-y-14"
        >
          {/* Main Editorial Headline */}
          <motion.h1
            variants={contentItem}
            className="font-serif text-[clamp(2.15rem,4.4vw,5rem)] leading-[1.06] font-bold tracking-tight text-balance text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
          >
            Connecting Indian Agriculture to{" "}
            <span className="text-[#E5C365] italic underline decoration-[#C59B27] decoration-2 underline-offset-8">
              Global Markets
            </span>
          </motion.h1>

          {/* Supporting Subline */}
          <motion.p
            variants={contentItem}
            className="mt-4 sm:mt-5 max-w-[560px] text-[clamp(0.95rem,1.25vw,1.15rem)] leading-[1.45] font-normal text-pretty text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
          >
            Supplying quality agricultural products from India to global markets with reliability and trust.
          </motion.p>

          {/* ButtonGroup9 Hero Action CTA */}
          <motion.div
            variants={contentItem}
            className="mt-6 sm:mt-7 flex justify-center relative z-20"
          >
            <ButtonGroup9
              items={[
                {
                  label: "Explore Products",
                  icon: ArrowRight,
                  href: "/#products",
                  variant: "primary",
                },
                {
                  label: "Request a Quote",
                  icon: ArrowUpRight,
                  href: "/quote",
                  variant: "secondary",
                },
              ]}
            />
          </motion.div>

          {/* Editorial Trust Line placed directly under CTAs */}
          <motion.div
            variants={contentItem}
            className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
          >
            <span>QUALITY-FOCUSED SUPPLY</span>
            <span className="text-[#E5C365]">•</span>
            <span>EXPORT-READY</span>
            <span className="text-[#E5C365]">•</span>
            <span>GLOBAL DELIVERY</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

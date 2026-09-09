"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface StageConfig {
  id: string;
  num: string;
  name: string;
  stepLabel: string;
  heading: string;
  description: string;
  videoSrc: string;
  start: number;
  end: number;
}

const STAGES: StageConfig[] = [
  {
    id: "source",
    num: "01",
    name: "SOURCE",
    stepLabel: "01 / SOURCE",
    heading: "FARM-LEVEL SOURCING",
    description: "From India's agricultural heartlands.",
    videoSrc: "/videos/journey/01-source.mp4",
    start: 0.0,
    end: 0.1667,
  },
  {
    id: "select",
    num: "02",
    name: "SELECT",
    stepLabel: "02 / SELECT",
    heading: "QUALITY SELECTION",
    description: "Careful inspection and grading of agricultural produce.",
    videoSrc: "/videos/journey/02-select.mp4",
    start: 0.1667,
    end: 0.3333,
  },
  {
    id: "prepare",
    num: "03",
    name: "PREPARE",
    stepLabel: "03 / PREPARE",
    heading: "EXPORT PREPARATION",
    description: "Produce prepared for international markets.",
    videoSrc: "/videos/journey/03-prepare.mp4",
    start: 0.3333,
    end: 0.5,
  },
  {
    id: "pack",
    num: "04",
    name: "PACK",
    stepLabel: "04 / PACK",
    heading: "EXPORT-READY PACKAGING",
    description: "Prepared for secure global transit.",
    videoSrc: "/videos/journey/04-pack.mp4",
    start: 0.5,
    end: 0.6667,
  },
  {
    id: "ship",
    num: "05",
    name: "SHIP",
    stepLabel: "05 / SHIP",
    heading: "GLOBAL LOGISTICS",
    description: "Coordinated movement from origin to destination.",
    videoSrc: "/videos/journey/05-ship.mp4",
    start: 0.6667,
    end: 0.8333,
  },
  {
    id: "deliver",
    num: "06",
    name: "DELIVER",
    stepLabel: "06 / DELIVER",
    heading: "GLOBAL DELIVERY",
    description: "Indian agriculture reaching international markets.",
    videoSrc: "/videos/journey/06-deliver.mp4",
    start: 0.8333,
    end: 1.0,
  },
];

export const CinematicJourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStageRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Eagerly preload all videos for instant seekability
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.load();
      }
    });
  }, []);

  // Scroll tracking and video scrubbing loop
  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    let isIntersecting = false;
    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !rafId) {
          rafId = requestAnimationFrame(renderLoop);
        }
      },
      { root: null, rootMargin: "200px 0px 200px 0px", threshold: 0 }
    );

    observer.observe(container);

    const calculateProgress = (): number => {
      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return 0;
      return Math.max(0, Math.min(1, -rect.top / totalScrollable));
    };

    const renderLoop = () => {
      if (!isIntersecting) {
        rafId = null;
        return;
      }

      const progress = calculateProgress();

      // Determine active stage based on progress
      let currentStageIdx = 0;
      for (let i = 0; i < STAGES.length; i++) {
        if (progress >= STAGES[i].start && progress < STAGES[i].end) {
          currentStageIdx = i;
          break;
        }
      }
      if (progress >= 0.8333) {
        currentStageIdx = 5;
      }

      // Only trigger React state update when active stage changes!
      if (currentStageIdx !== activeStageRef.current) {
        activeStageRef.current = currentStageIdx;
        setActiveStageIndex(currentStageIdx);
      }

      // Control video.currentTime of active stage
      const activeConfig = STAGES[currentStageIdx];
      const stageProgress = Math.max(
        0,
        Math.min(1, (progress - activeConfig.start) / (activeConfig.end - activeConfig.start))
      );

      const activeVideo = videoRefs.current[currentStageIdx];
      if (activeVideo && activeVideo.duration && !isNaN(activeVideo.duration) && activeVideo.duration > 0) {
        const targetTime = Math.max(
          0,
          Math.min(activeVideo.duration - 0.05, stageProgress * activeVideo.duration)
        );
        if (Math.abs(activeVideo.currentTime - targetTime) > 0.03) {
          activeVideo.currentTime = targetTime;
        }
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  const currentStage = STAGES[activeStageIndex];

  return (
    <section
      ref={containerRef}
      id="export-journey"
      aria-label="Indian Agricultural Export Journey"
      className="relative z-20 min-h-[600vh] w-full bg-black text-white select-none shadow-[0_-25px_60px_rgba(0,0,0,0.85)] border-t border-white/10"
    >
      {/* Sticky Full-Screen, Full-Width Viewport (No Padding, Edge-to-Edge) */}
      <div className="sticky top-0 h-screen h-svh w-full overflow-hidden">
        
        {/* Full Section Width & Height Videos with Seamless Crossfade */}
        {STAGES.map((stage, idx) => {
          const isActive = activeStageIndex === idx;
          return (
            <video
              key={stage.id}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              playsInline
              muted
              preload="auto"
              src={stage.videoSrc}
              aria-label={`${stage.name}: ${stage.heading}`}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            />
          );
        })}

        {/* Minimal Subtle Lower-Left Gradient for Text Contrast Only (Preserves 90% of Video Clarity) */}
        <div
          className="absolute bottom-0 left-0 w-full sm:w-[650px] h-[350px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.35)_50%,transparent_80%)] pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Floating Active Stage Subtitle (Lower-Left) */}
        <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-6 sm:left-12 lg:left-16 z-30 max-w-xl pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Step Label: e.g. 01 / SOURCE */}
              <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#E5C365] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-1 sm:mb-2">
                {currentStage.stepLabel}
              </div>

              {/* Stage Heading */}
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                {currentStage.heading}
              </h3>

              {/* Stage Description */}
              <p className="mt-2.5 text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] max-w-lg">
                {currentStage.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>



      </div>

      {/* Accessible Screen Reader Content */}
      <div className="sr-only">
        <h2>From India to the World: Export Supply Chain</h2>
        {STAGES.map((s) => (
          <article key={s.id}>
            <h3>{s.stepLabel}: {s.heading}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CinematicJourneySection;

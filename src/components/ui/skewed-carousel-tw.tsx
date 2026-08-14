"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SkewedCarouselItem {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount?: number;
  tag?: string;
  href?: string;
}

export interface SkewedCarouselProps {
  items: SkewedCarouselItem[];
  initialIndex?: number;
  cardWidth?: number;
  cardHeight?: number;
  rotation?: number;
  inactiveScale?: number;
  perspective?: number;
  showTitles?: boolean;
  showControls?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  onSelect?: (item: SkewedCarouselItem) => void;
}

export const SkewedCarousel: React.FC<SkewedCarouselProps> = ({
  items,
  initialIndex = 0,
  cardWidth = 310,
  cardHeight = 420,
  rotation = 20,
  inactiveScale = 0.88,
  perspective = 1200,
  showTitles = true,
  showControls = true,
  showDots = true,
  autoplay = true,
  autoplayInterval = 5000,
  className = "",
  onSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = items.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay support
  useEffect(() => {
    if (!autoplay || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Calculate circular offset
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative w-full flex flex-col items-center justify-center overflow-hidden py-6 select-none",
        className
      )}
      style={{ perspective: `${perspective}px` }}
    >
      {/* 3D Carousel Stage */}
      <div 
        className="relative w-full flex items-center justify-center"
        style={{ height: `${cardHeight + 40}px` }}
      >
        {items.map((item, idx) => {
          const offset = getOffset(idx);
          const isCurrent = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // Generous horizontal spacing so cards never look crowded
          const xOffset = offset * (cardWidth * 0.82);
          const rotateY = -offset * rotation;
          const scale = isCurrent ? 1 : Math.pow(inactiveScale, Math.abs(offset));
          const opacity = isCurrent ? 1 : Math.abs(offset) === 1 ? 0.75 : 0.35;
          const zIndex = 30 - Math.abs(offset) * 5;

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                x: xOffset,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 20,
                mass: 0.8,
              }}
              drag={isCurrent ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40 || info.velocity.x < -300) {
                  nextSlide();
                } else if (info.offset.x > 40 || info.velocity.x > 300) {
                  prevSlide();
                }
              }}
              onClick={() => {
                if (!isCurrent) {
                  goToSlide(idx);
                } else if (onSelect) {
                  onSelect(item);
                }
              }}
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transformStyle: "preserve-3d",
              }}
              className={cn(
                "group absolute cursor-pointer rounded-3xl overflow-hidden bg-[#FAFAF7] border-2 border-[#E2DFD5] transition-colors duration-300 hover:border-[#C59B27] shadow-[0_12px_28px_-8px_rgba(0,0,0,0.12)]"
              )}
            >
              {/* Minimal Clean Card Content */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                  priority={isCurrent}
                />

                {/* Subtle, Light Glass Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Top Subtle Variety Badge */}
                {item.itemCount && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#0D3B2E] shadow-xs">
                      {item.itemCount} Varieties
                    </span>
                  </div>
                )}

                {/* Top Right Action Arrow */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="h-7 w-7 rounded-full flex items-center justify-center bg-white/30 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#C59B27] group-hover:text-white group-hover:scale-105 shadow-xs">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                  </div>
                </div>

                {/* Bottom Minimal Category Title */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white">
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white leading-tight">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Active Category Description (Outside the card to keep cards completely clean & uncluttered) */}
      {showTitles && activeItem && (
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-center max-w-md px-4"
        >
          <p className="text-xs sm:text-sm text-[#4A5D56] leading-relaxed">
            {activeItem.description}
          </p>
        </motion.div>
      )}

      {/* Navigation Controls: Arrows & Indicators */}
      {showControls && (
        <div className="mt-5 flex items-center justify-center gap-3.5 z-20">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Category"
            className="h-10 w-10 rounded-full bg-white border border-[#E2DFD5] text-[#0D3B2E] flex items-center justify-center shadow-xs hover:bg-[#0D3B2E] hover:text-white hover:border-[#0D3B2E] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots Indicator */}
          {showDots && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2DFD5] shadow-xs">
              {items.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to category ${dotIdx + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-300 cursor-pointer",
                    dotIdx === activeIndex
                      ? "h-2 w-5 bg-[#0D3B2E]"
                      : "h-2 w-2 bg-gray-300 hover:bg-[#C59B27]"
                  )}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Category"
            className="h-10 w-10 rounded-full bg-white border border-[#E2DFD5] text-[#0D3B2E] flex items-center justify-center shadow-xs hover:bg-[#0D3B2E] hover:text-white hover:border-[#0D3B2E] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SkewedCarousel;

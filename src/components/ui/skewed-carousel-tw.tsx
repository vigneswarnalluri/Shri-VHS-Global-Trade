"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
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
  cardWidth = 350,
  cardHeight = 460,
  rotation = 24,
  inactiveScale = 0.86,
  perspective = 1200,
  showTitles = true,
  showControls = true,
  showDots = true,
  autoplay = true,
  autoplayInterval = 4000,
  className = "",
  onSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const total = items.length;
  const cardSpacing = cardWidth * 0.82;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay support (paused on hover)
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
        "relative w-full flex flex-col items-center justify-center overflow-hidden py-4 select-none",
        className
      )}
      style={{ perspective: `${perspective}px` }}
    >
      {/* 3D Hardware-Accelerated Draggable Stage */}
      <motion.div
        className="relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        style={{ height: `${cardHeight + 40}px` }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={(_, info) => {
          const threshold = 35;
          const velocityThreshold = 200;

          // Proportional multi-card slide calculation on large drag or fast flick
          const offsetCards = -info.offset.x / cardSpacing;
          const velocityCards = -info.velocity.x / 700;
          const totalMoved = Math.round(offsetCards + velocityCards);

          if (totalMoved !== 0) {
            setActiveIndex((prev) => ((prev + totalMoved) % total + total) % total);
          } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
            nextSlide();
          } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
            prevSlide();
          }

          setTimeout(() => {
            isDraggingRef.current = false;
          }, 80);
        }}
      >
        {items.map((item, idx) => {
          const offset = getOffset(idx);
          const isCurrent = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          const xOffset = offset * cardSpacing;
          const rotateY = -offset * rotation;
          const scale = isCurrent ? 1 : Math.pow(inactiveScale, Math.abs(offset));
          const opacity = isCurrent ? 1 : Math.abs(offset) === 1 ? 0.78 : 0.35;
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
                stiffness: 220,
                damping: 24,
                mass: 0.7,
              }}
              onClick={(e) => {
                if (isDraggingRef.current) {
                  e.preventDefault();
                  return;
                }
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
                "group absolute rounded-3xl overflow-hidden bg-[#182C25] border-2 transition-all duration-300 transform-gpu will-change-transform pointer-events-auto",
                isCurrent
                  ? "cursor-pointer border-[#C59B27] shadow-[0_18px_36px_-8px_rgba(0,0,0,0.18)] hover:-translate-y-2 hover:shadow-[0_24px_48px_-10px_rgba(197,155,39,0.3)] hover:ring-4 hover:ring-[#C59B27]/25"
                  : "cursor-grab border-[#E2DFD5] shadow-[0_12px_28px_-8px_rgba(0,0,0,0.12)] hover:border-[#C59B27]/70 hover:opacity-90"
              )}
            >
              {/* Card Content */}
              <div className="relative w-full h-full pointer-events-none select-none overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  className={cn(
                    "object-cover object-center pointer-events-none select-none transition-transform duration-500 ease-out",
                    isCurrent ? "group-hover:scale-108" : "group-hover:scale-104"
                  )}
                  priority={isCurrent}
                  draggable={false}
                />

                {/* Scrim Gradient */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300 pointer-events-none",
                    isCurrent
                      ? "bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90"
                      : "bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                  )}
                />

                {/* Top Variety Badge */}
                {item.itemCount && (
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-[#0D3B2E] transition-all duration-300",
                        isCurrent
                          ? "bg-white/95 shadow-sm group-hover:bg-white group-hover:shadow-md"
                          : "bg-white/90 shadow-xs"
                      )}
                    >
                      {isCurrent && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27] animate-pulse" />
                      )}
                      {item.itemCount} Varieties
                    </span>
                  </div>
                )}

                {/* Top Right Action Arrow */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <div
                    className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-xs",
                      isCurrent
                        ? "bg-white/40 text-white group-hover:bg-[#C59B27] group-hover:text-white group-hover:scale-110 group-hover:rotate-45 group-hover:shadow-md"
                        : "bg-white/25 text-white/90 group-hover:bg-white/40"
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Minimal Category Title */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white pointer-events-none">
                  <h3
                    className={cn(
                      "font-serif text-xl font-bold tracking-tight text-white leading-tight drop-shadow-sm transition-colors duration-300",
                      isCurrent ? "group-hover:text-[#F8F1DE]" : ""
                    )}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Active Category Description */}
      {showTitles && activeItem && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-4 text-center max-w-md px-4"
          >
            <p className="text-xs sm:text-sm text-[#4A5D56] leading-relaxed">
              {activeItem.description}
            </p>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Navigation Controls */}
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

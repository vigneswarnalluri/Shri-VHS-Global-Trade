"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { X, Check } from "lucide-react";

function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden relative ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={text}
          initial={{ y: 6, opacity: 0, filter: "blur(2px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -6, opacity: 0, filter: "blur(2px)" }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
          className="inline-block whitespace-nowrap"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const spring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
  mass: 0.8,
};

type RunActionButtonProps = {
  onClick?: () => void;
  href?: string;
  className?: string;
};

export function RunActionButton({
  onClick,
  href = "/quote",
  className = "",
}: RunActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 1, label: "Preparing Desk" },
    { id: 2, label: "Fetching Rates" },
    { id: 3, label: "Opening Desk..." },
  ];

  const startAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (status !== "idle") return;
    setStatus("running");
    setCurrentStep(0);
  };

  const reset = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setStatus("idle");
    setCurrentStep(0);
  };

  useEffect(() => {
    if (status !== "running") return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          setStatus("done");
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [status, steps.length]);

  useEffect(() => {
    if (status === "done") {
      const timer = setTimeout(() => {
        if (onClick) {
          onClick();
        } else if (href) {
          window.location.href = href;
        }
        setStatus("idle");
        setCurrentStep(0);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [status, onClick, href]);

  const getWidth = () => {
    if (status === "running") return 175;
    if (status === "done") return 145;
    return isHovered ? 152 : 92;
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ width: getWidth() }}
        transition={spring}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex h-9 items-center justify-center overflow-hidden rounded-full shadow-sm transition-colors duration-200 select-none ${
          status === "running"
            ? "border border-dashed border-[#C59B27] bg-[#07241C] text-white"
            : status === "done"
            ? "bg-[#0D3B2E] text-white"
            : "bg-[#C59B27] text-white hover:bg-[#D4AF37]"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.button
              key="idle"
              type="button"
              onClick={startAction}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex w-full h-full items-center justify-center px-4 py-1.5 text-xs font-bold text-white whitespace-nowrap cursor-pointer outline-none tracking-wide"
            >
              <AnimatedText
                text={isHovered ? "Request a Quote" : "Quote"}
                className="text-xs font-bold text-white tracking-wide"
              />
            </motion.button>
          )}

          {status === "running" && (
            <motion.div
              key="running"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex w-full h-full items-center justify-between gap-2 px-3.5 py-1.5 whitespace-nowrap text-xs"
            >
              <AnimatedText
                text={steps[currentStep].label}
                className="text-[11.5px] font-semibold text-white tracking-tight"
              />

              <button
                type="button"
                onClick={reset}
                aria-label="Cancel action"
                className="ml-1 rounded-full bg-white/20 p-1 hover:bg-white/30 text-white shrink-0 cursor-pointer transition-colors"
              >
                <X className="h-3 w-3 text-white" />
              </button>
            </motion.div>
          )}

          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex w-full h-full items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white whitespace-nowrap"
            >
              <Check className="h-3.5 w-3.5 text-[#C59B27]" />
              <AnimatedText
                text="Opening Desk..."
                className="text-xs font-bold text-white tracking-wide"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default RunActionButton;

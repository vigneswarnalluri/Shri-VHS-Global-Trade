import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { X } from "lucide-react";

function AnimatedText({
  text,
  className,
  delayStep = 0.014,
}: {
  text: string;
  className?: string;
  delayStep?: number;
}) {
  const chars = text.split("");

  return (
    <span className={className} style={{ display: "inline-flex" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          style={{ display: "inline-flex", willChange: "transform" }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{
                y: 6,
                opacity: 0,
                scale: 0.8,
                filter: "blur(2px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -6,
                opacity: 0,
                scale: 0.8,
                filter: "blur(2px)",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                mass: 1,
                delay: i * delayStep,
              }}
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : undefined,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const spring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 22,
  mass: 0.8,
};

type RunActionButtonProps = {
  onClick?: () => void;
  className?: string;
};

export function RunActionButton({
  onClick,
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

  const startAction = () => {
    setStatus("running");
    setCurrentStep(0);
  };

  const reset = (e?: React.MouseEvent) => {
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
    }, 600);

    return () => clearInterval(interval);
  }, [status, steps.length]);

  useEffect(() => {
    if (status === "done") {
      const timer = setTimeout(() => {
        if (onClick) onClick();
        setStatus("idle");
        setCurrentStep(0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [status, onClick]);

  const getWidth = () => {
    if (status === "running") return 165;
    if (status === "done") return 140;
    return isHovered ? 150 : 80;
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ width: getWidth() }}
        transition={spring}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex h-9 items-center justify-center overflow-hidden rounded-full shadow-sm ${
          status === "running"
            ? "border border-dashed border-[#C59B27] bg-[#07241C] text-white"
            : status === "done"
            ? "bg-[#0D3B2E] text-white"
            : "bg-[#C59B27] text-white hover:bg-[#D4AF37]"
        }`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {status === "idle" && (
            <motion.button
              key="idle"
              type="button"
              onClick={startAction}
              initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              transition={spring}
              className="flex w-full items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap cursor-pointer outline-none"
            >
              <AnimatedText
                text={isHovered ? "Request a Quote" : "Quote"}
                className="text-xs font-semibold text-white tracking-wide"
              />
            </motion.button>
          )}

          {status === "running" && (
            <motion.div
              key="running"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              transition={spring}
              className="flex w-full items-center justify-between gap-2 px-3 py-1.5 whitespace-nowrap text-xs"
            >
              <AnimatedText
                text={steps[currentStep].label}
                className="text-[11px] font-medium text-white tracking-tight"
              />

              <motion.button
                type="button"
                onClick={reset}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={spring}
                className="ml-1 rounded-full bg-white/20 p-1 hover:bg-white/30 text-white shrink-0 cursor-pointer"
              >
                <X className="h-3 w-3 text-white" />
              </motion.button>
            </motion.div>
          )}

          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              transition={spring}
              className="flex w-full items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap"
            >
              <AnimatedText
                text="Opening Desk..."
                className="text-xs font-semibold text-white tracking-wide"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default RunActionButton;

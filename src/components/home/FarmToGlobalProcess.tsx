import React from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";

export const FarmToGlobalProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-[#0D3B2E] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Export Lifecycle"
          title="Farm-to-Global Process"
          description="A meticulous 7-stage quality control and export logistics workflow ensuring prime product integrity from farm harvest to ocean container delivery."
          align="center"
          theme="dark"
          className="mb-16"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((stepItem, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl p-6 border transition-all ${
                idx === 0 
                  ? "bg-white/15 border-[#C59B27]" 
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-serif font-bold text-[#C59B27]">
                  {stepItem.step}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-300 font-semibold px-2 py-0.5 rounded bg-white/10">
                  Stage {idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {stepItem.title}
              </h3>
              <p className="text-xs font-medium text-[#C59B27] mb-3">
                {stepItem.subtitle}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

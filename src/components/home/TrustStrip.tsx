import React from "react";
import { ShieldCheck, HeartHandshake, Sprout, Globe } from "lucide-react";
import { companyData } from "@/data/company";

export const TrustStrip: React.FC = () => {
  const icons = [
    <ShieldCheck key="1" className="h-6 w-6 text-[#C59B27]" />,
    <HeartHandshake key="2" className="h-6 w-6 text-[#C59B27]" />,
    <Sprout key="3" className="h-6 w-6 text-[#C59B27]" />,
    <Globe key="4" className="h-6 w-6 text-[#C59B27]" />
  ];

  return (
    <section className="bg-[#0D3B2E] text-white py-12 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="p-3 rounded-lg bg-white/10 shrink-0">
                {icons[idx]}
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

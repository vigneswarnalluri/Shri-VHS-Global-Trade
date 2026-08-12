import React from "react";
import { companyData } from "@/data/company";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2, Award, Truck, ShieldCheck, DollarSign, Package, Clock, Users } from "lucide-react";

export const WhyUs: React.FC = () => {
  const icons = [
    <Award key="1" className="h-5 w-5 text-[#C59B27]" />,
    <CheckCircle2 key="2" className="h-5 w-5 text-[#C59B27]" />,
    <ShieldCheck key="3" className="h-5 w-5 text-[#C59B27]" />,
    <Truck key="4" className="h-5 w-5 text-[#C59B27]" />,
    <DollarSign key="5" className="h-5 w-5 text-[#C59B27]" />,
    <Package key="6" className="h-5 w-5 text-[#C59B27]" />,
    <Clock key="7" className="h-5 w-5 text-[#C59B27]" />,
    <Users key="8" className="h-5 w-5 text-[#C59B27]" />
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FAFAF7] border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Company Value Proposition"
          title="Why Choose Shri VHS Global Trade?"
          description="Built on strict commercial discipline, direct agricultural origin sourcing, and committed international B2B client satisfaction."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-[#E2DFD5] p-6 hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-[#0D3B2E]/5 border border-[#0D3B2E]/10 flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>
                <h3 className="text-base font-bold text-[#0F1F1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A5D56] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2DFD5]/60 flex items-center text-[10px] uppercase tracking-wider text-[#C59B27] font-semibold">
                <span>Catalogue Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

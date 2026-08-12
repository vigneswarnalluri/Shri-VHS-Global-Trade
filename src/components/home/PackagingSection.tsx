import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Package, Box, Layers, Shield, Check } from "lucide-react";

interface PackagingSectionProps {
  onOpenQuote: () => void;
}

export const PackagingSection: React.FC<PackagingSectionProps> = ({ onOpenQuote }) => {
  const options = [
    {
      title: "Retail Packaging",
      icon: <Package className="h-6 w-6 text-[#C59B27]" />,
      desc: "Hygienically packed consumer units for supermarkets and retail distribution networks.",
      formats: ["100g / 200g / 500g Pouches", "1kg & 5kg Premium Packs", "1L & 5L PET Bottles"]
    },
    {
      title: "Wholesale Packaging",
      icon: <Box className="h-6 w-6 text-[#C59B27]" />,
      desc: "Sturdy commercial units designed for food service, processing plants, and commodity markets.",
      formats: ["10kg & 20kg Bags", "25kg Heavy-duty Bags", "15L & 20L Tins / Containers"]
    },
    {
      title: "Bulk Export Packaging",
      icon: <Layers className="h-6 w-6 text-[#C59B27]" />,
      desc: "Heavy-duty ocean-going bulk packaging engineered to withstand long transit cycles.",
      formats: ["50kg PP Bags & Woven Sacks", "1,000kg Jumbo Bags / FIBC", "Export Bale Packing (Cotton)", "Ventilated Carton Boxes (Fruits/Veg)"]
    },
    {
      title: "Custom Packaging",
      icon: <Shield className="h-6 w-6 text-[#C59B27]" />,
      desc: "Custom size options and specific outer bag specifications tailored to buyer destination port regulations.",
      formats: ["Custom Weight Bagging", "Moisture-barrier Liners", "Palletized Container Cargo"]
    }
  ];

  return (
    <section id="packaging" className="py-20 bg-white border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Export Readiness"
          title="Packaging Solutions"
          description="Products are packed according to precise commercial, wholesale, and export standards specified in our catalogue."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] p-6 hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-white border border-[#E2DFD5] shadow-sm flex items-center justify-center mb-4">
                  {opt.icon}
                </div>

                <h3 className="text-lg font-bold text-[#0F1F1A] mb-2">
                  {opt.title}
                </h3>
                <p className="text-xs text-[#4A5D56] leading-relaxed mb-4">
                  {opt.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-[#E2DFD5]">
                  <span className="text-[11px] font-semibold text-[#0D3B2E] block uppercase tracking-wide">
                    Supported Formats:
                  </span>
                  {opt.formats.map((fmt, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#4A5D56]">
                      <Check className="h-3.5 w-3.5 text-[#C59B27] shrink-0" />
                      <span>{fmt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2DFD5]">
                <button
                  onClick={onOpenQuote}
                  className="w-full text-center text-xs font-semibold text-[#0D3B2E] hover:text-[#C59B27] transition-colors"
                >
                  Specify Packaging Needs →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { Layers, PackageCheck, Sliders, FileSpreadsheet, ArrowRight } from "lucide-react";

interface B2BBuyerBannerProps {
  onOpenQuote: () => void;
}

export const B2BBuyerBanner: React.FC<B2BBuyerBannerProps> = ({ onOpenQuote }) => {
  const points = [
    {
      icon: <Layers className="h-5 w-5 text-[#C59B27]" />,
      title: "Bulk Commercial Supply",
      desc: "Order quantities tailored for container-load and wholesale commercial shipments."
    },
    {
      icon: <PackageCheck className="h-5 w-5 text-[#C59B27]" />,
      title: "Export Packaging",
      desc: "Hygienic PP bags, corrugated cartons, tins, and jumbo bags built for ocean transit."
    },
    {
      icon: <Sliders className="h-5 w-5 text-[#C59B27]" />,
      title: "Buyer Specifications",
      desc: "Custom size, moisture, and grade compliance matching destination market requirements."
    },
    {
      icon: <FileSpreadsheet className="h-5 w-5 text-[#C59B27]" />,
      title: "Quote-Based Orders",
      desc: "Transparent FOB and CIF pricing structure with formal commercial proforma quotes."
    }
  ];

  return (
    <section className="bg-[#FAFAF7] py-10 border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-white border border-[#E2DFD5] p-6 lg:p-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#E2DFD5]/60 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C59B27]">
                Designed for International Buyers & Importers
              </span>
              <h3 className="text-xl font-serif font-bold text-[#0F1F1A] mt-0.5">
                Streamlined B2B Agricultural Procurement
              </h3>
            </div>
            
            <button
              onClick={onOpenQuote}
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#0D3B2E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#165342] transition-colors"
            >
              <span>Submit B2B Inquiry</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#C59B27]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#0D3B2E]/5 border border-[#0D3B2E]/10 shrink-0">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1F1A] mb-1">{pt.title}</h4>
                  <p className="text-xs text-[#4A5D56] leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

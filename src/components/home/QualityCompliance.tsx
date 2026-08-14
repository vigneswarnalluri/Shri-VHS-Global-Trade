import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck, CheckCircle } from "lucide-react";


export const QualityCompliance: React.FC = () => {
  const qualityPillars = [
    {
      title: "Stringent Selection & Inspection",
      desc: "Every raw crop batch undergoes physical testing for moisture, purity, seed size, color uniformity, and freedom from extraneous matter."
    },
    {
      title: "Hygienic Sort & Processing",
      desc: "Automated sortation and hygienic handling prevent contamination and ensure export-grade quality consistency."
    },
    {
      title: "Export Compliance & Phytosanitary Verification",
      desc: "All shipments comply with destination country plant quarantine, food safety standards, and international merchant export documentation."
    },
    {
      title: "Traceability & Origin Assurance",
      desc: "Direct farm-level traceability guarantees genuine Indian origin, authentic varietal purity, and ethical sourcing."
    }
  ];

  return (
    <section id="quality" className="py-20 bg-[#FAFAF7] border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Quality Control & Standards"
              title="Uncompromising Quality & International Compliance"
              description="At Shri VHS Global Trade, quality assurance is embedded into every operational step—from farm gate procurement to container seal inspection."
            />

            <div className="space-y-4 pt-2">
              {qualityPillars.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E2DFD5]">
                  <div className="h-7 w-7 rounded-md bg-[#0D3B2E]/10 flex items-center justify-center text-[#0D3B2E] shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-[#C59B27]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F1F1A]">{p.title}</h4>
                    <p className="text-xs text-[#4A5D56] mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Clean framework card for future official certificates */}
            <div className="rounded-2xl bg-white border border-[#E2DFD5] p-8 shadow-sm text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-[#0D3B2E]/5 border border-[#0D3B2E]/15 flex items-center justify-center text-[#0D3B2E] mb-4">
                <ShieldCheck className="h-8 w-8 text-[#C59B27]" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-[#0F1F1A]">
                Quality Assured Merchant Exporter
              </h3>
              <p className="text-xs text-[#4A5D56] max-w-md mx-auto mt-2 leading-relaxed">
                Shri VHS Global Trade adheres strictly to mandatory Indian merchant export regulations, phytosanitary requirements, and food safety protocols.
              </p>

              {/* Placeholder container where actual accredited certificates will be uploaded */}
              <div className="mt-8 pt-6 border-t border-dashed border-[#E2DFD5]">
                <span className="text-[11px] font-semibold text-[#7A8E87] uppercase tracking-wider block mb-4">
                  Official Verification Framework
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                  <div className="p-3 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5] text-xs">
                    <span className="font-semibold text-[#0F1F1A] block">Phytosanitary</span>
                    <span className="text-[10px] text-[#4A5D56]">Quarantine Certification</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5] text-xs">
                    <span className="font-semibold text-[#0F1F1A] block">Certificate of Origin</span>
                    <span className="text-[10px] text-[#4A5D56]">Chamber Issued</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5] text-xs col-span-2 sm:col-span-1">
                    <span className="font-semibold text-[#0F1F1A] block">Lab Testing</span>
                    <span className="text-[10px] text-[#4A5D56]">Purity & Moisture Audit</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

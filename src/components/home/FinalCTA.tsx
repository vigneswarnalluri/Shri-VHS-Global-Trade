import React from "react";
import { Phone } from "lucide-react";
import { companyData } from "@/data/company";

interface FinalCTAProps {
  onOpenQuote?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = () => {
  return (
    <section id="contact" className="py-20 bg-[#FAFAF7] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-[#0D3B2E] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#C59B27]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Looking for a Reliable Agricultural Export Partner from India?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Tell us what you need and our export team in Hyderabad will get back to you with custom packaging, lead times, and competitive FOB/CIF quotation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/quote"
              className="w-full sm:w-auto btn-geometric-wipe px-7 py-3.5 text-xs sm:text-sm rounded-none shadow-md"
            >
              <span>Request a Quote</span>
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto btn-geometric-wipe-light px-7 py-3.5 text-xs sm:text-sm rounded-none"
            >
              <span>Visit Contact Desk Page</span>
            </a>

            <a
              href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto btn-geometric-wipe-light px-6 py-3.5 text-xs sm:text-sm gap-2 rounded-none"
            >
              <Phone className="h-4 w-4 btn-icon text-[#C59B27]" />
              <span>{companyData.contact.phone}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
            <span>Shri VHS Global Trade Private Limited</span>
            <span>•</span>
            <span>Hyderabad, Telangana, India</span>
            <span>•</span>
            <span>{companyData.contact.website}</span>
          </div>

        </div>

      </div>
    </section>
  );
};

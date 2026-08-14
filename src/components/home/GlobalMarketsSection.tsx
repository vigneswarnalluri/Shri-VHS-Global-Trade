import React from "react";
import { Globe, Ship, Compass, ArrowRight } from "lucide-react";


interface GlobalMarketsProps {
  onOpenQuote: () => void;
}

export const GlobalMarketsSection: React.FC<GlobalMarketsProps> = ({ onOpenQuote }) => {
  return (
    <section id="markets" className="py-20 bg-[#07241C] text-white border-b border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Globe className="h-4 w-4 text-[#C59B27]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B27]">
              International Logistics & Trade
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Connecting Indian agricultural products with buyers across global markets.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            We provide seamless merchant export solutions for international food importers, wholesale distributors, supermarket networks, and institutional buyers worldwide.
          </p>
        </div>

        {/* Trade Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] mb-4">
              <Ship className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Sea & Port Freight Logistics</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Export shipments coordinated through major Indian ports with complete container stuffing, customs clearance, and bill of lading documentation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] mb-4">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">FOB & CIF Export Terms</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Flexible shipping terms tailored to buyer preferences, offering FOB Indian ports or CIF destination port deliveries.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] mb-4">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Transparent Commercial Desk</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Real-time order tracking, dedicated account coordination, and clear communication throughout the shipping transit timeline.
            </p>
          </div>

        </div>

        {/* Global Buyer Action Banner */}
        <div className="rounded-xl bg-white/10 border border-white/15 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Importing to your region?</h4>
            <p className="text-xs text-gray-300">Submit your port requirement and order quantities for an immediate export quote.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#C59B27] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#D4AF37] transition-colors"
          >
            <span>Inquire for Global Import</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

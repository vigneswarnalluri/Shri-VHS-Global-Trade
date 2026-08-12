import React from "react";
import { companyData } from "@/data/company";
import { SectionHeading } from "../ui/SectionHeading";
import { MapPin, Phone, Mail, Globe, CheckCircle2, ShieldCheck } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-[#E2DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="About Our Company"
              title="Shri VHS Global Trade Private Limited"
              description={companyData.description}
            />

            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5] space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C59B27]">
                Our Corporate Vision
              </h4>
              <p className="text-sm text-[#0F1F1A] font-serif italic leading-relaxed">
                "{companyData.vision}"
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-[#0F1F1A]">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5]">
                <MapPin className="h-4 w-4 text-[#C59B27]" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5]">
                <Phone className="h-4 w-4 text-[#C59B27]" />
                <span>+91 70958 51852</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2DFD5] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000"
                alt="Agricultural Sourcing India"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B2E]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27]">
                  Merchant Exporters from India
                </span>
                <h3 className="text-lg font-serif font-bold">
                  Direct Sourcing • International Compliance • Global Delivery
                </h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

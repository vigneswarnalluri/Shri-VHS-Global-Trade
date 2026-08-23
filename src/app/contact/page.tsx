"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Anchor,
  ShieldCheck,
  Building2,
  Globe,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    inquiryType: "Commodity Procurement",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `VHS-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(ref);
    setIsSubmitted(true);
  };

  const directWhatsAppLink = `https://wa.me/917095851852?text=${encodeURIComponent(
    `Hello Shri VHS Global Trade Export Desk,\nI am contacting you regarding business inquiries on behalf of ${formData.companyName || "my company"}.\nName: ${formData.fullName || "Buyer"}\nEmail: ${formData.email || ""}\nInquiry: ${formData.inquiryType}`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#0F1F1A]">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36">
        
        {/* Editorial Top Section */}
        <section className="border-b border-[#E2DFD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27] block mb-3">
                  Direct Trade Correspondence
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-[1.1]">
                  Connect with our Export Desk.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#4A5D56] font-light leading-relaxed">
                  We collaborate with food importers, supermarket chains, and wholesale distributors worldwide, providing reliable agricultural supply directly from Indian origins.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D3B2E] px-6 py-3 text-xs font-semibold text-white hover:bg-[#165342] transition-colors shadow-sm"
                >
                  <span>Looking for Rates? Open Quote Sheet</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#C59B27]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Split Architecture */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Authentic Trade House Dossier (5 Cols) */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Feature Image with subtle caption */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E2DFD5] bg-gray-100 shadow-sm aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1000"
                  alt="Agricultural Export Dispatch - Shri VHS Global Trade"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C59B27] block mb-0.5">
                    Export Origin • Hyderabad, India
                  </span>
                  <p className="text-xs font-serif font-bold text-white">
                    Direct sourcing &amp; containerized sea shipments
                  </p>
                </div>
              </div>

              {/* Direct Communications Matrix */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D3B2E] mb-2">
                    Registered Corporate Office
                  </h3>
                  <div className="text-sm text-[#4A5D56] leading-relaxed">
                    <p className="font-semibold text-[#0F1F1A] text-base">{companyData.name}</p>
                    <p>{companyData.contact.address}, Telangana, India</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E2DFD5]">
                  <div>
                    <span className="text-xs text-[#7A8E87] block mb-1 font-medium">Direct Telephone Desk</span>
                    <a
                      href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-[#0F1F1A] hover:text-[#0D3B2E] transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs text-[#7A8E87] block mb-1 font-medium">Corporate Email</span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-sm font-bold text-[#0F1F1A] hover:text-[#0D3B2E] transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Action Button */}
                <div className="pt-2">
                  <a
                    href={directWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#0D3B2E] text-white hover:bg-[#165342] transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0">
                        <MessageCircle className="h-5 w-5 fill-current" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold block text-white">
                          WhatsApp Trade Desk
                        </span>
                        <span className="text-[11px] text-gray-300">
                          Direct chat with export coordination officer
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Port Gateways */}
                <div className="pt-6 border-t border-[#E2DFD5] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D3B2E] block">
                    Port Dispatch Terminals
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-xs text-[#4A5D56]">
                    <div className="p-2.5 rounded-lg bg-white border border-[#E2DFD5]">
                      <span className="font-semibold text-[#0F1F1A] block">JNPT (Nhava Sheva)</span>
                      <span className="text-[10px] text-[#7A8E87]">West Coast</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[#E2DFD5]">
                      <span className="font-semibold text-[#0F1F1A] block">Chennai Port</span>
                      <span className="text-[10px] text-[#7A8E87]">East Coast</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[#E2DFD5]">
                      <span className="font-semibold text-[#0F1F1A] block">Visakhapatnam</span>
                      <span className="text-[10px] text-[#7A8E87]">East Coast</span>
                    </div>
                  </div>
                </div>

                {/* Operating hours note */}
                <div className="text-xs text-[#7A8E87] flex items-center gap-2 pt-2">
                  <Clock className="h-3.5 w-3.5 text-[#0D3B2E]" />
                  <span>Operations: Monday through Saturday, 09:00 to 19:00 IST (UTC +5:30)</span>
                </div>

              </div>

            </div>

            {/* Right Column: Clean Form Workspace (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E2DFD5] p-8 sm:p-12 shadow-sm">
                
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E] mb-5">
                      <CheckCircle2 className="h-9 w-9 text-[#0D3B2E]" />
                    </div>

                    <span className="text-xs font-mono font-bold text-[#C59B27] uppercase tracking-wider block mb-1">
                      Inquiry ID #{referenceNumber}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F1A]">
                      Message Received
                    </h3>
                    <p className="mt-3 text-sm text-[#4A5D56] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Shri VHS Global Trade, <strong className="text-[#0F1F1A]">{formData.fullName}</strong>. Your correspondence has been routed to our commercial export officer.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={directWhatsAppLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat via WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full sm:w-auto rounded-xl border border-[#0D3B2E] px-6 py-3 text-xs font-semibold text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white transition-colors"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8 pb-6 border-b border-[#E2DFD5]">
                      <h2 className="text-2xl font-serif font-bold text-[#0F1F1A]">
                        Send a Message
                      </h2>
                      <p className="text-xs text-[#4A5D56] mt-1.5 leading-relaxed">
                        For specific container volumes, port destination pricing, or commodity samples, please fill in your details below.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Full Name & Designation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Johnathan Smith"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                            Designation / Department
                          </label>
                          <input
                            type="text"
                            placeholder="Procurement Manager"
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Company & Country */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                            Company / Entity Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Global Food Trading LLC"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                            Country / Discharge Region *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="United Arab Emirates / Germany"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                            Corporate Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="procurement@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                            Phone / WhatsApp (with country code) *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+971 50 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Inquiry Type Chips */}
                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-2">
                          Nature of Inquiry
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Commodity Procurement",
                            "Annual Supply Contract",
                            "Private Label Packaging",
                            "Sample Request",
                            "General Correspondence",
                          ].map((type) => {
                            const isSelected = formData.inquiryType === type;
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setFormData({ ...formData, inquiryType: type })}
                                className={`text-xs px-3.5 py-1.5 rounded-lg border transition-all ${
                                  isSelected
                                    ? "bg-[#0D3B2E] text-white border-[#0D3B2E] font-semibold"
                                    : "bg-[#FAFAF7] text-[#4A5D56] border-[#E2DFD5] hover:border-[#0D3B2E]"
                                }`}
                              >
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Order Specifications or Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please mention specific commodities (e.g. Basmati Rice, Red Chillies), target volumes in MT, discharge port, or packaging preferences..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-4 border-t border-[#E2DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-[11px] text-[#7A8E87]">
                          Protected under commercial non-disclosure protocols.
                        </span>

                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#0D3B2E] px-8 py-3 text-xs font-semibold text-white hover:bg-[#165342] transition-colors cursor-pointer shadow-sm"
                        >
                          <span>Send Commercial Inquiry</span>
                        </button>
                      </div>

                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

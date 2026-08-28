"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Package,
  Ship,
  Globe2,
  Building2,
  User,
  Mail,
  Phone,
  Layers,
  Clock,
  MessageCircle,
  FileSpreadsheet,
  Check,
  ChevronDown,
} from "lucide-react";
import { Product, productsData } from "@/data/products";
import { companyData } from "@/data/company";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

const INCOTERMS = [
  { id: "FOB", label: "FOB (Indian Ports)", desc: "Free on Board (JNPT/Chennai/Vizag)" },
  { id: "CIF", label: "CIF (Destination Port)", desc: "Cost, Insurance & Ocean Freight" },
  { id: "CFR", label: "CFR (Destination Port)", desc: "Cost & Ocean Freight" },
  { id: "EXW", label: "EXW (Hyderabad/Mill)", desc: "Ex-Works Factory/Warehouse" },
];

const QUANTITY_PRESETS = [
  "1 × 20ft FCL (~24-26 MT)",
  "1 × 40ft FCL (~27-28 MT)",
  "50+ MT Bulk Consignment",
  "Sample / Trial Air Shipment",
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
}) => {
  const [formData, setFormData] = useState({
    productName: selectedProduct?.name || productsData[0]?.name || "Basmati Rice",
    packaging: selectedProduct?.packaging[0] || "50kg Bulk PP/Jute Bags",
    quantity: "",
    incoterm: "CIF",
    destinationCountry: "",
    buyerName: "",
    companyName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProductObj = productsData.find((p) => p.name === formData.productName) || productsData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `VHS-EXP-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shri VHS Global Trade Export Desk,
I submitted an enquiry [Ref: ${referenceId || "Direct"}] for:
• Product: ${formData.productName}
• Trade Term: ${formData.incoterm}
• Quantity: ${formData.quantity || "Full Container Load"}
• Packaging: ${formData.packaging}
• Destination: ${formData.destinationCountry || "Global Port"}
• Importer: ${formData.companyName || "B2B Buyer"} (${formData.buyerName})

Please provide the latest FOB/CIF commercial rate sheet.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Dark Ambient Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-[#07241C]/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white shadow-[0_25px_70px_-15px_rgba(7,36,28,0.45)] border border-[#C59B27]/30 overflow-hidden z-10 transition-all transform animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">

        {/* Luxury Emerald & Gold Header */}
        <div className="relative bg-gradient-to-r from-[#07241C] via-[#0D3B2E] to-[#124838] px-6 sm:px-8 py-5 text-white overflow-hidden shrink-0 border-b border-[#C59B27]/20">

          {/* Subtle Golden Glow / Ambient Sheen */}
          <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#C59B27]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[#165342]/40 blur-2xl pointer-events-none" />

          <div className="relative flex items-center justify-between gap-4">

            {/* Left Brand Identity */}
            <div className="flex items-center gap-4">
              <div className="relative bg-white/95 rounded-xl p-1.5 shadow-md ring-1 ring-[#C59B27]/40 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Shri VHS Global Trade"
                  width={140}
                  height={45}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#C59B27]/20 text-[#E8C568] border border-[#C59B27]/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Live B2B Export Desk
                  </span>
                  <span className="hidden sm:inline-block text-[11px] text-[#A3B8B0]">
                    Hyderabad, India
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5 tracking-tight flex items-center gap-2">
                  Request Commercial Export Quote
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="group rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/25 hover:text-white transition-all duration-200 hover:rotate-90 shrink-0 border border-white/10"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Micro Value Proposition Bar */}
          <div className="relative mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#A3B8B0]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#E8C568]">
                <Clock className="h-3 w-3" />
                Response within 2-4 business hours
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:flex items-center gap-1 text-white/80">
                <ShieldCheck className="h-3.5 w-3.5 text-[#25D366]" />
                APEDA & FSSAI Certified Shipments
              </span>
            </div>
            <span className="text-[10px] font-medium text-white/70 bg-white/10 px-2 py-0.5 rounded">
              Direct Mill & Farm Origin Rates
            </span>
          </div>
        </div>

        {/* Modal Body */}
        {submitted ? (
          /* ================= SUCCESS STATE ================= */
          <div className="p-6 sm:p-10 text-center overflow-y-auto">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0D3B2E] to-[#165342] text-white shadow-xl shadow-[#0D3B2E]/20 mb-5 ring-4 ring-[#C59B27]/30">
              <CheckCircle2 className="h-11 w-11 text-[#C59B27]" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E] text-xs font-bold uppercase tracking-wider mb-2">
              Enquiry Dispatched Successfully
            </span>

            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F1A]">
              Commercial RFQ Received
            </h4>

            <p className="mt-2 text-sm text-[#4A5D56] max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-[#0F1F1A]">{formData.buyerName || "Esteemed Buyer"}</strong>.
              Our international export desk at <span className="font-semibold text-[#0D3B2E]">Shri VHS Global Trade Private Limited</span> is computing your customized FOB/CIF pricing for <strong>{formData.productName}</strong>.
            </p>

            {/* Official Summary Card */}
            <div className="my-6 rounded-2xl bg-[#FAFAF7] border border-[#C59B27]/40 p-5 max-w-lg mx-auto text-left shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0D3B2E] text-[#C59B27] px-3 py-1 rounded-bl-xl text-[10px] font-mono font-bold tracking-wider">
                REF #{referenceId}
              </div>

              <div className="text-xs font-bold text-[#0D3B2E] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-[#C59B27]" />
                Enquiry Passport Summary
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-xs text-[#4A5D56]">
                <div>
                  <span className="text-[11px] text-[#7A8E87] block">Selected Commodity</span>
                  <span className="font-semibold text-[#0F1F1A]">{formData.productName}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#7A8E87] block">Trade Incoterm</span>
                  <span className="font-semibold text-[#0D3B2E] bg-[#0D3B2E]/10 px-2 py-0.5 rounded text-[11px]">
                    {formData.incoterm} Delivery
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-[#7A8E87] block">Target Quantity</span>
                  <span className="font-semibold text-[#0F1F1A]">{formData.quantity || "1× 20ft FCL Standard"}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#7A8E87] block">Destination Port</span>
                  <span className="font-semibold text-[#0F1F1A]">{formData.destinationCountry || "Global Ocean Port"}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#7A8E87] block">Packaging</span>
                  <span className="font-semibold text-[#0F1F1A]">{formData.packaging}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#7A8E87] block">Direct Officer Desk</span>
                  <span className="font-semibold text-[#0D3B2E]">{companyData.contact.phone}</span>
                </div>
              </div>
            </div>

            {/* Next Steps CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <a
                href={`https://wa.me/917095851852?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Instant WhatsApp Desk Chat</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#0D3B2E] px-6 py-3 text-xs font-bold text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white transition-all"
              >
                <span>Done & Return</span>
              </button>
            </div>
          </div>
        ) : (
          /* ================= ACTIVE ENQUIRY FORM ================= */
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">

            {/* Step / Section 1: Commodity Selection & Specifications */}
            <div className="rounded-2xl bg-[#FAFAF7] border border-[#E2DFD5] p-4 sm:p-5 transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0D3B2E] text-[11px] font-bold text-[#C59B27]">
                    1
                  </span>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3B2E]">
                    Commodity & Export Specification
                  </h4>
                </div>
                <span className="text-[11px] text-[#7A8E87] hidden sm:inline">
                  Step 1 of 2
                </span>
              </div>

              {/* Product Selector Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-start">

                {/* Product Dropdown */}
                <div className="sm:col-span-7">
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5 flex items-center justify-between">
                    <span>Selected Commodity *</span>
                    <span className="text-[10px] text-[#C59B27] font-semibold uppercase">
                      Category: {currentProductObj.category}
                    </span>
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Package className="h-4 w-4" />
                    </div>
                    <select
                      value={formData.productName}
                      onChange={(e) => {
                        const newProd = productsData.find((p) => p.name === e.target.value);
                        setFormData({
                          ...formData,
                          productName: e.target.value,
                          packaging: newProd?.packaging[0] || formData.packaging,
                        });
                      }}
                      required
                      className="w-full appearance-none rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-9 py-2.5 text-xs font-semibold text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all cursor-pointer"
                    >
                      {productsData.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} — {p.category}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#7A8E87]">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Packaging Specification */}
                <div className="sm:col-span-5">
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Packaging Specification *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Layers className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. 25kg / 50kg PP, Jute, Vacuum"
                      value={formData.packaging}
                      onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                      required
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Quick Packaging Chips */}
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] text-[#7A8E87] mr-1">Available for {formData.productName}:</span>
                {currentProductObj.packaging.map((pack) => (
                  <button
                    key={pack}
                    type="button"
                    onClick={() => setFormData({ ...formData, packaging: `${pack} Export Packing` })}
                    className={`text-[10px] px-2 py-0.5 rounded-md font-medium border transition-colors ${formData.packaging.includes(pack)
                        ? "bg-[#0D3B2E] text-[#C59B27] border-[#0D3B2E]"
                        : "bg-white text-[#4A5D56] border-[#E2DFD5] hover:border-[#0D3B2E] hover:text-[#0D3B2E]"
                      }`}
                  >
                    {pack}
                  </button>
                ))}
              </div>

              {/* Trade Incoterms Pills */}
              <div className="mt-4 pt-3.5 border-t border-[#E2DFD5]/80">
                <label className="block text-xs font-bold text-[#0F1F1A] mb-2 flex items-center gap-1.5">
                  <Ship className="h-3.5 w-3.5 text-[#C59B27]" />
                  <span>Preferred Trade & Delivery Incoterm (Incoterms 2020) *</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {INCOTERMS.map((term) => {
                    const isSelected = formData.incoterm === term.id;
                    return (
                      <button
                        key={term.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, incoterm: term.id })}
                        className={`text-left p-2.5 rounded-xl border transition-all ${isSelected
                            ? "bg-[#0D3B2E] border-[#0D3B2E] text-white shadow-sm ring-2 ring-[#C59B27]/40"
                            : "bg-white border-[#E2DFD5] text-[#0F1F1A] hover:border-[#0D3B2E]/50 hover:bg-[#FAFAF7]"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${isSelected ? "text-[#C59B27]" : "text-[#0D3B2E]"}`}>
                            {term.id}
                          </span>
                          {isSelected && <Check className="h-3.5 w-3.5 text-[#C59B27]" />}
                        </div>
                        <span className={`text-[10px] block mt-0.5 line-clamp-1 ${isSelected ? "text-gray-200" : "text-[#7A8E87]"}`}>
                          {term.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Quantity & Destination Port */}
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Target Order Volume / Container *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Package className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1 × 20ft Container (25 MT)"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Quantity quick picks */}
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {QUANTITY_PRESETS.slice(0, 2).map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: q })}
                        className="text-[9px] px-1.5 py-0.5 rounded bg-white border border-[#E2DFD5] text-[#4A5D56] hover:text-[#0D3B2E] hover:border-[#0D3B2E]"
                      >
                        + {q.split(" (")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Destination Country & Discharge Port *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Globe2 className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jebel Ali, Dubai UAE / Hamburg, Germany"
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>
                  <span className="text-[10px] text-[#7A8E87] mt-1 block">
                    Origin Port: Jawaharlal Nehru Port (JNPT) / Chennai / Vizag
                  </span>
                </div>
              </div>

            </div>

            {/* Step / Section 2: Buyer & Corporate Credentials */}
            <div className="rounded-2xl bg-[#FAFAF7] border border-[#E2DFD5] p-4 sm:p-5 transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0D3B2E] text-[11px] font-bold text-[#C59B27]">
                    2
                  </span>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3B2E]">
                    Buyer & Company Credentials
                  </h4>
                </div>
                <span className="text-[11px] text-[#7A8E87] hidden sm:inline">
                  Step 2 of 2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Authorized Representative Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Smith"
                      value={formData.buyerName}
                      onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Company / Importing Entity Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Global Agri Foods Trading LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                    Phone / WhatsApp (with country code) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#0D3B2E]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 234-5678 / +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[#E2DFD5] bg-white pl-10 pr-3 py-2.5 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Special Quality Specs / Notes */}
              <div className="mt-3.5">
                <label className="block text-xs font-bold text-[#0F1F1A] mb-1.5">
                  Specific Quality Grades, Certificate Requirements or Target Timelines (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify grain length, moisture levels, SGS inspection request, phytosanitary requirements, private labeling, or target dispatch dates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-[#E2DFD5] bg-white px-3.5 py-2 text-xs text-[#0F1F1A] shadow-xs focus:border-[#0D3B2E] focus:ring-2 focus:ring-[#C59B27]/30 focus:outline-none transition-all resize-none"
                />
              </div>

            </div>

            {/* Bottom Sticky Action Footer */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2DFD5]">

              {/* Trust Badges */}
              <div className="flex items-center gap-3 text-[11px] text-[#4A5D56]">
                <div className="flex items-center gap-1.5 bg-[#FAFAF7] border border-[#E2DFD5] px-2.5 py-1 rounded-lg">
                  <ShieldCheck className="h-4 w-4 text-[#0D3B2E]" />
                  <span className="font-semibold text-[#0F1F1A]">100% Commercial NDA</span>
                </div>
                <span className="hidden md:inline text-[#7A8E87]">
                  APEDA • FSSAI • Spices Board Compliant
                </span>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0D3B2E] via-[#124838] to-[#0D3B2E] hover:from-[#165342] hover:to-[#0D3B2E] text-white px-8 py-3 text-xs font-bold shadow-lg shadow-[#0D3B2E]/25 hover:shadow-xl hover:shadow-[#0D3B2E]/35 border border-[#C59B27]/40 hover:border-[#C59B27] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Submit Export Quote Request</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default QuoteModal;

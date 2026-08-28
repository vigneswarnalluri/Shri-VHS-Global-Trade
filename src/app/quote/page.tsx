"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  MessageCircle,
  Check,
  ChevronDown,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { productsData, Product } from "@/data/products";
import { companyData } from "@/data/company";

const INCOTERMS = [
  { id: "FOB", title: "FOB — Free on Board", desc: "Vessel loaded at Indian Port (JNPT Mumbai, Chennai, or Vizag)" },
  { id: "CIF", title: "CIF — Cost, Insurance & Freight", desc: "Delivered to your designated international ocean discharge port" },
  { id: "CFR", title: "CFR — Cost & Freight", desc: "Freight included to destination port (marine insurance by buyer)" },
  { id: "EXW", title: "EXW — Ex Works", desc: "Direct mill collection from Telangana / Andhra Pradesh origin" },
];

const CONTAINER_SIZES = [
  { label: "1 × 20' FCL", sub: "~24–26 MT Capacity" },
  { label: "1 × 40' FCL", sub: "~27–28 MT Capacity" },
  { label: "50+ MT Bulk", sub: "Multi-Container Consignment" },
  { label: "Trial / Sample Lot", sub: "LCL or Air Freight" },
];

function QuoteContent() {
  const searchParams = useSearchParams();
  const initialProductId = searchParams.get("product");

  const initialProduct = useMemo(() => {
    if (initialProductId) {
      const match = productsData.find(
        (p) => p.id === initialProductId || p.name.toLowerCase() === initialProductId.toLowerCase()
      );
      if (match) return match;
    }
    return productsData[0];
  }, [initialProductId]);

  const [formData, setFormData] = useState({
    productId: initialProduct.id,
    productName: initialProduct.name,
    gradeSpec: "Current Crop Export Quality",
    packaging: initialProduct.packaging[0] || "50kg PP Woven Bags",
    quantity: "1 × 20' FCL",
    incoterm: "CIF",
    destinationPort: "",
    shipmentTimeline: "Prompt (15–20 Days from LC/Advance)",
    companyName: "",
    buyerName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");

  const currentProduct = useMemo(() => {
    return productsData.find((p) => p.id === formData.productId) || productsData[0];
  }, [formData.productId]);

  const handleSelectProduct = (product: Product) => {
    setFormData((prev) => ({
      ...prev,
      productId: product.id,
      productName: product.name,
      packaging: product.packaging[0] || "Standard Export Packaging",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRfq = `VHS-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedRfq);
    setIsSubmitted(true);
    window.scrollTo({ top: 160, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shri VHS Global Trade Export Desk,
I am submitting a commercial RFQ [Ref: ${rfqNumber || "Direct"}]:
• Commodity: ${formData.productName} (${formData.gradeSpec})
• Incoterm: ${formData.incoterm} Delivery
• Container/Volume: ${formData.quantity}
• Packaging: ${formData.packaging}
• Discharge Port: ${formData.destinationPort || "Global Port"}
• Importer: ${formData.companyName} (${formData.buyerName})

Please provide a formal proforma quote.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#0F1F1A]">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36">

        {/* Editorial Top Section */}
        <section className="border-b border-[#E2DFD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27] block mb-3">
                  Commercial Proforma Inquiries
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0F1F1A] tracking-tight leading-[1.1]">
                  Request an Export Quotation.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#4A5D56] font-light leading-relaxed">
                  Specify your required agricultural commodities, container volume, and destination discharge port to receive current benchmark FOB/CIF proforma pricing.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#7A8E87] shrink-0 pb-1">
                <span>Origin Ports: JNPT • Chennai • Vizag</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Quotation Sheet Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

          {isSubmitted ? (
            /* ================= SUBMITTED PROFORMA SUMMARY ================= */
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#E2DFD5] p-8 sm:p-12 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E] mb-5">
                <CheckCircle2 className="h-9 w-9 text-[#0D3B2E]" />
              </div>

              <span className="text-xs font-mono font-bold text-[#C59B27] uppercase tracking-wider block mb-1">
                PROFORMA RFQ #{rfqNumber}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F1A]">
                Quotation Request Logged
              </h2>
              <p className="mt-3 text-sm text-[#4A5D56] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0F1F1A]">{formData.buyerName}</strong> ({formData.companyName}). Our trade officers in Hyderabad will prepare your customized commercial rate sheet for <strong>{formData.productName}</strong>.
              </p>

              {/* Summary Table */}
              <div className="my-8 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5] p-5 text-left text-xs space-y-2.5 text-[#4A5D56]">
                <div className="flex justify-between border-b border-[#E2DFD5] pb-2">
                  <span className="text-[#7A8E87]">Commodity &amp; Grade:</span>
                  <span className="font-semibold text-[#0F1F1A]">{formData.productName} ({formData.gradeSpec})</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DFD5] pb-2">
                  <span className="text-[#7A8E87]">Incoterm &amp; Port:</span>
                  <span className="font-bold text-[#0D3B2E]">{formData.incoterm} — {formData.destinationPort || "Global Ocean Port"}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2DFD5] pb-2">
                  <span className="text-[#7A8E87]">Order Volume &amp; Pack:</span>
                  <span className="font-semibold text-[#0F1F1A]">{formData.quantity} ({formData.packaging})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A8E87]">Direct Desk Hotline:</span>
                  <span className="font-semibold text-[#0F1F1A]">{companyData.contact.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917095851852?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Instant WhatsApp Follow-up</span>
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto rounded-xl border border-[#0D3B2E] px-6 py-3 text-xs font-semibold text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white transition-colors"
                >
                  Configure New Request
                </button>
              </div>
            </div>
          ) : (
            /* ================= ACTIVE PROCUREMENT SHEET ================= */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left Column: The Commercial RFQ Form (8 Cols) */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E2DFD5] p-8 sm:p-12 shadow-sm">

                <form onSubmit={handleSubmit} className="space-y-10">

                  {/* STAGE 1: Commodity Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD5]">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-[#C59B27]">01</span>
                        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0D3B2E]">
                          Commodity &amp; Cargo Specifications
                        </h2>
                      </div>
                      <span className="text-xs text-[#7A8E87]">{currentProduct.category}</span>
                    </div>

                    {/* Commodity Selection */}
                    <div className="space-y-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <label className="block text-xs font-semibold text-[#0F1F1A]">
                          Select Agricultural Commodity *
                        </label>
                        <span className="text-xs text-[#7A8E87]">
                          Currently Selected: <strong className="text-[#0D3B2E]">{currentProduct.name}</strong>
                        </span>
                      </div>

                      {/* Clean Prominent Grouped Dropdown */}
                      <div className="relative">
                        <select
                          value={formData.productId}
                          onChange={(e) => {
                            const selected = productsData.find((p) => p.id === e.target.value);
                            if (selected) handleSelectProduct(selected);
                          }}
                          className="w-full appearance-none rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] pl-4 pr-10 py-3 text-xs sm:text-sm font-semibold text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors cursor-pointer shadow-2xs"
                        >
                          <optgroup label="── RICE & GRAINS ──">
                            {productsData.filter(p => p.categoryId === "rice-grains").map(p => (
                              <option key={p.id} value={p.id}>
                                {p.name} {p.subtitle ? `— ${p.subtitle}` : ''}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="── SPICES & CONDIMENTS ──">
                            {productsData.filter(p => p.categoryId === "spices").map(p => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="── FRESH EXPORT FRUITS ──">
                            {productsData.filter(p => p.categoryId === "fresh-fruits").map(p => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="── FRESH VEGETABLES ──">
                            {productsData.filter(p => p.categoryId === "fresh-vegetables").map(p => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="── EDIBLE OILS ──">
                            {productsData.filter(p => p.categoryId === "edible-oils").map(p => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="── NATURAL & AGRICULTURAL PRODUCTS ──">
                            {productsData.filter(p => p.categoryId === "natural-agricultural").map(p => (
                              <option key={p.id} value={p.id}>
                                {p.name}
                              </option>
                            ))}
                          </optgroup>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#7A8E87]">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>

                      {/* 1-Tap Packaging Chips for the chosen product */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] text-[#7A8E87] mr-1">Standard Packaging Formats:</span>
                        {currentProduct.packaging.map((pack) => {
                          const isActive = formData.packaging.includes(pack);
                          return (
                            <button
                              key={pack}
                              type="button"
                              onClick={() => setFormData({ ...formData, packaging: `${pack} Export Packaging` })}
                              className={`text-[11px] px-2.5 py-1 rounded-md font-medium border transition-colors ${isActive
                                  ? "bg-[#0D3B2E] text-white border-[#0D3B2E]"
                                  : "bg-[#FAFAF7] text-[#4A5D56] border-[#E2DFD5] hover:border-[#0D3B2E]"
                                }`}
                            >
                              {pack}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Grade Spec & Packaging Format */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Grade / Processing Parameters
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 1121 Steam / Guntur S4 Stemless / 99% Pure"
                          value={formData.gradeSpec}
                          onChange={(e) => setFormData({ ...formData, gradeSpec: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Packaging Format *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 25kg / 50kg PP Bags, Jute, Jumbo Bags"
                          value={formData.packaging}
                          onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Quantity Container Presets */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1F1A] mb-2">
                        Target Consignment Volume *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {CONTAINER_SIZES.map((size) => {
                          const isSelected = formData.quantity === size.label;
                          return (
                            <button
                              key={size.label}
                              type="button"
                              onClick={() => setFormData({ ...formData, quantity: size.label })}
                              className={`text-left p-3 rounded-xl border transition-all ${isSelected
                                  ? "bg-[#0D3B2E] border-[#0D3B2E] text-white shadow-xs"
                                  : "bg-[#FAFAF7] border-[#E2DFD5] text-[#0F1F1A] hover:border-[#0D3B2E]"
                                }`}
                            >
                              <span className={`text-xs font-bold block ${isSelected ? "text-[#C59B27]" : "text-[#0F1F1A]"}`}>
                                {size.label}
                              </span>
                              <span className={`text-[10px] block mt-0.5 ${isSelected ? "text-gray-300" : "text-[#7A8E87]"}`}>
                                {size.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* STAGE 2: Logistics & Incoterms 2020 */}
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-[#E2DFD5]">
                      <span className="text-xs font-mono font-bold text-[#C59B27]">02</span>
                      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0D3B2E]">
                        Trade Delivery Terms &amp; Destination Port
                      </h2>
                    </div>

                    {/* Incoterms Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1F1A] mb-2">
                        Delivery Incoterm (ICC Incoterms 2020) *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {INCOTERMS.map((term) => {
                          const isSelected = formData.incoterm === term.id;
                          return (
                            <button
                              key={term.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, incoterm: term.id })}
                              className={`text-left p-3.5 rounded-xl border transition-all ${isSelected
                                  ? "bg-[#0D3B2E] border-[#0D3B2E] text-white shadow-xs"
                                  : "bg-[#FAFAF7] border-[#E2DFD5] text-[#0F1F1A] hover:border-[#0D3B2E]"
                                }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-bold ${isSelected ? "text-[#C59B27]" : "text-[#0D3B2E]"}`}>
                                  {term.title}
                                </span>
                                {isSelected && <Check className="h-4 w-4 text-[#C59B27]" />}
                              </div>
                              <span className={`text-[11px] block mt-1 leading-snug ${isSelected ? "text-gray-200" : "text-[#4A5D56]"}`}>
                                {term.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Destination Port & Shipment Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Destination Ocean Port &amp; Country *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Jebel Ali Port (UAE) / Rotterdam / Hamburg"
                          value={formData.destinationPort}
                          onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Target Shipment Window
                        </label>
                        <select
                          value={formData.shipmentTimeline}
                          onChange={(e) => setFormData({ ...formData, shipmentTimeline: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Prompt (15–20 Days from LC/Advance)">Prompt (15–20 Days from LC/Advance)</option>
                          <option value="Next Month Vessel Schedule">Next Month Vessel Schedule</option>
                          <option value="Quarterly Recurring Contract">Quarterly Recurring Contract</option>
                          <option value="Annual Supply Agreement">Annual Supply Agreement</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  {/* STAGE 3: Importer & Corporate Information */}
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-[#E2DFD5]">
                      <span className="text-xs font-mono font-bold text-[#C59B27]">03</span>
                      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0D3B2E]">
                        Importer &amp; Corporate Identification
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Company / Importing Entity Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Global Agri Foods Trading LLC"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Authorized Representative Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Johnathan Smith"
                          value={formData.buyerName}
                          onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                          className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                          Corporate Procurement Email *
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

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1F1A] mb-1.5">
                        Specific Lab Test Standards, Inspection (SGS/Intertek) or Packing Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention specific moisture limits, maximum broken grains %, phytosanitary specifications, or private label requirements..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full rounded-xl border border-[#E2DFD5] bg-[#FAFAF7] px-4 py-2.5 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:bg-white focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="pt-6 border-t border-[#E2DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#7A8E87]">
                      Proforma quotation computed from active Indian export market rates.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#0D3B2E] px-8 py-3.5 text-xs font-semibold text-white hover:bg-[#165342] transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Submit Export Quotation Request</span>
                    </button>
                  </div>

                </form>

              </div>

              {/* Right Column: Proforma Overview & Trade Desk (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">

                {/* Active Commodity Card */}
                <div className="bg-white rounded-2xl border border-[#E2DFD5] p-6 shadow-sm">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#0D3B2E] text-white">
                        {currentProduct.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0F1F1A]">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xs text-[#4A5D56] mt-1.5 leading-relaxed line-clamp-3">
                    {currentProduct.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E2DFD5] space-y-2 text-xs text-[#4A5D56]">
                    <div className="flex justify-between">
                      <span className="text-[#7A8E87]">Agricultural Origin:</span>
                      <span className="font-semibold text-[#0F1F1A]">Telangana / AP, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#7A8E87]">Ocean Port Terminals:</span>
                      <span className="font-semibold text-[#0F1F1A]">JNPT / Chennai / Vizag</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#7A8E87]">Quality Highlights:</span>
                      <span className="font-semibold text-[#0D3B2E]">{currentProduct.features.slice(0, 2).join(", ")}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Trade Desk Direct Link */}
                <div className="bg-[#0D3B2E] rounded-2xl text-white p-6 shadow-sm border border-white/10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C59B27] block mb-1">
                    Direct Trade Channel
                  </span>
                  <h3 className="text-base font-serif font-bold text-white mb-2">
                    Connect with Export Desk
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    For instant vessel loading schedules, packing samples, or spot rate confirmation, message our desk directly.
                  </p>
                  <a
                    href={`https://wa.me/917095851852?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-4 py-3 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {companyData.contact.phone}</span>
                  </a>
                </div>

                {/* Trade Terms Assurance */}
                <div className="bg-white rounded-2xl border border-[#E2DFD5] p-5 text-xs text-[#4A5D56] space-y-2.5">
                  <span className="font-semibold text-[#0F1F1A] block mb-1">
                    Commercial Trade Protocols:
                  </span>
                  <p>• Phytosanitary and Fumigation Certificates provided with every shipment.</p>
                  <p>• Third-party SGS / Bureau Veritas testing available prior to container stuffing.</p>
                  <p>• International payments accepted via Irrevocable L/C at sight or T/T.</p>
                </div>

              </div>

            </div>
          )}

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF7]" />}>
      <QuoteContent />
    </Suspense>
  );
}

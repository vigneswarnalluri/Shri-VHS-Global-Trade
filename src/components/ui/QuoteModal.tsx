"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, Globe, ShieldCheck } from "lucide-react";
import { Product, productsData } from "@/data/products";
import { companyData } from "@/data/company";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct
}) => {
  const [formData, setFormData] = useState({
    productName: selectedProduct?.name || productsData[0].name,
    packaging: selectedProduct?.packaging[0] || "Bulk Export Packaging",
    quantity: "",
    destinationCountry: "",
    buyerName: "",
    companyName: "",
    email: "",
    phone: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-[#E2DFD5]">
        {/* Header */}
        <div className="bg-[#0D3B2E] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold">
              B2B Export Enquiry
            </span>
            <h3 className="text-xl font-serif font-bold text-white mt-0.5">
              Request a Commercial Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E] mb-4">
              <CheckCircle2 className="h-10 w-10 text-[#0D3B2E]" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#0F1F1A]">
              Enquiry Received
            </h4>
            <p className="mt-2 text-sm text-[#4A5D56] max-w-md mx-auto">
              Thank you, <strong className="text-[#0F1F1A]">{formData.buyerName}</strong>. Our export desk at Shri VHS Global Trade (Hyderabad, India) will review your specifications for <strong>{formData.productName}</strong> and reply shortly.
            </p>

            <div className="my-6 rounded-xl bg-[#FAFAF7] border border-[#E2DFD5] p-4 max-w-md mx-auto text-left text-xs space-y-2 text-[#4A5D56]">
              <div className="flex justify-between border-b border-[#E2DFD5] pb-2">
                <span className="font-semibold text-[#0F1F1A]">Product:</span>
                <span>{formData.productName}</span>
              </div>
              <div className="flex justify-between border-b border-[#E2DFD5] pb-2">
                <span className="font-semibold text-[#0F1F1A]">Packaging:</span>
                <span>{formData.packaging}</span>
              </div>
              <div className="flex justify-between border-b border-[#E2DFD5] pb-2">
                <span className="font-semibold text-[#0F1F1A]">Destination:</span>
                <span>{formData.destinationCountry || "Global Export Market"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#0F1F1A]">Export Desk Direct:</span>
                <span className="font-bold text-[#0D3B2E]">{companyData.contact.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/917095851852?text=Hello%20Shri%20VHS%20Global%20Trade,%20I%20am%20interested%20in%20a%20quote%20for%20${encodeURIComponent(formData.productName)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                <span>Direct WhatsApp Inquiry</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto rounded-lg border border-[#0D3B2E] px-5 py-2.5 text-xs font-semibold text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Selected Product *
                </label>
                <select
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  required
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                >
                  {productsData.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Packaging Specification *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 25kg PP Bags / 50kg / Jumbo Bags"
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  required
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Target Quantity (MT / Kg / Container)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 x 20ft Container / 50 MT"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Destination Country / Port
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dubai, UAE / Hamburg, Germany"
                  value={formData.destinationCountry}
                  onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.buyerName}
                  onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Company Name / Importer
                </label>
                <input
                  type="text"
                  placeholder="Global Agri Trading LLC"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="importer@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                  Phone / WhatsApp (with country code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 555 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F1F1A] mb-1">
                Additional Requirements / Port Delivery Terms (FOB/CIF)
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific quality grades, shipping terms, or delivery timelines..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-lg border border-[#E2DFD5] bg-[#FAFAF7] px-3 py-2 text-xs text-[#0F1F1A] focus:border-[#0D3B2E] focus:outline-none resize-none"
              />
            </div>

            <div className="pt-3 border-t border-[#E2DFD5] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-[#7A8E87]">
                <ShieldCheck className="h-4 w-4 text-[#0D3B2E]" />
                <span>Direct B2B Export Counter Desk — Hyderabad</span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0D3B2E] px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#165342] transition-colors"
              >
                <span>Submit Export Quote Request</span>
                <Send className="h-3.5 w-3.5 text-[#C59B27]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

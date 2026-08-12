"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Globe, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";
import { Button } from "../ui/Button";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Our Process", href: "#process" },
    { label: "Quality & Compliance", href: "#quality" },
    { label: "Global Markets", href: "#markets" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#07241C] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#C59B27] font-medium">
              <MapPin className="h-3.5 w-3.5" />
              <span>Hyderabad, India</span>
            </span>
            <a 
              href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>{companyData.contact.phone}</span>
            </a>
            <a 
              href={`mailto:${companyData.contact.email}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1 text-[#C59B27] font-semibold">
              <Globe className="h-3 w-3" /> Merchant Exporter India
            </span>
            <span className="hidden lg:inline text-white/60">|</span>
            <span className="hidden lg:inline text-white/80">Quality Assured & Sustainable Sourcing</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#E2DFD5]" 
          : "bg-white py-4 border-b border-[#E2DFD5]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg bg-[#0D3B2E] flex items-center justify-center text-white shadow-sm group-hover:bg-[#165342] transition-colors">
              <span className="font-serif font-bold text-lg text-[#C59B27]">VHS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#0F1F1A] leading-tight">
                Shri VHS Global Trade
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#C59B27] font-semibold">
                Private Limited
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A5D56]">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#0D3B2E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C59B27] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary-gold"
              size="sm"
              onClick={onOpenQuote}
              icon={<ArrowRight className="h-3.5 w-3.5" />}
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-semibold bg-[#C59B27] text-white rounded"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F1F1A] hover:text-[#0D3B2E] rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E2DFD5] px-4 pt-2 pb-6 space-y-3">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#0F1F1A] hover:bg-[#FAFAF7] rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#E2DFD5]">
              <Button
                variant="primary-gold"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

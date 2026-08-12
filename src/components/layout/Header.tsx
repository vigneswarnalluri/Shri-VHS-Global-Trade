"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Globe, ChevronDown } from "lucide-react";
import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";
import { Button } from "../ui/Button";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Quality & Compliance", href: "#quality" },
    { label: "Global Markets", href: "#markets" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar - Simplified on Mobile */}
      <div className="bg-[#07241C] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left info: Phone prioritized on mobile */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 font-semibold text-[#C59B27] hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{companyData.contact.phone}</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/80">
              <MapPin className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>Hyderabad, India</span>
            </span>
            <a 
              href={`mailto:${companyData.contact.email}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>

          {/* Right info: Merchant Exporter tag on desktop */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1 text-white/90 font-medium">
              <Globe className="h-3 w-3 text-[#C59B27]" /> Merchant Exporter • India
            </span>
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
            <a href="#" className="hover:text-[#0D3B2E] transition-colors py-1">Home</a>
            <a href="#about" className="hover:text-[#0D3B2E] transition-colors py-1">About</a>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className="flex items-center gap-1.5 hover:text-[#0D3B2E] transition-colors py-1 focus:outline-none"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 text-[#C59B27] transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div 
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 mt-2 rounded-xl bg-white border border-[#E2DFD5] shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#C59B27] border-b border-[#E2DFD5]/60 mb-1">
                    Export Categories
                  </div>
                  {categoriesData.map((cat) => (
                    <a
                      key={cat.id}
                      href="#products"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#0F1F1A] hover:bg-[#FAFAF7] hover:text-[#0D3B2E] transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-[#7A8E87] bg-[#FAFAF7] px-1.5 py-0.5 rounded border border-[#E2DFD5]">
                        {cat.itemCount} items
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#process" className="hover:text-[#0D3B2E] transition-colors py-1">Our Process</a>
            <a href="#quality" className="hover:text-[#0D3B2E] transition-colors py-1">Quality & Compliance</a>
            <a href="#markets" className="hover:text-[#0D3B2E] transition-colors py-1">Global Markets</a>
            <a href="#contact" className="hover:text-[#0D3B2E] transition-colors py-1">Contact</a>
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

          {/* Mobile Actions: Phone & Quote prioritized */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-semibold bg-[#C59B27] text-white rounded shadow-sm"
            >
              Request Quote
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
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">About</a>
              
              <div className="px-3 py-2 text-xs font-semibold text-[#C59B27] uppercase tracking-wider">
                Product Categories
              </div>
              <div className="pl-4 space-y-1">
                {categoriesData.map((cat) => (
                  <a
                    key={cat.id}
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#4A5D56] hover:text-[#0D3B2E]"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>

              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Our Process</a>
              <a href="#quality" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Quality & Compliance</a>
              <a href="#markets" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Global Markets</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Contact</a>
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

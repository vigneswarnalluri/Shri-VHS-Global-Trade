"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  Menu,
  CheckCircle2,
  Package,
  Layers,
  Sprout,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";

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

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar - Simplified on Mobile */}
      <div className="bg-[#07241C] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left info: Phone & Location */}
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

          {/* Right info: Merchant Exporter tag */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1 text-white/90 font-medium">
              <Globe className="h-3 w-3 text-[#C59B27]" /> Merchant Exporter • India
            </span>
          </div>

        </div>
      </div>

      {/* Main Floating Pill Header (Watermelon Navigation-5 Inspired) */}
      <div className={cn("w-full py-3 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#E2DFD5]" : "bg-white border-b border-[#E2DFD5]")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          
          {/* Floating Pill Container */}
          <div className="flex h-16 w-full items-center justify-between gap-2 rounded-full border border-[#E2DFD5] bg-[#FAFAF7] pr-3 shadow-sm">
            
            {/* Logo Section */}
            <a href="#" className="flex items-center gap-3 pl-4 pr-4 group">
              <div className="h-9 w-9 rounded-full bg-[#0D3B2E] flex items-center justify-center text-white shadow-sm group-hover:bg-[#165342] transition-colors shrink-0">
                <span className="font-serif font-bold text-sm text-[#C59B27]">VHS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-[#0F1F1A] leading-tight">
                  Shri VHS Global Trade
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#C59B27] font-semibold">
                  Private Limited
                </span>
              </div>
            </a>

            {/* Desktop Navigation with Mega-Menu (Watermelon Navigation-5 Style) */}
            <div className="hidden lg:block">
              <NavigationMenu
                className={cn(
                  'static',
                  '[&>div:last-child]:inset-x-0 [&>div:last-child]:top-full [&>div:last-child]:w-full',
                  '[&_[data-slot=navigation-menu-viewport]]:mx-auto [&_[data-slot=navigation-menu-viewport]]:-mt-4 [&_[data-slot=navigation-menu-viewport]]:max-w-6xl',
                  '[&_[data-slot=navigation-menu-viewport]]:rounded-2xl [&_[data-slot=navigation-menu-viewport]]:border [&_[data-slot=navigation-menu-viewport]]:border-[#E2DFD5]',
                  '[&_[data-slot=navigation-menu-viewport]]:bg-white [&_[data-slot=navigation-menu-viewport]]:shadow-2xl'
                )}
              >
                <NavigationMenuList className="gap-1">
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-colors hover:text-[#0D3B2E] hover:bg-white"
                      href="#"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-colors hover:text-[#0D3B2E] hover:bg-white"
                      href="#about"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Mega Menu Trigger: Products */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-auto rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-all hover:bg-white hover:text-[#0D3B2E] data-[state=open]:bg-white data-[state=open]:text-[#0D3B2E]">
                      Products & Range
                    </NavigationMenuTrigger>
                    
                    <NavigationMenuContent className="p-0">
                      <div className="grid w-5xl grid-cols-4 gap-6 divide-x divide-[#E2DFD5]/60 px-8 py-8">
                        
                        {/* Col 1: Categories Overview */}
                        <div className="flex flex-col col-span-2 pr-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Sprout className="h-5 w-5 text-[#C59B27]" />
                            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0D3B2E]">
                              Export Categories
                            </h4>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {categoriesData.map((cat) => (
                              <a
                                key={cat.id}
                                href="#products"
                                className="group flex flex-col p-2.5 rounded-lg bg-[#FAFAF7] border border-[#E2DFD5]/80 hover:bg-[#0D3B2E] hover:text-white transition-all"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#0F1F1A] group-hover:text-white">
                                    {cat.name}
                                  </span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white text-[#0D3B2E] group-hover:bg-[#C59B27] group-hover:text-white font-semibold">
                                    {cat.itemCount}
                                  </span>
                                </div>
                                <span className="text-[10px] text-[#4A5D56] group-hover:text-gray-200 mt-1 line-clamp-1">
                                  {cat.description}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Col 2: Packaging Standards */}
                        <div className="flex flex-col gap-3 pl-4">
                          <h4 className="mb-1 text-xs uppercase tracking-wider font-bold text-[#C59B27]">
                            Export Formats
                          </h4>
                          <a href="#packaging" className="text-xs font-medium text-[#4A5D56] hover:text-[#0D3B2E] flex items-center gap-2">
                            <Package className="h-3.5 w-3.5 text-[#C59B27]" />
                            <span>Retail Packaging</span>
                          </a>
                          <a href="#packaging" className="text-xs font-medium text-[#4A5D56] hover:text-[#0D3B2E] flex items-center gap-2">
                            <Layers className="h-3.5 w-3.5 text-[#C59B27]" />
                            <span>Wholesale Units</span>
                          </a>
                          <a href="#packaging" className="text-xs font-medium text-[#4A5D56] hover:text-[#0D3B2E] flex items-center gap-2">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#C59B27]" />
                            <span>Bulk Container Freight</span>
                          </a>
                          <a href="#packaging" className="text-xs font-medium text-[#4A5D56] hover:text-[#0D3B2E] flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#C59B27]" />
                            <span>Custom Buyer Specs</span>
                          </a>
                        </div>

                        {/* Col 3: Featured B2B Card */}
                        <div className="flex flex-col pl-4">
                          <h4 className="mb-3 text-xs uppercase tracking-wider font-bold text-[#C59B27]">
                            B2B Counter
                          </h4>
                          <div
                            onClick={onOpenQuote}
                            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-4 border border-[#C59B27]/40 bg-[#0D3B2E] text-white hover:shadow-lg transition-all cursor-pointer"
                          >
                            <div>
                              <span className="text-[10px] font-semibold text-[#C59B27] uppercase tracking-wider block mb-1">
                                Commercial Desk
                              </span>
                              <h4 className="text-xs font-bold text-white mb-1">
                                Request Commercial Quote
                              </h4>
                              <p className="text-[11px] text-gray-300 leading-relaxed">
                                Get instant FOB/CIF export pricing for bulk orders from Hyderabad, India.
                              </p>
                            </div>

                            <div className="mt-3 flex items-center text-xs font-semibold text-[#C59B27] group-hover:text-white">
                              <span>Inquire Now</span>
                              <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-colors hover:text-[#0D3B2E] hover:bg-white"
                      href="#process"
                    >
                      Our Process
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-colors hover:text-[#0D3B2E] hover:bg-white"
                      href="#quality"
                    >
                      Quality
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-colors hover:text-[#0D3B2E] hover:bg-white"
                      href="#markets"
                    >
                      Global Markets
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#4A5D56] transition-colors hover:text-[#0D3B2E] hover:bg-white"
                      href="#contact"
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Action CTA Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenQuote}
                className="hidden md:flex items-center gap-2 rounded-full bg-[#C59B27] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#D4AF37] transition-all"
              >
                <span>Request a Quote</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={onOpenQuote}
                  className="px-3 py-1.5 text-xs font-semibold bg-[#C59B27] text-white rounded-full shadow-sm sm:hidden"
                >
                  Quote
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-[#0F1F1A] hover:text-[#0D3B2E] rounded-full focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E2DFD5] px-4 pt-2 pb-6 space-y-3 mt-2">
            <div className="flex flex-col space-y-2 pt-2">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">About</a>
              
              <div className="px-3 py-2 text-xs font-semibold text-[#C59B27] uppercase tracking-wider">
                Export Categories
              </div>
              <div className="pl-4 space-y-1">
                {categoriesData.map((cat) => (
                  <a
                    key={cat.id}
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-[#4A5D56] hover:text-[#0D3B2E]"
                  >
                    {cat.name} ({cat.itemCount} items)
                  </a>
                ))}
              </div>

              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Our Process</a>
              <a href="#quality" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Quality & Compliance</a>
              <a href="#markets" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Global Markets</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium text-[#0F1F1A]">Contact</a>
            </div>

            <div className="pt-3 border-t border-[#E2DFD5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#C59B27] px-5 py-2.5 text-xs font-semibold text-white shadow-sm"
              >
                <span>Request a Quote</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

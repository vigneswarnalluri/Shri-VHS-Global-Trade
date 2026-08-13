"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  X,
  ChevronDown,
  CheckCircle2,
  Package,
  Layers,
  Sprout,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";
import { RunActionButton } from "@/components/ui/run-action-button";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("z-40 w-full transition-all duration-300", isScrolled ? "fixed top-0 left-0 right-0 shadow-md bg-white/95 backdrop-blur-md border-b border-[#E2DFD5]" : "absolute top-0 left-0 right-0 bg-transparent")}>
      {/* Top Bar */}
      <div className={cn("text-xs py-2 px-4 border-b transition-colors duration-300", isScrolled ? "bg-[#07241C] text-white/90 border-white/10" : "bg-[#07241C]/90 backdrop-blur-md text-white/90 border-white/10")}>
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

      {/* Main Navigation Pill (Seamless Translucent Integration into Hero Composition) */}
      <div className="w-full py-3.5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">

          {/* Translucent Seamless Floating Pill */}
          <div className={cn("flex h-16 w-full items-center justify-between gap-3 rounded-full pr-3.5 transition-all duration-300", isScrolled ? "bg-white/90 border border-[#E2DFD5] shadow-xs" : "bg-white/40 backdrop-blur-md border border-white/40 shadow-none")}>

            {/* Logo Section */}
            <a href="#" className="flex items-center pl-3.5 sm:pl-5 pr-3 group">
              <img
                src="/logo.png"
                alt="Shri VHS Global Trade Logo"
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
              />
            </a>

            {/* Desktop Navigation with Mega-Menu */}
            <div className="hidden lg:block">
              <NavigationMenu
                className={cn(
                  'static',
                  '[&>div:last-child]:inset-x-0 [&>div:last-child]:top-full [&>div:last-child]:w-full',
                  '[&_[data-slot=navigation-menu-viewport]]:mx-auto [&_[data-slot=navigation-menu-viewport]]:mt-4 [&_[data-slot=navigation-menu-viewport]]:max-w-6xl',
                  '[&_[data-slot=navigation-menu-viewport]]:rounded-2xl [&_[data-slot=navigation-menu-viewport]]:border [&_[data-slot=navigation-menu-viewport]]:border-[#E2DFD5]/80',
                  '[&_[data-slot=navigation-menu-viewport]]:bg-white/95 [&_[data-slot=navigation-menu-viewport]]:backdrop-blur-xl [&_[data-slot=navigation-menu-viewport]]:shadow-[0_20px_50px_rgba(13,59,46,0.15)]'
                )}
              >
                <NavigationMenuList className="gap-1">

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="#"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="#about"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Mega Menu Trigger: Products */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-auto rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-all hover:bg-white/60 hover:text-[#0D3B2E] data-[state=open]:bg-white data-[state=open]:text-[#0D3B2E]">
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
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="#process"
                    >
                      Our Process
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="#quality"
                    >
                      Quality
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="#markets"
                    >
                      Global Markets
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
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
              <div className="hidden md:block">
                <RunActionButton onClick={onOpenQuote} />
              </div>

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

        {/* Full-Height Mobile Side Sheet / Drawer (Navigation-5 Dark Luxury Pattern) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Dark Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              />

              {/* Side Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[320px] sm:max-w-[340px] bg-[#07241C] text-white flex flex-col justify-between p-6 shadow-2xl lg:hidden border-l border-white/10 overflow-y-auto"
              >
                {/* Header: Logo & Close Button */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="Shri VHS Global Trade Logo"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-white rounded-full transition-colors focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Items List */}
                <div className="flex flex-col space-y-4 my-6 flex-1">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    About
                  </a>

                  {/* Collapsible Accordion: Solutions / Products */}
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between text-base font-semibold text-white focus:outline-none w-full text-left py-1"
                    >
                      <span>Products & Range</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-white/70 transition-transform duration-200",
                          mobileProductsOpen && "rotate-180 text-[#C59B27]"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden border-l border-white/15 pl-4 ml-1 space-y-4 pt-1"
                        >
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-2">
                              EXPORT CATEGORIES
                            </span>
                            <div className="flex flex-col space-y-2">
                              {categoriesData.map((cat) => (
                                <a
                                  key={cat.id}
                                  href="#products"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-sm font-medium text-white/80 hover:text-[#C59B27] transition-colors flex items-center justify-between"
                                >
                                  <span>{cat.name}</span>
                                  <span className="text-[10px] text-[#C59B27] bg-[#C59B27]/10 px-2 py-0.5 rounded-full font-semibold">
                                    {cat.itemCount}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-2">
                              EXPORT FORMATS
                            </span>
                            <div className="flex flex-col space-y-2 text-sm text-white/80">
                              <a href="#packaging" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27]">Retail Packaging</a>
                              <a href="#packaging" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27]">Wholesale Units</a>
                              <a href="#packaging" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C59B27]">Bulk Container Freight</a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <a
                    href="#process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Our Process
                  </a>
                  <a
                    href="#quality"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Quality & Compliance
                  </a>
                  <a
                    href="#markets"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Global Markets
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div>

                {/* Bottom Action CTA Buttons Pinned at Bottom */}
                <div className="border-t border-white/10 pt-5 space-y-3">
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Explore Products
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-[#C59B27] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#D4AF37] transition-all"
                  >
                    <span>Request a Quote</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

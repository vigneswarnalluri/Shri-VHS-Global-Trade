"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
  FileText,
} from "lucide-react";

import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";
import { RunActionButton } from "@/components/ui/run-action-button";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/ui/StaggeredMenu";

interface HeaderProps {
  onOpenQuote?: () => void;
}

const categorySummaries: Record<string, string> = {
  "rice-grains": "Basmati 1121, Sona Masoori, Traditional Varieties",
  "spices": "Dry Red Chillies, High-Curcumin Turmeric",
  "fresh-fruits": "Alphonso Mangoes, Pineapples, Coconuts",
  "fresh-vegetables": "Farm-Fresh Onions, Green Chillies, Drumsticks",
  "edible-oils": "Cold-Pressed Groundnut Oil, Sunflower Oil",
  "natural-agricultural": "Raw Cotton Bales, Pure Honey, Coffee Beans",
};

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Check if user is inside Section 2 (export journey cinematic section)
      const section2 = document.getElementById("export-journey");
      if (section2) {
        const rect = section2.getBoundingClientRect();
        // While Section 2 is active or in viewport, keep navbar hidden
        if (rect.top <= 120 && rect.bottom >= 0) {
          setIsVisible(false);
          lastScrollY.current = currentScrollY;
          return;
        }
      }

      // Auto hide when scrolling down, show when scrolling up
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavItems: StaggeredMenuItem[] = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About Us', ariaLabel: 'About Shri VHS Global Trade', link: '/#about' },
    { label: 'Products', ariaLabel: 'Explore our product range', link: '/#products' },
    { label: 'Our Process', ariaLabel: 'Farm to global delivery process', link: '/#process' },
    { label: 'Quality', ariaLabel: 'Quality & compliance certifications', link: '/#quality' },
    { label: 'Markets', ariaLabel: 'Global export markets', link: '/#markets' },
    { label: 'Contact', ariaLabel: 'Contact our Global Trade Desk', link: '/contact' },
  ];

  const mobileSocialItems: StaggeredMenuSocialItem[] = [
    {
      label: 'WhatsApp',
      link: 'https://wa.me/917095851852',
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"
            fill="#25D366"
          />
          <path
            d="M17.51 14.39C17.21 14.24 15.74 13.51 15.46 13.41C15.19 13.31 14.99 13.26 14.79 13.56C14.59 13.86 14.02 14.54 13.84 14.74C13.67 14.94 13.49 14.96 13.19 14.81C12.89 14.66 11.93 14.35 10.79 13.33C9.9 12.54 9.3 11.56 9.13 11.26C8.95 10.96 9.11 10.8 9.26 10.65C9.39 10.52 9.55 10.3 9.7 10.13C9.85 9.96 9.9 9.83 10 9.63C10.1 9.43 10.05 9.26 9.98 9.11C9.9 8.96 9.3 7.5 9.05 6.9C8.81 6.32 8.57 6.4 8.39 6.39C8.22 6.38 8.02 6.38 7.82 6.38C7.62 6.38 7.3 6.46 7.02 6.76C6.75 7.06 6 7.76 6 9.18C6 10.6 7.04 11.97 7.19 12.17C7.34 12.37 9.23 15.28 12.13 16.53C12.82 16.83 13.36 17.01 13.78 17.14C14.47 17.36 15.1 17.33 15.6 17.26C16.15 17.18 17.29 16.57 17.53 15.9C17.77 15.23 17.77 14.65 17.7 14.53C17.63 14.41 17.81 14.54 17.51 14.39Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: 'Phone Call',
      link: `tel:${companyData.contact.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="h-6.5 w-6.5 text-[#0D3B2E] stroke-[2.2]" />,
    },
    {
      label: 'Email',
      link: `mailto:${companyData.contact.email}`,
      icon: <Mail className="h-6.5 w-6.5 text-[#C59B27] stroke-[2.2]" />,
    },
    {
      label: 'Twitter / X',
      link: companyData.socials.twitter || 'https://x.com/VHSGlobalTrade',
      icon: (
        <svg className="h-6 w-6 text-[#0F1F1A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      link: companyData.socials.instagram || 'https://www.instagram.com',
      icon: (
        <svg className="h-6.5 w-6.5 text-[#E4405F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className={cn(
        "z-40 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "fixed top-0 left-0 right-0 shadow-sm bg-white/95 backdrop-blur-md"
          : "absolute top-0 left-0 right-0 bg-transparent",
        isScrolled && !isVisible ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* Top Bar */}
      <div className={cn("text-xs py-2 px-4 border-b border-white/10 transition-colors duration-300", isScrolled ? "bg-[#07241C] text-white/90" : "bg-[#07241C]/90 backdrop-blur-md text-white/90")}>
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

      {/* Main Navigation Pill */}
      <div className="w-full py-3.5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">

          {/* Translucent Seamless Floating Pill */}
          <div className={cn("flex h-16 w-full items-center justify-between gap-3 rounded-full pr-3.5 transition-all duration-300", isScrolled ? "bg-white/90 border border-[#E2DFD5] shadow-xs" : "bg-white/40 backdrop-blur-md border border-white/40 shadow-none")}>

            {/* Logo Section */}
            <Link href="/" className="flex items-center pl-3.5 sm:pl-5 pr-3 group">
              <Image
                src="/logo.png"
                alt="Shri VHS Global Trade Logo"
                width={200}
                height={60}
                priority
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
                style={{ width: "auto" }}
              />
            </Link>

            {/* Desktop Navigation with Mega-Menu */}
            <div className="hidden lg:block">
              <NavigationMenu
                className={cn(
                  'static',
                  '[&>div:last-child]:inset-x-0 [&>div:last-child]:top-full [&>div:last-child]:w-full',
                  '[&_[data-slot=navigation-menu-viewport]]:mx-auto [&_[data-slot=navigation-menu-viewport]]:mt-3 [&_[data-slot=navigation-menu-viewport]]:max-w-[1104px]',
                  '[&_[data-slot=navigation-menu-viewport]]:rounded-2xl [&_[data-slot=navigation-menu-viewport]]:border [&_[data-slot=navigation-menu-viewport]]:border-[#C59B27]/35',
                  '[&_[data-slot=navigation-menu-viewport]]:bg-[#062018] [&_[data-slot=navigation-menu-viewport]]:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(197,155,39,0.25)]',
                  '[&_[data-slot=navigation-menu-viewport]]:overflow-hidden',
                  '[&_[data-slot=navigation-menu-viewport][data-state=closed]]:hidden [&_[data-slot=navigation-menu-viewport][data-state=closed]]:border-0'
                )}
              >
                <NavigationMenuList className="gap-1">

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="/"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="/#about"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Mega Menu Trigger: Products */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-auto rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-all hover:bg-white/60 hover:text-[#0D3B2E] data-[state=open]:bg-white data-[state=open]:text-[#0D3B2E]">
                      Products &amp; Range
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="p-0 bg-transparent border-0 shadow-none">
                      <div className="w-[1104px] max-w-[calc(100vw-3rem)] bg-gradient-to-br from-[#07241C] via-[#051C15] to-[#03130E] text-white relative overflow-hidden">

                        {/* Ambient Atmospheric Luxury Sheen & Pattern */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          <div className="absolute -top-24 -right-24 w-[420px] h-[350px] bg-[radial-gradient(ellipse_at_top_right,rgba(197,155,39,0.18)_0%,transparent_65%)] blur-2xl" />
                          <div className="absolute -bottom-24 -left-24 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(13,59,46,0.6)_0%,transparent_70%)] blur-2xl" />
                          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
                        </div>

                        {/* Main Grid: 3 Harmonious Columns (Col-Span 6 / 3 / 3) */}
                        <div className="grid grid-cols-12 gap-8 p-7 relative z-10">

                          {/* Column 1: Categories (Col-Span 6) */}
                          <div className="col-span-6 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between h-7 pb-3 mb-4 border-b border-white/10">
                                <span className="text-[11px] font-bold tracking-widest text-[#E5C365] uppercase whitespace-nowrap">
                                  Export Categories
                                </span>
                                <Link
                                  href="/#products"
                                  className="text-xs font-semibold text-[#E5C365] hover:text-white inline-flex items-center gap-1 group whitespace-nowrap transition-colors"
                                >
                                  <span>View all 18 commodities</span>
                                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                {categoriesData.map((cat) => (
                                  <Link
                                    key={cat.id}
                                    href="/#products"
                                    className="group rounded-xl p-3 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#C59B27]/50 hover:shadow-lg hover:shadow-black/20 transition-all duration-200"
                                  >
                                    <div className="flex items-baseline justify-between gap-2">
                                      <span className="text-sm font-bold text-white group-hover:text-[#E5C365] transition-colors truncate">
                                        {cat.name}
                                      </span>
                                      <span className="text-[10.5px] font-mono text-[#E5C365] font-semibold bg-[#C59B27]/15 px-2 py-0.5 rounded border border-[#C59B27]/30 shrink-0">
                                        {cat.itemCount} items
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-300 mt-1 truncate font-light">
                                      {categorySummaries[cat.id] || cat.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Export Formats (Col-Span 3) */}
                          <div className="col-span-3 flex flex-col justify-between border-l border-white/10 pl-8">
                            <div>
                              <div className="flex items-center h-7 pb-3 mb-4 border-b border-white/10">
                                <span className="text-[11px] font-bold tracking-widest text-[#E5C365] uppercase whitespace-nowrap">
                                  Export Formats
                                </span>
                              </div>

                              <div className="space-y-3.5">
                                <Link href="/#packaging" className="group block">
                                  <span className="text-xs font-bold text-white group-hover:text-[#E5C365] transition-colors">
                                    Retail Packaging
                                  </span>
                                  <p className="text-[11.5px] text-gray-300 mt-0.5 leading-snug font-light">
                                    500g to 5kg branded consumer packs &amp; pouches
                                  </p>
                                </Link>

                                <Link href="/#packaging" className="group block">
                                  <span className="text-xs font-bold text-white group-hover:text-[#E5C365] transition-colors">
                                    Wholesale Units
                                  </span>
                                  <p className="text-[11.5px] text-gray-300 mt-0.5 leading-snug font-light">
                                    25kg &amp; 50kg PP woven, multi-wall paper &amp; jute
                                  </p>
                                </Link>

                                <Link href="/#packaging" className="group block">
                                  <span className="text-xs font-bold text-white group-hover:text-[#E5C365] transition-colors">
                                    Bulk Container Freight
                                  </span>
                                  <p className="text-[11.5px] text-gray-300 mt-0.5 leading-snug font-light">
                                    20ft &amp; 40ft FCL ocean shipments (24–26 MT)
                                  </p>
                                </Link>

                                <Link href="/#packaging" className="group block">
                                  <span className="text-xs font-bold text-white group-hover:text-[#E5C365] transition-colors">
                                    Custom Specifications
                                  </span>
                                  <p className="text-[11.5px] text-gray-300 mt-0.5 leading-snug font-light">
                                    Private labeling, custom grading &amp; SGS inspection
                                  </p>
                                </Link>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs text-gray-300">
                              <div className="flex items-center gap-1.5 text-[11px]">
                                <span className="text-gray-400">Gateway Ports:</span>
                                <span className="font-semibold text-white">JNPT · Mundra · Chennai</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px]">
                                <span className="text-gray-400">Export Terms:</span>
                                <span className="font-semibold text-[#E5C365]">FOB · CIF · CFR Delivery</span>
                              </div>
                            </div>
                          </div>

                          {/* Column 3: Commercial Desk (Col-Span 3) */}
                          <div className="col-span-3 flex flex-col justify-between border-l border-white/10 pl-8">
                            <div>
                              <div className="flex items-center h-7 pb-3 mb-4 border-b border-white/10">
                                <span className="text-[11px] font-bold tracking-widest text-[#E5C365] uppercase whitespace-nowrap">
                                  Commercial Desk
                                </span>
                              </div>

                              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                                <h5 className="text-xs font-bold text-white">
                                  Request Commercial Quote
                                </h5>
                                <p className="text-xs text-gray-300 mt-1 leading-relaxed font-light">
                                  Get instant FOB/CIF export pricing for bulk orders from Hyderabad, India.
                                </p>

                                <Link
                                  href="/quote"
                                  onClick={(e) => {
                                    if (onOpenQuote) {
                                      e.preventDefault();
                                      onOpenQuote();
                                    }
                                  }}
                                  className="btn-geometric-wipe w-full mt-4 py-2.5 px-3 text-xs rounded-none shadow-sm text-center"
                                >
                                  <span>Inquire Now</span>
                                </Link>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
                              <a
                                href="/catalogue.pdf"
                                download="Shri_VHS_Global_Trade_Catalogue.pdf"
                                className="text-[#E5C365] hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-[11.5px]"
                              >
                                <FileText className="h-3.5 w-3.5 text-[#C59B27]" />
                                <span>Download Catalogue</span>
                              </a>
                              <a
                                href="https://wa.me/917095851852"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px]"
                              >
                                <span>WhatsApp:</span>
                                <span className="font-semibold text-white">+91 70958 51852</span>
                              </a>
                            </div>
                          </div>

                        </div>

                        {/* Bottom Minimal Footer Strip */}
                        <div className="px-7 py-3 bg-[#03130E] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 relative z-10">
                          <div className="flex items-center gap-2">
                            <span className="text-white/80 font-medium">Merchant Exporter</span>
                            <span className="text-[#C59B27]">•</span>
                            <span className="text-white/80 font-medium">APEDA</span>
                            <span className="text-[#C59B27]">•</span>
                            <span className="text-white/80 font-medium">Spices Board</span>
                            <span className="text-[#C59B27]">•</span>
                            <span className="text-white/80 font-medium">FSSAI Certified</span>
                            <span className="text-[#C59B27]">•</span>
                            <span className="text-white/80 font-medium">ISO 9001:2015</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#E5C365] font-semibold">
                            <span>Direct Dispatch from Hyderabad, India</span>
                          </div>
                        </div>

                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="/#process"
                    >
                      Our Process
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="/#quality"
                    >
                      Quality
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="/#markets"
                    >
                      Global Markets
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0F1F1A] transition-colors hover:text-[#0D3B2E] hover:bg-white/60"
                      href="/contact"
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Action Section */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <RunActionButton onClick={onOpenQuote} href="/quote" />
              </div>

              {/* Mobile Trigger & StaggeredMenu Integration */}
              <div className="lg:hidden flex items-center gap-2">
                <a
                  href="/quote"
                  onClick={(e) => {
                    if (onOpenQuote) {
                      e.preventDefault();
                      onOpenQuote();
                    }
                  }}
                  className="h-9 px-3.5 text-xs font-bold bg-[#C59B27] text-white rounded-full shadow-xs sm:hidden hover:bg-[#D4AF37] transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Quote
                </a>

                {/* React Bits StaggeredMenu */}
                <StaggeredMenu
                  position="right"
                  isFixed={false}
                  items={mobileNavItems}
                  socialItems={mobileSocialItems}
                  displaySocials={true}
                  displayItemNumbering={true}
                  menuButtonColor="#0F1F1A"
                  openMenuButtonColor="#FFFFFF"
                  changeMenuColorOnOpen={true}
                  colors={['#C59B27', '#165342', '#0D3B2E']}
                  logoUrl="/logo.png"
                  accentColor="#C59B27"
                  actionButton={
                    <a
                      href="/quote"
                      className="w-full flex items-center justify-between rounded-2xl bg-[#07241C] hover:bg-[#0D3B2E] p-4 text-white shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer border border-[#0F1F1A]"
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-white text-[0.95rem] font-extrabold tracking-tight group-hover:text-[#F8F1DE] transition-colors">
                          Request Commercial Quote
                        </span>
                        <span className="text-[#C59B27] text-xs font-medium mt-0.5">
                          Export pricing &amp; container estimates
                        </span>
                      </div>
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#C59B27] group-hover:bg-[#D4AF37] group-hover:scale-105 text-white transition-all shadow-xs shrink-0 ml-3">
                        <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                      </span>
                    </a>
                  }
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

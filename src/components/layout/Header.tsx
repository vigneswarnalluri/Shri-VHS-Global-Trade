"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  CheckCircle2,
  Package,
  Layers,
  Sprout,
  ShieldCheck
} from "lucide-react";

import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";
import { RunActionButton } from "@/components/ui/run-action-button";
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/ui/StaggeredMenu";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavItems: StaggeredMenuItem[] = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
    { label: 'About Us', ariaLabel: 'About Shri VHS Global Trade', link: '#about' },
    { label: 'Products', ariaLabel: 'Explore our product range', link: '#products' },
    { label: 'Our Process', ariaLabel: 'Farm to global delivery process', link: '#process' },
    { label: 'Quality', ariaLabel: 'Quality & compliance certifications', link: '#quality' },
    { label: 'Markets', ariaLabel: 'Global export markets', link: '#markets' },
    { label: 'Contact', ariaLabel: 'Get in touch with us', link: '#contact' },
  ];

  const mobileSocialItems: StaggeredMenuSocialItem[] = [
    { label: 'WhatsApp', link: 'https://wa.me/917095851852' },
    { label: 'Call (+91 70958 51852)', link: `tel:${companyData.contact.phone.replace(/\s+/g, '')}` },
    { label: 'Email Us', link: `mailto:${companyData.contact.email}` },
    { label: 'Twitter / X', link: companyData.socials.twitter || 'https://x.com/VHSGlobalTrade' },
  ];

  return (
    <header className={cn("z-40 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300", isScrolled ? "fixed top-0 left-0 right-0 shadow-sm bg-white/95 backdrop-blur-md" : "absolute top-0 left-0 right-0 bg-transparent")}>
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
            <a href="#" className="flex items-center pl-3.5 sm:pl-5 pr-3 group">
              <Image
                src="/logo.png"
                alt="Shri VHS Global Trade Logo"
                width={200}
                height={60}
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
                  '[&_[data-slot=navigation-menu-viewport][data-state=open]]:rounded-2xl [&_[data-slot=navigation-menu-viewport][data-state=open]]:border [&_[data-slot=navigation-menu-viewport][data-state=open]]:border-[#E2DFD5]/80',
                  '[&_[data-slot=navigation-menu-viewport][data-state=open]]:bg-white/95 [&_[data-slot=navigation-menu-viewport][data-state=open]]:backdrop-blur-xl [&_[data-slot=navigation-menu-viewport][data-state=open]]:shadow-[0_20px_50px_rgba(13,59,46,0.15)]',
                  '[&_[data-slot=navigation-menu-viewport][data-state=closed]]:hidden [&_[data-slot=navigation-menu-viewport][data-state=closed]]:border-0'
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

            {/* Right Action Section */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <RunActionButton onClick={onOpenQuote} />
              </div>

              {/* Mobile Trigger & StaggeredMenu Integration */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={onOpenQuote}
                  className="h-9 px-3.5 text-xs font-bold bg-[#C59B27] text-white rounded-full shadow-xs sm:hidden hover:bg-[#D4AF37] transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Quote
                </button>

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
                    <button
                      onClick={onOpenQuote}
                      className="w-full flex items-center justify-between rounded-2xl bg-[#07241C] hover:bg-[#0D3B2E] p-4 text-white shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer border border-[#0F1F1A]"
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-white text-[0.95rem] font-extrabold tracking-tight group-hover:text-[#F8F1DE] transition-colors">
                          Request Commercial Quote
                        </span>
                        <span className="text-[#C59B27] text-xs font-medium mt-0.5">
                          Export pricing & container estimates
                        </span>
                      </div>
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#C59B27] group-hover:bg-[#D4AF37] group-hover:scale-105 text-white transition-all shadow-xs shrink-0 ml-3">
                        <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                      </span>
                    </button>
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

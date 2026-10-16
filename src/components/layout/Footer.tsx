import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Globe } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const socialDockItems = [
    {
      title: "X (Twitter)",
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: companyData.socials.twitter || "https://x.com/VHSGlobalTrade",
    },
    {
      title: "Instagram",
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: companyData.socials.instagram || "https://www.instagram.com",
    },
    {
      title: "WhatsApp Desk",
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.39 1.3-1.92 1.38-.5.08-1.15.11-3.32-.78-2.6-1.07-4.27-3.7-4.4-3.87-.13-.17-1.06-1.41-1.06-2.69 0-1.28.67-1.91.91-2.17.24-.26.53-.33.71-.33.18 0 .35 0 .5.01.16.01.38-.06.59.45.22.53.75 1.83.82 1.97.07.13.11.29.02.46-.08.18-.13.29-.26.43-.13.15-.27.33-.39.44-.13.13-.26.27-.11.53.15.26.67 1.1 1.44 1.78.99.88 1.82 1.15 2.08 1.28.26.13.41.11.56-.07.15-.17.65-.75.82-1.01.18-.26.35-.22.59-.13.24.09 1.54.73 1.8 1.01.27.27.45.4.52.52.07.11.07.66-.17 1.34z" />
        </svg>
      ),
      href: "https://wa.me/917095851852?text=Hello%20Shri%20VHS%20Global%20Trade%2C%20I%20am%20inquiring%20about%20agricultural%20exports.",
    },
    {
      title: "LinkedIn",
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      href: "https://www.linkedin.com",
    },
    {
      title: "Export Desk Mail",
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      href: `mailto:${companyData.contact.email}`,
    },
  ];

  return (
    <footer className="relative z-20 bg-[#07241C] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Col 1 & 2: Company Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Shri VHS Global Trade Logo"
                width={240}
                height={80}
                className="h-14 sm:h-16 w-auto object-contain shrink-0"
                style={{ width: "auto" }}
              />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              {companyData.description}
            </p>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>{companyData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C59B27] shrink-0" />
                <a href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>{companyData.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C59B27] mb-4">
              Export Range
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {categoriesData.map((cat) => (
                <li key={cat.id}>
                  <Link href="/#products" className="hover:text-white transition-colors flex items-center gap-1">
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C59B27] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">Farm to Global Process</Link></li>
              <li><Link href="/#packaging" className="hover:text-white transition-colors">Packaging Standards</Link></li>
              <li><Link href="/#quality" className="hover:text-white transition-colors">Quality &amp; Compliance</Link></li>
              <li><Link href="/#markets" className="hover:text-white transition-colors">Global Connectivity</Link></li>
              <li><Link href="/contact" className="hover:text-[#C59B27] font-semibold transition-colors">Contact Trade Desk</Link></li>
              <li>
                <Link href="/quote" className="text-[#C59B27] font-semibold hover:underline cursor-pointer">
                  Request B2B Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Export Desk Notice */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C59B27] mb-4">
              B2B Trade Desk
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              We cater exclusively to global importers, food distributors, retail chains, and institutional buyers seeking authentic Indian agricultural commodities.
            </p>
            <Link
              href="/quote"
              onClick={(e) => {
                if (onOpenQuote) {
                  e.preventDefault();
                  onOpenQuote();
                }
              }}
              className="w-full btn-geometric-wipe px-4 py-2.5 text-xs rounded-none shadow text-center"
            >
              <span>Request Quote</span>
            </Link>
          </div>

        </div>

        {/* Bottom Bar: Copyright on Left, Socials in Middle, Location on Right */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <p className="order-2 lg:order-1 text-center lg:text-left text-gray-400">
            © {new Date().getFullYear()} Shri VHS Global Trade Private Limited. All rights reserved.
          </p>

          <div className="order-1 lg:order-2">
            <FloatingDock
              items={socialDockItems}
              desktopClassName="mx-auto w-fit bg-transparent border-0 shadow-none px-0"
              mobileClassName="justify-center mx-auto"
            />
          </div>

          <div className="order-3 flex items-center gap-3 text-[11px] text-gray-400 text-center lg:text-right">
            <span>Hyderabad, Telangana, India</span>
            <span>•</span>
            <span>Indian Merchant Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

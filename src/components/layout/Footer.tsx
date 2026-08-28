import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Globe, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";
import { categoriesData } from "@/data/categories";

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#07241C] text-white pt-16 pb-12 border-t border-white/10">
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

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {companyData.socials.twitter && (
                <a
                  href={companyData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C59B27] transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {companyData.socials.instagram && (
                <a
                  href={companyData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C59B27] transition-colors"
                >
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
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
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#C59B27] px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-[#D4AF37] transition-colors"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Shri VHS Global Trade Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Hyderabad, Telangana, India</span>
            <span>•</span>
            <span>Indian Merchant Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

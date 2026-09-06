import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ChevronRight, Shield, Award } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { TorqvaLogo } from './TorqvaLogo';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-neutral-400 pt-16 pb-24 lg:pb-12 border-t-2 border-[#D71920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#242424]">
          
          {/* Brand Info Column */}
          <div className="space-y-4">
            <TorqvaLogo variant="header" />

            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Supplier of Premium Quality Two-Wheeler Plastic Body Parts. Engineered for exact fit, high durability, and superior surface finish.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-neutral-300">
              <span className="inline-flex items-center gap-1 text-[#D71920] font-bold">
                <Shield className="w-4 h-4" /> Premium Quality
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-[#D71920] font-bold">
                <Award className="w-4 h-4" /> Reliable Fit
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#141414] hover:bg-[#D71920] text-neutral-300 hover:text-white border border-[#242424] rounded-sm transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#141414] hover:bg-[#D71920] text-neutral-300 hover:text-white border border-[#242424] rounded-sm transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#141414] hover:bg-[#D71920] text-neutral-300 hover:text-white border border-[#242424] rounded-sm transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Product Categories Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#D71920] pl-3">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Front Visors', path: '/products?category=visors' },
                { name: 'Front & Rear Mudguards', path: '/products?category=mudguards' },
                { name: 'Side Panels / Cowls', path: '/products?category=side-panels' },
                { name: 'Tail Panels & Seat Cowls', path: '/products?category=tail-panels' },
                { name: 'Scooter Nose Panels', path: '/products?category=nose-panels' },
                { name: 'Other Body Accessories', path: '/products?category=other-parts' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-transform"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D71920]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (Rate List removed) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#D71920] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Product Catalogue', path: '/products' },
                { name: 'Find Parts For Your Bike', path: '/bike-models' },
                { name: 'Dealer & Bulk Supply', path: '/contact#dealer-enquiry' },
                { name: 'Brand Gallery', path: '/gallery' },
                { name: 'About TORQVA', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-transform"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D71920]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Enquiry Contact Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#D71920] pl-3">
              Direct Enquiry
            </h4>

            <div className="space-y-3 text-xs">
              <a
                href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to make a quick trade enquiry.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#0D0D0D] border border-[#242424] hover:border-[#D71920] rounded-sm transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#D71920]/20 text-[#D71920] rounded-sm group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-neutral-400">WhatsApp Fast Desk</div>
                  <div className="font-bold text-white text-xs">{siteConfig.displayWhatsapp}</div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 p-3 bg-[#0D0D0D] border border-[#242424] hover:border-[#D71920] rounded-sm transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#D71920]/20 text-[#D71920] rounded-sm group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-neutral-400">Sales Hotline</div>
                  <div className="font-bold text-white text-xs">{siteConfig.displayPhone}</div>
                </div>
              </a>

              <div className="flex items-start gap-2 pt-1 text-neutral-400 text-xs">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.state} - {siteConfig.pincode}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400 text-center md:text-right">
            Manufacturer & Supplier of Replacement Two-Wheeler Body Parts. All trademarks belong to respective OEMs.
          </p>
        </div>
      </div>
    </footer>
  );
};

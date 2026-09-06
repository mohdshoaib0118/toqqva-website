import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { useEnquiry } from '../../context/EnquiryContext';
import { TorqvaLogo } from './TorqvaLogo';

export const Navbar = () => {
  const { setIsDrawerOpen, totalItemsCount } = useEnquiry();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Bike Models', path: '/bike-models' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col shadow-2xl">
        {/* Top Hotline Bar displaying User's Phone Numbers */}
        <div className="bg-gradient-to-r from-[#0a0a0a] via-[#140607] to-[#0a0a0a] border-b border-[#222222] py-1.5 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-5 text-[11px] font-extrabold tracking-wider text-neutral-300">
              <span className="flex items-center gap-1.5 text-[#D71920] whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL WHOLESALE DESK</span>
              </span>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              
              {/* Primary Call & WhatsApp: +91 79861 92068 */}
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-[#D71920]" />
                <span>Call: <strong className="text-white font-black">{siteConfig.displayPhone}</strong></span>
              </a>
              <span className="text-neutral-700 hidden md:inline">|</span>
              <a
                href={getWhatsAppUrl(`Hello TORQVA team, I would like to enquire about plastic spare parts.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer hidden md:flex"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-500 fill-green-500/20" />
                <span>WhatsApp: <strong className="text-white font-black">{siteConfig.displayWhatsapp}</strong></span>
              </a>
            </div>

            <div className="text-[10px] font-black uppercase tracking-widest text-[#D71920] whitespace-nowrap hidden lg:block">
              // SUPPLIER OF PREMIUM TWO-WHEELER PLASTIC PARTS //
            </div>
          </div>
        </div>

        {/* Main Header Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#050505]/95 backdrop-blur-xl py-3 border-b border-[#222222]'
              : 'bg-[#050505]/90 backdrop-blur-md py-3.5 border-b border-[#222222]/60'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              
              {/* TORQVA Brand Logo */}
              <div className="shrink-0 cursor-pointer">
                <TorqvaLogo variant="header" />
              </div>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-1.5 text-xs xl:text-sm font-extrabold uppercase tracking-wider transition-colors relative whitespace-nowrap cursor-pointer ${
                        active
                          ? 'text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#D71920] rounded-full shadow-[0_0_10px_#D71920]"></span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Action Buttons */}
              <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                {/* Enquiry Drawer Trigger */}
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white bg-[#121212] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#D71920] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap"
                  title="View Selected Enquiry List"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D71920]" />
                  <span>Enquiry ({totalItemsCount})</span>
                  {totalItemsCount > 0 && (
                    <span className="w-2 h-2 rounded-full bg-[#D71920] animate-ping"></span>
                  )}
                </button>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-neutral-200 hover:text-white transition-all border border-[#262626] hover:border-neutral-500 bg-[#0d0d0d] rounded-md shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>Call {siteConfig.displayPhone}</span>
                </a>

                <a
                  href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I am visiting your website and would like to request product pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#D71920] to-[#E31B23] hover:from-[#E31B23] hover:to-[#FF1E27] transition-all rounded-md shadow-lg shadow-red-950/40 hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Get Quote</span>
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center gap-2 lg:hidden shrink-0">
                <a
                  href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to make an enquiry.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#D71920] text-white rounded-md shadow-md cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 text-neutral-300 hover:text-white bg-[#121212] border border-[#262626] rounded-md cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for Content to prevent overlap under fixed header */}
      <div className="h-[80px] md:h-[95px]"></div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Menu Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[88vw] bg-[#0A0A0A] border-l border-[#222222] p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222222]">
                <TorqvaLogo variant="header" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 text-xs font-black uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#D71920]/15 text-[#D71920] border-l-4 border-[#D71920]'
                          : 'text-neutral-300 hover:bg-[#141414] hover:text-white'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-500" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Phone & WhatsApp Actions */}
            <div className="pt-6 border-t border-[#222222] space-y-3">
              <a
                href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to request product pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-md shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp ({siteConfig.displayWhatsapp})</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#141414] border border-[#262626] text-white font-bold text-xs uppercase tracking-wider rounded-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#D71920]" />
                <span>Call ({siteConfig.displayPhone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

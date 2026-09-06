import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronRight, ShoppingBag, ShieldCheck, Search } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { useEnquiry } from '../../context/EnquiryContext';
import { TorqvaLogo } from './TorqvaLogo';
import { GlobalSearchModal } from './GlobalSearchModal';

export const Navbar = () => {
  const { setIsDrawerOpen, totalItemsCount } = useEnquiry();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
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
    { name: 'Rate List', path: '/rate-list' },
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
        {/* Top Hotline Bar with Dual Phone Numbers */}
        <div className="bg-gradient-to-r from-[#07080A] via-[#170B0D] to-[#07080A] border-b border-[#222734] py-1.5 px-4 text-xs font-tech">
          <div className="max-w-[1450px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] font-extrabold tracking-wider text-neutral-300">
              <span className="flex items-center gap-1.5 text-[#E31B23] whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL WHOLESALE DESK</span>
              </span>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              
              {/* Primary Call: +91 79861 92068 */}
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Call: <strong className="text-white font-black">{siteConfig.displayPhone}</strong></span>
              </a>

              <span className="text-neutral-700 hidden md:inline">|</span>

              {/* Secondary Call: +91 89686 33680 */}
              <a href={`tel:${siteConfig.altPhone}`} className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer hidden md:flex">
                <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Alt: <strong className="text-white font-black">{siteConfig.displayAltPhone}</strong></span>
              </a>

              <span className="text-neutral-700 hidden lg:inline">|</span>

              {/* WhatsApp: +91 79861 92068 */}
              <a
                href={getWhatsAppUrl(`Hello TORQVA team, I would like to enquire about plastic spare parts.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer hidden lg:flex"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-500/20" />
                <span>WhatsApp: <strong className="text-white font-black">{siteConfig.displayWhatsapp}</strong></span>
              </a>
            </div>

            <div className="text-[10px] font-black uppercase tracking-widest text-[#E31B23] whitespace-nowrap hidden xl:block font-tech">
              // SUPPLIER OF PREMIUM TWO-WHEELER PLASTIC PARTS //
            </div>
          </div>
        </div>

        {/* Main Header Navbar - Dynamic Flex Layout With Zero Overlap */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#07080A]/95 backdrop-blur-xl py-2.5 border-b border-[#222734]'
              : 'bg-[#07080A]/90 backdrop-blur-md py-3 border-b border-[#222734]/70'
          }`}
        >
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4 min-h-[48px]">
            
            {/* Left Brand Logo */}
            <div className="flex items-center shrink-0">
              <TorqvaLogo variant="header" />
            </div>

            {/* Center Navigation Links - Balanced Flex Center */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2 px-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2 xl:px-3.5 py-1.5 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors relative whitespace-nowrap cursor-pointer font-heading ${
                      active
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 xl:left-3.5 xl:right-3.5 h-[2.5px] bg-[#E31B23] rounded-full shadow-[0_0_10px_#E31B23]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center justify-end gap-2 shrink-0 font-display">
              {/* Instant Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-extrabold text-neutral-300 hover:text-white bg-[#0F1117] hover:bg-[#171A23] border border-[#222734] hover:border-[#E31B23] rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap font-tech"
                title="Search Parts (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#E31B23]" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden 2xl:inline px-1.5 py-0.5 text-[9px] bg-[#171A23] text-neutral-400 rounded border border-[#222734]">Ctrl+K</kbd>
              </button>

              {/* Enquiry Drawer Trigger */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative flex items-center gap-1.5 xl:gap-2 px-3 xl:px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white bg-[#0F1117] hover:bg-[#171A23] border border-[#222734] hover:border-[#E31B23] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap"
                title="View Selected Enquiry List"
              >
                <ShoppingBag className="w-4 h-4 text-[#E31B23]" />
                <span>Enquiry ({totalItemsCount})</span>
                {totalItemsCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-[#E31B23] animate-ping"></span>
                )}
              </button>

              <a
                href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I am visiting your website and would like to request product pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 xl:px-4 py-2 text-xs font-black uppercase tracking-wider text-white bg-[#E31B23] hover:bg-[#FF2A35] transition-all rounded-lg shadow-lg shadow-red-950/40 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Quote</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 bg-[#0F1117] text-neutral-300 border border-[#222734] rounded-lg shadow-sm cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-[#E31B23]" />
              </button>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2.5 bg-[#0F1117] text-white border border-[#222734] rounded-lg shadow-sm cursor-pointer"
                aria-label="Enquiry Drawer"
              >
                <ShoppingBag className="w-5 h-5 text-[#E31B23]" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E31B23] text-white text-[9px] font-black flex items-center justify-center">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-neutral-300 hover:text-white bg-[#0F1117] border border-[#222734] rounded-lg cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Dynamic Spacer under fixed navbar */}
      <div className="h-[80px] md:h-[92px]"></div>

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[88vw] bg-[#07080A] border-l border-[#222734] p-6 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#222734]">
                <TorqvaLogo variant="header" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2 font-heading">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 text-sm font-black uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#E31B23]/15 text-[#E31B23] border-l-4 border-[#E31B23]'
                          : 'text-neutral-300 hover:bg-[#0F1117] hover:text-white'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-500" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#222734] space-y-3 font-display">
              <a
                href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to request product pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#E31B23] hover:bg-[#FF2A35] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp ({siteConfig.displayWhatsapp})</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#0F1117] border border-[#222734] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg cursor-pointer font-tech"
              >
                <Phone className="w-4 h-4 text-[#E31B23]" />
                <span>Call ({siteConfig.displayPhone})</span>
              </a>

              <a
                href={`tel:${siteConfig.altPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#0F1117] border border-[#222734] text-neutral-300 font-extrabold text-xs uppercase tracking-wider rounded-lg cursor-pointer font-tech"
              >
                <Phone className="w-4 h-4 text-[#E31B23]" />
                <span>Alt ({siteConfig.displayAltPhone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

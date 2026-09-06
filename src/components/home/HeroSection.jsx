import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Phone, CheckCircle2, Sliders, Layers, Sparkles, Download } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const HeroSection = () => {
  const [activeColor, setActiveColor] = useState('red');
  const [activePart, setActivePart] = useState('visor');

  const colorVariants = {
    red: { name: 'Racing Crimson Red', bg: 'bg-[#E31B23]', border: 'border-[#FF2A35]' },
    black: { name: 'Matte Gunmetal Black', bg: 'bg-[#181A20]', border: 'border-[#323846]' },
    white: { name: 'Pearl Metallic White', bg: 'bg-[#E2E8F0]', border: 'border-[#FFFFFF]' },
    blue: { name: 'Deep Metallic Sapphire', bg: 'bg-[#1E40AF]', border: 'border-[#3B82F6]' },
  };

  const partPresets = {
    visor: {
      name: 'Splendor Pro Visor Assembly',
      sku: 'TORQ-VIS-001',
      material: '100% Virgin Injection ABS',
      finish: 'UV Polyurethane Coating',
      fitment: 'Hero Splendor Plus / Pro',
      price: '₹420.00',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    },
    mudguard: {
      name: 'Activa 6G Front Mudguard',
      sku: 'TORQ-MUD-042',
      material: 'Heavy-Duty Virgin Plastic',
      finish: 'High-Gloss Finish',
      fitment: 'Honda Activa 5G / 6G',
      price: '₹580.00',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    },
    sidepanel: {
      name: 'Pulsar 150/180 Side Panel Kit',
      sku: 'TORQ-PNL-109',
      material: 'High-Flex ABS Polymer',
      finish: 'OEM Color Match',
      fitment: 'Bajaj Pulsar 150 / 180',
      price: '₹890.00',
      image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80',
    },
  };

  const brandLogos = [
    { name: "Hero", query: "hero" },
    { name: "Honda", query: "honda" },
    { name: "TVS", query: "tvs" },
    { name: "Bajaj", query: "bajaj" },
    { name: "Yamaha", query: "yamaha" },
    { name: "Royal Enfield", query: "royal-enfield" },
  ];

  const currentPart = partPresets[activePart];

  return (
    <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#07080A] overflow-hidden border-b border-[#1A1F2C]">
      
      {/* Background Micro Mesh FX */}
      <div className="absolute inset-0 bg-mesh-dark opacity-30 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[300px] sm:w-[550px] h-[200px] sm:h-[350px] bg-[#E31B23]/10 blur-[100px] sm:blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8 sm:space-y-12">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Industrial Headline, Stats & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Top Industrial Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#0F1117] border border-[#E31B23]/60 rounded-full shadow-lg max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#E31B23] animate-pulse shrink-0"></span>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-neutral-200 truncate font-display">
                FACTORY DIRECT TWO-WHEELER PLASTIC PARTS
              </span>
            </div>

            {/* Responsive Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] font-heading">
                OEM-GRADE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#E31B23]">
                  PRECISION BODY KITS
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs font-black text-[#E31B23] uppercase tracking-wider font-tech leading-snug">
                100% Virgin ABS Plastic • Direct OEM Fitment • Pan-India Wholesale Supply
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed font-body">
              Engineered replacement visors, front mudguards, side panels, tail cowls, and scooter nose aprons for Hero, Honda, TVS, Bajaj, and Yamaha. Zero-gap mounting alignment with UV lacquer finish that never fades under Indian sunlight.
            </p>

            {/* Key Metrics Strip - Fully Responsive */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-[#0F1117]/90 border border-[#222734] rounded-xl metallic-card">
              <div>
                <div className="text-lg sm:text-2xl font-black text-white font-heading">500+</div>
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase text-neutral-400 font-tech">Ready SKUs</div>
              </div>
              <div className="border-l border-[#222734] pl-2 sm:pl-3">
                <div className="text-lg sm:text-2xl font-black text-[#E31B23] font-heading">100%</div>
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase text-neutral-400 font-tech">Virgin ABS</div>
              </div>
              <div className="border-l border-[#222734] pl-2 sm:pl-3">
                <div className="text-lg sm:text-2xl font-black text-white font-heading">48 HR</div>
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase text-neutral-400 font-tech">Dispatch</div>
              </div>
            </div>

            {/* Dual Hotline Desk */}
            <div className="bg-[#0A0B0E] border border-[#222734] p-3.5 sm:p-4 rounded-xl space-y-2.5 shadow-2xl">
              <div className="text-[9px] sm:text-[10px] font-black uppercase text-[#E31B23] tracking-widest flex items-center justify-between font-tech">
                <span>FACTORY QUOTATION HOTLINES</span>
                <span className="text-neutral-500 hidden sm:inline font-normal">GST Invoice Available</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 p-2.5 bg-[#13161F] hover:bg-[#1A1F2C] border border-[#262C36] hover:border-[#E31B23] rounded-lg transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#E31B23]/20 text-[#E31B23] rounded-md group-hover:bg-[#E31B23] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-neutral-400 uppercase">Primary Sales</div>
                    <div className="text-[11px] sm:text-xs font-black text-white truncate font-tech">{siteConfig.displayPhone}</div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.altPhone}`}
                  className="flex items-center gap-2.5 p-2.5 bg-[#13161F] hover:bg-[#1A1F2C] border border-[#262C36] hover:border-[#E31B23] rounded-lg transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#E31B23]/20 text-[#E31B23] rounded-md group-hover:bg-[#E31B23] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-neutral-400 uppercase">Secondary Call</div>
                    <div className="text-[11px] sm:text-xs font-black text-white truncate font-tech">{siteConfig.displayAltPhone}</div>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl(`Hello TORQVA team, I would like to request product pricing & dealer catalog.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 bg-[#13161F] hover:bg-[#1A1F2C] border border-[#262C36] hover:border-emerald-500 rounded-lg transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/20 text-emerald-400 rounded-md group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-neutral-400 uppercase">WhatsApp Pricing</div>
                    <div className="text-[11px] sm:text-xs font-black text-white truncate font-tech">{siteConfig.displayWhatsapp}</div>
                  </div>
                </a>

              </div>
            </div>

            {/* Action CTAs - Responsive Full Width Buttons on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                to="/products"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E31B23] hover:bg-[#FF2A35] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-xl hover:scale-[1.02] transition-all cursor-pointer font-display text-center"
              >
                <span>Explore Spare Parts Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/rate-list"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#13161F] hover:bg-[#1C212E] border border-[#262C36] hover:border-white text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all cursor-pointer font-display text-center"
              >
                <Download className="w-4 h-4 text-[#E31B23]" />
                <span>Rate List & PDF</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Live Inspector Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg w-full">
              
              {/* Outer Metallic Card */}
              <div className="relative p-4 sm:p-5 bg-[#0A0B0E] border border-[#222734] rounded-2xl shadow-2xl space-y-4">
                
                {/* Top Inspection Bar */}
                <div className="flex items-center justify-between border-b border-[#1A1F2C] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider font-tech">
                      LIVE SPEC INSPECTOR
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-[#13161F] px-2 py-0.5 rounded border border-[#222734]">
                    {currentPart.sku}
                  </span>
                </div>

                {/* Part Selection Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#101217] rounded-lg border border-[#222734]">
                  {[
                    { key: 'visor', label: 'Visor' },
                    { key: 'mudguard', label: 'Mudguard' },
                    { key: 'sidepanel', label: 'Side Panel' },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActivePart(tab.key)}
                      className={`py-2 text-[11px] sm:text-xs font-bold uppercase rounded-md transition-all cursor-pointer font-tech ${
                        activePart === tab.key
                          ? 'bg-[#E31B23] text-white shadow-md'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Part Image Display */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#13161F] border border-[#222734] group">
                  <img
                    src={currentPart.image}
                    alt={currentPart.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent"></div>
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-3 right-3 bg-[#E31B23] text-white font-black text-xs px-2.5 py-1 rounded-md shadow-lg font-heading">
                    {currentPart.price} <span className="text-[9px] font-normal opacity-90">/ Piece</span>
                  </div>

                  {/* Floating OEM Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#0A0B0E]/90 backdrop-blur-md border border-[#222734] px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23]" />
                    <span className="text-[10px] font-black text-white uppercase tracking-wider font-tech">
                      100% Direct Fit
                    </span>
                  </div>
                </div>

                {/* Color Selector */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase font-tech">
                    <span>Color Swatches:</span>
                    <span className="text-white font-black">{colorVariants[activeColor].name}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {Object.keys(colorVariants).map((colKey) => (
                      <button
                        key={colKey}
                        onClick={() => setActiveColor(colKey)}
                        className={`py-2 rounded-lg border flex items-center justify-center gap-1 transition-all cursor-pointer ${
                          activeColor === colKey
                            ? `${colorVariants[colKey].border} bg-[#13161F] text-white ring-2 ring-[#E31B23]/40`
                            : 'border-[#222734] bg-[#0F1117] text-neutral-400 hover:text-white'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full ${colorVariants[colKey].bg} shrink-0`}></span>
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase font-tech truncate">
                          {colKey}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technical Specs Breakdown */}
                <div className="space-y-1.5 pt-2 border-t border-[#1A1F2C] text-xs">
                  <div className="flex justify-between py-1 border-b border-[#1A1F2C]/50">
                    <span className="text-neutral-400 text-[10px] sm:text-[11px]">Material Grade:</span>
                    <span className="text-white font-bold text-[10px] sm:text-[11px] truncate pl-2">{currentPart.material}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1A1F2C]/50">
                    <span className="text-neutral-400 text-[10px] sm:text-[11px]">Surface Finish:</span>
                    <span className="text-white font-bold text-[10px] sm:text-[11px] truncate pl-2">{currentPart.finish}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400 text-[10px] sm:text-[11px]">Vehicle Fitment:</span>
                    <span className="text-[#E31B23] font-bold text-[10px] sm:text-[11px] truncate pl-2">{currentPart.fitment}</span>
                  </div>
                </div>

                {/* Instant Quote CTA Button */}
                <a
                  href={getWhatsAppUrl(`Hello TORQVA, I want to enquire about ${currentPart.name} (${currentPart.sku}) in ${colorVariants[activeColor].name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#E31B23] hover:bg-[#FF2A35] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer font-display"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire Price For This Part</span>
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Bike Brand Selector Strip */}
        <div className="pt-6 border-t border-[#1A1F2C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs font-black uppercase text-neutral-400 tracking-wider font-tech flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#E31B23]" />
            <span>Select Two-Wheeler Brand:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {brandLogos.map((b, idx) => (
              <Link
                key={idx}
                to={`/bike-models?brand=${b.query}`}
                className="px-3.5 py-1.5 bg-[#0F1117] hover:bg-[#E31B23] border border-[#222734] hover:border-[#E31B23] text-neutral-300 hover:text-white text-xs font-extrabold uppercase rounded-lg transition-all cursor-pointer font-tech shadow-sm"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

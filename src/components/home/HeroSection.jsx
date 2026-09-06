import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Zap, Phone, Award, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const HeroSection = () => {
  const brandLogos = [
    { name: "Hero", query: "hero" },
    { name: "Honda", query: "honda" },
    { name: "TVS", query: "tvs" },
    { name: "Bajaj", query: "bajaj" },
    { name: "Suzuki", query: "suzuki" },
    { name: "Yamaha", query: "yamaha" },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-[#040404] overflow-hidden border-b border-[#1f1f1f]">
      
      {/* High-Tech Background FX */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D71920]/15 blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#101010] border border-[#D71920]/60 rounded-full shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D71920] animate-ping"></span>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
                {siteConfig.subTagline}
              </span>
            </div>

            {/* Headline - Perfectly Sized & Responsive */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase italic leading-[1.05] font-sans">
                ENGINEERED FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#D71920] drop-shadow-sm">
                  EVERY RIDE
                </span>
              </h1>
              <p className="text-xs sm:text-base font-black text-[#D71920] uppercase tracking-wider flex items-center gap-2 pt-1">
                <span>Wholesale & B2B Trade Supply Across India</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed font-normal">
              High-impact replacement body parts engineered for Hero, Honda, TVS, Bajaj, Suzuki & Yamaha two-wheelers. Premium virgin ABS plastic visors, mudguards, side panels, tail cowls, and nose aprons built for exact fitment and lasting gloss finish.
            </p>

            {/* Direct Dual Hotline Display (User requested numbers) */}
            <div className="bg-[#0c0c0c] border border-[#222222] p-3.5 sm:p-4 rounded-xl max-w-xl space-y-2 shadow-xl">
              <div className="text-[10px] font-black uppercase text-[#D71920] tracking-widest">
                DIRECT SALES & WHOLESALE QUOTATION HOTLINES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                
                {/* Number 1: Call Hotline (+91 79861 92068) */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#D71920]/20 text-[#D71920] rounded-md group-hover:bg-[#D71920] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-neutral-400 uppercase">Primary Sales Call</div>
                    <div className="text-xs font-black text-white truncate">{siteConfig.displayPhone}</div>
                  </div>
                </a>

                {/* Number 2: WhatsApp Hotline (+91 79861 92068) */}
                <a
                  href={getWhatsAppUrl(`Hello TORQVA team, I would like to request product pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] hover:border-green-600 rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 text-green-500 rounded-md group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-neutral-400 uppercase">Direct WhatsApp</div>
                    <div className="text-xs font-black text-white truncate">{siteConfig.displayWhatsapp}</div>
                  </div>
                </a>

              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                to="/products"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#D71920] to-[#E31B23] hover:from-[#E31B23] hover:to-[#FF1E27] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to get price quotation for two-wheeler body parts.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#121212] hover:bg-[#1c1c1c] border border-[#282828] hover:border-neutral-500 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-green-500 fill-green-500/20" />
                <span>WhatsApp Quote ({siteConfig.displayWhatsapp})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Cyber TORQVA Logo Card (Sized Proportionally) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              
              {/* Main Card Container */}
              <div className="relative p-3 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#050505] border border-[#282828] hover:border-[#D71920] rounded-2xl shadow-2xl transition-all duration-500 group">
                
                {/* Glowing Corner Markers */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#D71920] rounded-tl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#D71920] rounded-br-lg"></div>

                {/* TORQVA Logo Image */}
                <div className="relative rounded-xl overflow-hidden bg-[#030303] p-4 border border-[#1a1a1a]">
                  <img
                    src="/torqva-full-logo.svg"
                    alt="TORQVA Official Logo Badge"
                    className="w-full h-auto object-contain rounded-lg drop-shadow-xl"
                  />

                  {/* Highlights Grid */}
                  <div className="mt-3 pt-3 border-t border-[#1f1f1f] grid grid-cols-2 gap-2 text-[10px] font-black uppercase text-neutral-300">
                    <div className="flex items-center gap-1.5 bg-[#0f0f0f] p-2 rounded-md border border-[#222]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>Virgin ABS Mold</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#0f0f0f] p-2 rounded-md border border-[#222]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>OEM Dimension</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#0f0f0f] p-2 rounded-md border border-[#222]">
                      <Award className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>UV Gloss Paint</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#0f0f0f] p-2 rounded-md border border-[#222]">
                      <Zap className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>Fast Logistics</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Quick Bike Brand Selector Strip */}
        <div className="pt-6 border-t border-[#1f1f1f] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-black uppercase text-neutral-400 tracking-wider">
            Explore Spare Parts By Bike Brand:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {brandLogos.map((b, idx) => (
              <Link
                key={idx}
                to={`/bike-models?brand=${b.query}`}
                className="px-3.5 py-1.5 bg-[#121212] hover:bg-[#D71920] border border-[#222222] hover:border-[#D71920] text-neutral-300 hover:text-white text-xs font-extrabold uppercase rounded-md transition-all cursor-pointer shadow-sm"
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

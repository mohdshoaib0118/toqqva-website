import React from 'react';
import { ShieldCheck, Crosshair, Layers, Store, Zap, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const WhyToqqva = () => {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-[#E31B23]" />,
      title: "100% Virgin Grade ABS Plastic",
      description: "We use only pure primary polymer granules—never recycled scrap. Delivers high impact resistance and prevents brittleness during extreme road vibrations."
    },
    {
      icon: <Crosshair className="w-6 h-6 text-[#E31B23]" />,
      title: "Precision 1:1 OEM Fitment",
      description: "3D laser-scanned mounting points with pre-drilled screw holes aligned to original factory tolerances. No forceful bending or retrofitting required."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#E31B23]" />,
      title: "Dual Polyurethane UV Coating",
      description: "Coated with dual-layer UV resistant lacquer to prevent paint fading, yellowing, or peeling under intense tropical sunlight and rain."
    },
    {
      icon: <Store className="w-6 h-6 text-[#E31B23]" />,
      title: "Pan-India B2B Dealer Network",
      description: "Direct wholesale prices for spare parts stockists, mechanics, and regional distributors with GST-compliant billing and express dispatch."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#E31B23]" />,
      title: "Instant Stock & Part Lookup",
      description: "Connect directly with our factory inventory desk on WhatsApp for immediate availability checks, fitment verification, and quotes."
    }
  ];

  return (
    <section className="py-20 bg-[#07080A] border-b border-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-black uppercase tracking-widest text-[#E31B23] font-tech flex items-center justify-center gap-2">
            <span>// MANUFACTURING EXCELLENCE STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight font-heading">
            Why Choose {siteConfig.brandName}?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-body">
            Engineered replacement plastic body parts built to OEM standards for workshops, retailers, and two-wheeler riders.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0F1117] border border-[#222734] hover:border-[#E31B23]/70 p-6 rounded-xl space-y-4 transition-all duration-300 group hover:shadow-xl hover:shadow-red-950/20"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#171A23] border border-[#222734] group-hover:border-[#E31B23] rounded-lg transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-black uppercase text-white group-hover:text-[#E31B23] transition-colors font-heading">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Technical Material Advantage Card */}
          <div className="bg-[#0F1117] border border-[#E31B23]/50 p-6 rounded-xl flex flex-col justify-between space-y-5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E31B23]/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="text-xs font-black text-[#E31B23] uppercase tracking-wider font-tech">
                MATERIAL BENCHMARK
              </div>
              <h4 className="text-xl font-black text-white uppercase mt-1 font-heading">
                VIRGIN ABS VS RECYCLED PLASTIC
              </h4>
            </div>

            <div className="space-y-2.5 border-t border-[#1A1F2C] pt-4 font-tech">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Impact Absorption
                </span>
                <span className="text-emerald-400 font-black">HIGH (TORQVA)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sun Paint Durability
                </span>
                <span className="text-emerald-400 font-black">5+ YEARS</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-bold flex items-center gap-2 font-body">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  Vibration Cracking
                </span>
                <span className="text-emerald-400 font-black">0% INCIDENCE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

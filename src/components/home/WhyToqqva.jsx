import React from 'react';
import { ShieldCheck, Crosshair, Layers, Store, Zap, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const WhyToqqva = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D71920]" />,
      title: "Premium Quality Material",
      description: "Manufactured using high-grade ABS & PC composite plastics for superior flexibility, glossy finish, and high impact resistance."
    },
    {
      icon: <Crosshair className="w-6 h-6 text-[#D71920]" />,
      title: "Reliable Fitment",
      description: "Molded according to original manufacturer specifications, ensuring accurate screw hole positioning and gap-free alignment."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#D71920]" />,
      title: "Wide Product Range",
      description: "Comprehensive catalogue covering front visors, front & rear mudguards, side panels, tail cowls, and scooter nose panels."
    },
    {
      icon: <Store className="w-6 h-6 text-[#D71920]" />,
      title: "Dealer & Trade Supply",
      description: "Direct wholesale distribution, trade support for distributors, stockists, and retail spare part outlets across India."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#D71920]" />,
      title: "Fast WhatsApp Desk",
      description: "Direct instant quotation desk on WhatsApp for quick part lookup, stock confirmation, and bulk order placing."
    }
  ];

  return (
    <section className="py-16 bg-[#0B0B0B] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#D71920]">
            The TORQVA Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Why Choose {siteConfig.brandName}?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Built to provide reliable two-wheeler replacement body parts for mechanics, dealers, and riders across India.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-[#242424] hover:border-[#D71920]/60 p-6 rounded-sm space-y-3 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#050505] border border-[#242424] group-hover:border-[#D71920] rounded-sm transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold uppercase text-white group-hover:text-[#D71920] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Quick Stats Box */}
          <div className="bg-gradient-to-br from-[#141414] to-[#0D0D0D] border border-[#D71920]/40 p-6 rounded-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
                SUPPLIER OF PREMIUM QUALITY
              </div>
              <h4 className="text-lg font-black text-white uppercase mt-1">
                TWO WHEELER PLASTIC BODY PARTS
              </h4>
            </div>

            <div className="space-y-2 border-t border-[#242424] pt-3">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D71920]" />
                <span>100+ Compatible Models</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D71920]" />
                <span>Vibration Dampened Molding</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D71920]" />
                <span>Ready Stock Availability</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

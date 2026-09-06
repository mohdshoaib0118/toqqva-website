import React, { useState } from 'react';
import { MessageCircle, Phone, X, ChevronUp, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-5 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="bg-[#0c0c0c] border border-[#262626] p-4 rounded-xl shadow-2xl w-72 text-white space-y-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#D71920]">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Support Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-neutral-300 leading-relaxed">
            Connect directly with TORQVA sales team for wholesale pricing, catalogue lookup, and order placement:
          </p>

          {/* Line 1: Primary Call */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#D71920] rounded-lg transition-all group"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-[#D71920]/20 text-[#D71920] rounded-md group-hover:bg-[#D71920] group-hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase text-neutral-400">Primary Phone Line</div>
              <div className="text-xs font-black text-white">{siteConfig.displayPhone}</div>
            </div>
          </a>

          {/* Line 2: WhatsApp / Alternate Sales */}
          <a
            href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to request wholesale rates.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] hover:border-green-600 rounded-lg transition-all group"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 text-green-500 rounded-md group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase text-neutral-400">WhatsApp & Secondary Desk</div>
              <div className="text-xs font-black text-white">{siteConfig.displayWhatsapp}</div>
            </div>
          </a>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#D71920] to-[#E31B23] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20 shadow-red-950/50"
        aria-label="Direct Phone & WhatsApp Hotline"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">Fast Contact</span>
        <span className="w-2.5 h-2.5 bg-green-400 border-2 border-[#050505] rounded-full animate-ping"></span>
      </button>

    </div>
  );
};

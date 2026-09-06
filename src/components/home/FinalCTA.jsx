import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-[#070707] border-b border-[#1f1f1f] overflow-hidden">
      {/* High-Tech Background Glowing FX */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D71920]/15 blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121212] border border-[#D71920]/60 rounded-full shadow-lg">
          <Sparkles className="w-4 h-4 text-[#D71920]" />
          <span className="text-xs font-black uppercase tracking-widest text-white">
            Ready to Partner With TORQVA?
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white italic font-sans leading-tight">
          Get Wholesale Pricing & Stock Availability Today
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Whether you are a spare parts distributor, retail workshop owner, or motorcycle mechanic, our sales team is ready to assist with rapid WhatsApp quotations and order dispatches.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to request wholesale rates for your plastic body parts.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D71920] to-[#E31B23] hover:from-[#E31B23] hover:to-[#FF1E27] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-red-950/40 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp ({siteConfig.displayWhatsapp})</span>
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#121212] hover:bg-[#1a1a1a] border border-[#262626] hover:border-neutral-500 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5 text-[#D71920]" />
            <span>Call ({siteConfig.displayPhone})</span>
          </a>

          <Link
            to="/contact#dealer-enquiry"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#050505] hover:bg-[#121212] border border-[#242424] text-neutral-300 hover:text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors"
          >
            <span>Dealer Enquiry Form</span>
            <ArrowRight className="w-4 h-4 text-[#D71920]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

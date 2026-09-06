import React from 'react';
import { ShieldCheck, CheckCircle2, MessageCircle, Phone, Award, Zap, Building } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { TorqvaLogo } from '../components/common/TorqvaLogo';

export const AboutPage = () => {
  return (
    <div className="pt-10 pb-16 bg-[#050505] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#D71920]/40 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#D71920]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-white">
                BRAND PHILOSOPHY & MANUFACTURING
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic font-sans leading-tight">
              Engineered Around Every Ride
            </h1>

            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">{siteConfig.brandName}</strong> is dedicated to manufacturing and supplying premium quality two-wheeler plastic body parts for the Indian aftermarket. From front visors and mudguards to side panels, tail cowls, and scooter nose aprons, every part is engineered to deliver reliable everyday riding performance.
              </p>
              <p>
                We understand that motorcycle body parts require accurate mounting hole alignment, flexibility to absorb road vibrations, and durable UV-protected paint coating that stands up to harsh weather. Our focus is on precision molding and consistent high quality.
              </p>
              <p>
                Whether you are a spare parts distributor managing bulk inventory, a retail shop owner stocking fast-moving cowls, or a mechanic looking for an exact replacement fit, TORQVA provides a reliable product range backed by fast inquiry desk support.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to learn more about dealership opportunities.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {siteConfig.displayWhatsapp}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#121212] border border-[#242424] text-neutral-200 hover:text-white font-black text-xs uppercase tracking-wider rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#D71920]" />
                <span>Call: {siteConfig.displayPhone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0e0e0e] border border-[#242424] p-5 rounded-2xl shadow-2xl relative space-y-4">
            <TorqvaLogo variant="full" showLink={false} />

            <div className="p-4 bg-[#050505] border border-[#222222] rounded-xl space-y-1.5 text-center">
              <div className="text-xs font-black uppercase text-white">
                SUPPLIER OF PREMIUM QUALITY
              </div>
              <div className="text-xs text-[#D71920] font-black uppercase tracking-wider">
                // TWO WHEELER PLASTIC BODY PARTS //
              </div>
            </div>
          </div>
        </div>

        {/* Core Commitments */}
        <div className="space-y-6 pt-6 border-t border-[#1f1f1f]">
          <h2 className="text-2xl font-black uppercase text-white tracking-tight font-sans">
            Our Core Quality Commitments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Material Standards", desc: "Virgin ABS & high polycarbonate composite polymers for crack resistance." },
              { title: "Precision Geometry", desc: "Molded from verified OEM dimensions to prevent mounting gaps." },
              { title: "Paint & Surface Finish", desc: "UV resistant multi-layer coating preventing sun discoloration." },
              { title: "Trade & Bulk Support", desc: "Structured wholesale rates and bulk transit carton packing." },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0e0e0e] border border-[#242424] p-6 rounded-xl space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#D71920]" />
                <h3 className="text-sm font-black uppercase text-white">{item.title}</h3>
                <p className="text-xs text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

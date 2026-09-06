import React, { useState } from 'react';
import { BikeFinder } from '../components/catalogue/BikeFinder';
import { ProductDetailsModal } from '../components/catalogue/ProductDetailsModal';
import { bikeBrandsData } from '../data/bikeModelsData';
import { ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { siteConfig } from '../config/siteConfig';

export const BikeModelsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-10 pb-16 bg-[#050505] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="border-b border-[#242424] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#D71920]/40 rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">
              Compatibility Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-2">
            Find Parts For Your Bike
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
            Select your specific two-wheeler manufacturer and model to filter matching front visors, mudguards, side cowls, and scooter nose panels.
          </p>
        </div>

        {/* Bike Finder Interactive Tool */}
        <BikeFinder onSelectProduct={(p) => setSelectedProduct(p)} />

        {/* Supported Brands Overview Grid */}
        <div className="space-y-6 pt-6 border-t border-[#242424]">
          <h2 className="text-xl font-black uppercase text-white tracking-tight">
            Supported Manufacturers & Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikeBrandsData.map((brand) => (
              <div
                key={brand.id}
                className="bg-[#0D0D0D] border border-[#242424] p-6 rounded-sm space-y-4 hover:border-[#D71920]/50 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#242424] pb-3">
                  <h3 className="text-lg font-black uppercase text-white">{brand.name}</h3>
                  <span className="px-2 py-0.5 bg-[#D71920] text-white font-mono text-[10px] font-bold rounded-sm">
                    {brand.code}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-neutral-300">
                  {brand.models.map((m) => (
                    <li key={m.id} className="flex items-center justify-between py-1 border-b border-[#242424]/40">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920]" />
                        <span className="font-semibold text-white">{m.name}</span>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">{m.yearRange}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I need plastic body parts for ${brand.name} bikes.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 bg-[#141414] hover:bg-[#242424] text-neutral-200 hover:text-white text-xs font-bold uppercase rounded-sm border border-[#242424] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>Enquire {brand.name} Parts</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

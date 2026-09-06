import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { useEnquiry } from '../../context/EnquiryContext';

export const MobileBottomBar = () => {
  const { setIsDrawerOpen, totalItemsCount } = useEnquiry();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060606]/95 backdrop-blur-xl border-t border-[#222222] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button - Phone 1 */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#121212] border border-[#242424] text-white rounded-lg active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#D71920]" />
          <span className="text-[10px] font-black uppercase tracking-wider mt-1">Call Desk</span>
        </a>

        {/* WhatsApp Button - Phone 2 */}
        <a
          href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to request product pricing.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-gradient-to-r from-[#D71920] to-[#E31B23] text-white font-black rounded-lg shadow-lg active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="text-[10px] font-black uppercase tracking-wider mt-1">WhatsApp</span>
        </a>

        {/* Enquiry Basket */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="relative flex flex-col items-center justify-center py-2 px-1 bg-[#121212] border border-[#242424] text-white rounded-lg active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4 text-neutral-300" />
          <span className="text-[10px] font-black uppercase tracking-wider mt-1">Enquiry ({totalItemsCount})</span>
          {totalItemsCount > 0 && (
            <span className="absolute top-1.5 right-3 w-2 h-2 rounded-full bg-[#D71920] animate-ping"></span>
          )}
        </button>

      </div>
    </div>
  );
};

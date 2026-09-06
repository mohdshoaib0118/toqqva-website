import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';
import { QuantitySelector } from './QuantitySelector';
import { getMultiProductWhatsAppUrl } from '../../utils/whatsapp';
import { siteConfig } from '../../config/siteConfig';

export const EnquiryList = () => {
  const { enquiryItems, isDrawerOpen, setIsDrawerOpen, updateQuantity, removeFromEnquiry, clearEnquiry, totalItemsCount } = useEnquiry();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0B0B0B] border-l border-[#242424] shadow-2xl flex flex-col justify-between z-10">
        
        {/* Drawer Header */}
        <div className="p-5 bg-[#050505] border-b border-[#242424] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center bg-[#D71920] text-white rounded-sm">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black uppercase text-white tracking-wider">
                Enquiry List ({totalItemsCount})
              </h3>
              <div className="text-[10px] text-[#D71920] font-bold uppercase tracking-wider">
                SELECTED PARTS FOR QUOTATION
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white bg-[#141414] border border-[#242424] rounded-sm transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {enquiryItems.length > 0 ? (
            enquiryItems.map((item) => {
              const p = item.product;
              return (
                <div
                  key={p.id}
                  className="bg-[#141414] border border-[#242424] p-3.5 rounded-sm flex items-start gap-3 relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 bg-[#050505] border border-[#242424] rounded-sm overflow-hidden shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-1 pr-6">
                    <div className="text-[10px] font-mono font-bold text-[#D71920]">
                      SKU: {p.sku || p.partCode || 'TQ-PART'}
                    </div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{p.name}</h4>
                    <div className="text-[11px] text-neutral-400">
                      Fits: <span className="text-neutral-200 font-semibold">{p.bikeModel}</span>
                    </div>

                    {/* Quantity & Status Row (No Prices) */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-[10px] font-bold uppercase text-neutral-400 bg-[#0a0a0a] px-2 py-0.5 rounded border border-[#222222]">
                        Wholesale Quote
                      </div>

                      <QuantitySelector
                        quantity={item.quantity}
                        onChange={(q) => updateQuantity(p.id, q)}
                      />
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromEnquiry(p.id)}
                    className="absolute top-3 right-3 text-neutral-500 hover:text-[#D71920] transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-[#141414] border border-[#242424] flex items-center justify-center rounded-full text-neutral-500">
                <ShoppingBag className="w-6 h-6 text-[#D71920]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase">Your Enquiry List is Empty</h4>
                <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
                  Browse products and click "Add to Enquiry" to build your bulk quotation list.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {enquiryItems.length > 0 && (
          <div className="p-5 bg-[#050505] border-t border-[#242424] space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Total Items Selected:</span>
                <span className="font-black text-white">{totalItemsCount} pcs</span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Quotation Mode:</span>
                <span className="font-black text-[#D71920] uppercase">Direct Trade Quote</span>
              </div>
              <p className="text-[10px] text-neutral-400 pt-1">
                *Click below to send your selected parts list directly to our WhatsApp hotline for wholesale rate quotation.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={getMultiProductWhatsAppUrl(enquiryItems)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-sm shadow-lg shadow-red-950/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>SEND ENQUIRY ON WHATSAPP ({enquiryItems.length} PARTS)</span>
              </a>

              <button
                onClick={clearEnquiry}
                className="w-full text-center text-xs font-semibold text-neutral-500 hover:text-neutral-300 py-1 cursor-pointer"
              >
                Clear Entire List
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

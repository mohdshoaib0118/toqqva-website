import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, ShieldCheck, Share2, Plus, Eye, Scale } from 'lucide-react';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';
import { siteConfig } from '../../config/siteConfig';
import { useEnquiry } from '../../context/EnquiryContext';
import { CopyButton } from '../common/CopyButton';
import { QuantitySelector } from '../enquiry/QuantitySelector';
import { RelatedProducts } from './RelatedProducts';
import { addRecentlyViewedId } from '../../utils/storage';
import { analytics } from '../analytics/analytics';

export const ProductDetailsModal = ({ product, onClose }) => {
  const { addToEnquiry, toggleCompare, compareList } = useEnquiry();
  const [selectedImg, setSelectedImg] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [shareMsg, setShareMsg] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedImg(product.image);
      addRecentlyViewedId(product.id);
      analytics.productView(product);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const isCompared = compareList.some((p) => p.id === product.id);

  const handleShare = async () => {
    const shareUrl = window.location.origin + `/products/${product.slug || product.id}`;
    const shareData = {
      title: `${product.name} | TORQVA Spare Parts`,
      text: `Check out ${product.name} (Fits: ${product.bikeModel}) on TORQVA:`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(`${shareData.text} ${shareUrl}`);
      setShareMsg('Product link copied!');
      setTimeout(() => setShareMsg(''), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-lg" onClick={onClose}></div>

      {/* Main Modal Card */}
      <div className="relative bg-[#0d0d0d] border border-[#262626] w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-[#222222]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#D71920] text-white font-mono font-black text-[10px] uppercase rounded-md shadow-md">
              SKU: {product.sku || product.partCode || 'TQ-PART'}
            </span>
            <CopyButton textToCopy={product.sku || product.partCode} label="Copy SKU" />
            <span className="text-xs text-neutral-400 font-extrabold uppercase tracking-wider">
              {product.categoryName || product.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] border border-[#262626] text-neutral-300 hover:text-white text-xs font-black uppercase rounded-md transition-colors"
              title="Share product"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white bg-[#141414] border border-[#262626] rounded-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column: Product Image Gallery */}
            <div className="space-y-4">
              <div
                onClick={() => setIsZoomOpen(true)}
                className="aspect-[4/3] bg-[#141414] border border-[#262626] rounded-lg overflow-hidden relative cursor-zoom-in group shadow-inner"
              >
                <img
                  src={selectedImg || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md p-2 rounded-md text-neutral-300 group-hover:text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Thumbnail Bar */}
              {product.images && product.images.length > 1 && (
                <div className="flex items-center gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(img)}
                      className={`w-16 h-16 bg-[#141414] border rounded-md overflow-hidden transition-all ${
                        selectedImg === img ? 'border-[#D71920] ring-2 ring-[#D71920]' : 'border-[#262626] opacity-70'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Share confirmation banner */}
              {shareMsg && (
                <div className="p-2.5 bg-green-950/80 border border-green-800 text-green-400 text-xs font-bold text-center rounded-md">
                  {shareMsg}
                </div>
              )}

              {/* Quality & Availability Bar */}
              <div className="bg-[#121212] p-3 border border-[#262626] rounded-md flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-extrabold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#D71920]" />
                  <span>Exact OEM Fitment Guarantee</span>
                </div>

                <span className="px-2.5 py-0.5 bg-green-950 text-green-400 text-[10px] font-black uppercase rounded-md border border-green-800">
                  {product.availability || 'Available'}
                </span>
              </div>
            </div>

            {/* Right Column: Specs, Fitment & Phone Enquiry */}
            <div className="space-y-5">
              <div>
                <div className="text-xs font-black text-[#D71920] uppercase tracking-wider">
                  Fits: {product.bikeModel} ({product.bikeBrand})
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1 leading-snug">
                  {product.name}
                </h2>

                <div className="flex items-center justify-between mt-3 pb-3 border-b border-[#222222]">
                  <div>
                    <div className="text-[10px] font-black text-[#D71920] uppercase tracking-wider">Wholesale Quotation</div>
                    <div className="text-sm font-extrabold text-white">Price Available On Request</div>
                  </div>

                  <button
                    onClick={() => toggleCompare(product)}
                    className={`flex items-center gap-1 text-xs font-bold uppercase px-2.5 py-1 rounded-md border ${
                      isCompared ? 'bg-[#D71920]/20 border-[#D71920] text-[#D71920]' : 'bg-[#141414] border-[#262626] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>{isCompared ? 'In Compare' : 'Compare'}</span>
                  </button>
                </div>

                {product.moq && (
                  <div className="text-xs text-neutral-400 font-semibold mt-2">
                    Minimum Order Quantity (MOQ): <span className="text-white font-bold">{product.moq} pcs</span>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-[#121212] p-3 border border-[#222222] rounded-md">
                {product.description}
              </p>

              {/* Direct Call / WhatsApp Buttons for both numbers */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase text-neutral-300">
                    Order Quantity:
                  </label>
                  <QuantitySelector
                    quantity={quantity}
                    onChange={(q) => setQuantity(q)}
                    min={1}
                  />
                </div>

                <button
                  onClick={() => addToEnquiry(product, quantity)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-md shadow-lg shadow-red-950/30 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Enquiry List ({quantity})</span>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={getProductWhatsAppUrl(product, quantity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#141414] border border-[#262626] hover:border-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500 fill-green-500/20" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#141414] border border-[#262626] hover:border-neutral-500 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D71920]" />
                    <span>Call Sales Desk</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Fitment Table */}
          {product.compatibility && product.compatibility.length > 0 && (
            <div className="space-y-3 pt-6 border-t border-[#222222]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#D71920] pl-3">
                Fitment & Compatibility Matrix
              </h3>
              
              <div className="bg-[#121212] border border-[#262626] rounded-md overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#050505] border-b border-[#262626] text-neutral-400 font-bold uppercase">
                      <th className="py-2.5 px-4">Brand</th>
                      <th className="py-2.5 px-4">Model</th>
                      <th className="py-2.5 px-4">Variant</th>
                      <th className="py-2.5 px-4">Supported Years</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#222222] text-neutral-300">
                    {product.compatibility.map((fit, idx) => (
                      <tr key={idx} className="hover:bg-[#050505]/50">
                        <td className="py-2.5 px-4 font-bold text-white">{fit.brand}</td>
                        <td className="py-2.5 px-4 font-bold text-[#D71920]">{fit.model}</td>
                        <td className="py-2.5 px-4">{fit.variant || 'Standard'}</td>
                        <td className="py-2.5 px-4 font-mono">{fit.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Related Products */}
          <RelatedProducts currentProduct={product} onSelectProduct={(p) => setSelectedImg(p.image)} />

        </div>

      </div>

      {/* Fullscreen Image Zoom Lightbox */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-4 right-4 p-2 text-white bg-[#141414] border border-[#262626] rounded-md"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={selectedImg || product.image} alt={product.name} className="max-w-full max-h-[85vh] object-contain rounded-md" />
        </div>
      )}
    </div>
  );
};

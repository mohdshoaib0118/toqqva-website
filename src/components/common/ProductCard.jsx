import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Plus, Check, ShieldCheck, Scale, MessageCircle } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';
import { analytics } from '../analytics/analytics';
import { ImageWithFallback } from './ImageWithFallback';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';

export const ProductCard = ({ product, onSelect }) => {
  const { addToEnquiry, enquiryItems, compareList, toggleCompare } = useEnquiry();

  const isEnquired = enquiryItems.some((item) => item.product.id === product.id);
  const isCompared = compareList.some((item) => item.id === product.id);

  const handleCardClick = (e) => {
    if (onSelect) {
      e.preventDefault();
      analytics.productView(product);
      onSelect(product);
    }
  };

  return (
    <div className="group relative bg-gradient-to-b from-[#0e0e0e] to-[#070707] border border-[#222222] hover:border-[#D71920] transition-all duration-300 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-[#D71920]/20">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-[#121212] overflow-hidden">
        <Link to={`/products/${product.slug || product.id}`} onClick={handleCardClick}>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            category={product.categoryName || product.category}
            fallbackTitle={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </Link>

        {/* Ambient Top Shadow Overlay */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#333333] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-neutral-200 rounded-md">
          {product.categoryName || product.category}
        </div>

        {/* SKU Badge */}
        <div className="absolute top-3 right-3 bg-[#D71920] text-white px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase rounded-md shadow-md">
          {product.sku || product.partCode || 'TQ-PART'}
        </div>

        {/* MOQ Badge */}
        {product.moq && (
          <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md border border-[#333333] px-2.5 py-0.5 text-[9px] font-bold text-neutral-300 rounded-md">
            MOQ: <span className="text-white font-black">{product.moq} pcs</span>
          </div>
        )}

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 p-4 pointer-events-none group-hover:pointer-events-auto">
          <Link
            to={`/products/${product.slug || product.id}`}
            onClick={handleCardClick}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white text-black hover:bg-[#D71920] hover:text-white text-xs font-black uppercase tracking-wider rounded-md transition-colors shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </Link>

          <a
            href={getProductWhatsAppUrl(product, 1)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#D71920] text-white hover:bg-[#E31B23] text-xs font-black uppercase tracking-wider rounded-md transition-colors shadow-lg"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Get Quote</span>
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Fitment Header */}
          <div className="flex items-center justify-between text-[11px] font-bold text-[#D71920] uppercase tracking-wide">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Fits: {product.bikeModel}</span>
            </div>
            
            {/* Compare Toggle */}
            <button
              onClick={() => toggleCompare(product)}
              className={`p-1 text-[10px] uppercase font-bold flex items-center gap-1 transition-colors ${
                isCompared ? 'text-[#D71920]' : 'text-neutral-500 hover:text-neutral-300'
              }`}
              title="Compare part specs"
            >
              <Scale className="w-3 h-3" />
              <span>{isCompared ? 'Comparing' : 'Compare'}</span>
            </button>
          </div>

          {/* Product Title */}
          <h3 className="mt-1.5">
            <Link
              to={`/products/${product.slug || product.id}`}
              onClick={handleCardClick}
              className="text-sm font-extrabold text-white group-hover:text-[#D71920] transition-colors line-clamp-2 leading-snug"
            >
              {product.name}
            </Link>
          </h3>
        </div>

        {/* Pricing Action Row (No Prices Displayed) */}
        <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
          <div>
            <div className="text-[10px] font-extrabold text-[#D71920] uppercase tracking-wider">
              Wholesale Rate
            </div>
            <div className="text-xs font-bold text-neutral-300">
              Enquire For Best Quote
            </div>
          </div>

          <button
            onClick={() => addToEnquiry(product, 1)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase rounded-md transition-all shadow-md ${
              isEnquired
                ? 'bg-green-950 border border-green-800 text-green-400'
                : 'bg-[#181818] hover:bg-[#D71920] border border-[#2a2a2a] hover:border-[#D71920] text-white'
            }`}
          >
            {isEnquired ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-[#D71920] group-hover:text-white" />
                <span>Add List</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

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
    <div className="group relative bg-[#0F1117] border border-[#222734] hover:border-[#E31B23] transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-red-950/40 hover:-translate-y-1">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-[#07080A] overflow-hidden">
        <Link to={`/products/${product.slug || product.id}`} onClick={handleCardClick}>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            category={product.categoryName || product.category}
            fallbackTitle={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </Link>

        {/* Ambient Overlay */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#07080A]/90 to-transparent pointer-events-none"></div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-[#07080A]/90 backdrop-blur-md border border-[#222734] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-neutral-200 rounded-md font-tech">
          {product.categoryName || product.category}
        </div>

        {/* SKU Badge */}
        <div className="absolute top-3 right-3 bg-[#E31B23] text-white px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase rounded-md shadow-md font-tech">
          {product.sku || product.partCode || 'TQ-PART'}
        </div>

        {/* Quality Material Badge */}
        <div className="absolute bottom-3 left-3 bg-[#07080A]/90 backdrop-blur-md border border-[#222734] px-2 py-0.5 text-[9px] font-bold text-emerald-400 rounded-md font-tech flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>100% Virgin ABS</span>
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-[#07080A]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 p-4 pointer-events-none group-hover:pointer-events-auto">
          <Link
            to={`/products/${product.slug || product.id}`}
            onClick={handleCardClick}
            className="flex items-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-[#E31B23] hover:text-white text-xs font-extrabold uppercase tracking-wider rounded-lg transition-colors shadow-lg font-display cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </Link>

          <a
            href={getProductWhatsAppUrl(product, 1)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-[#E31B23] text-white hover:bg-[#FF2A35] text-xs font-extrabold uppercase tracking-wider rounded-lg transition-colors shadow-lg font-display cursor-pointer"
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
          <div className="flex items-center justify-between text-[11px] font-bold text-[#E31B23] uppercase tracking-wide font-tech">
            <div className="flex items-center gap-1 min-w-0">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Fits: {product.bikeModel}</span>
            </div>
            
            {/* Compare Toggle */}
            <button
              onClick={() => toggleCompare(product)}
              className={`p-1 text-[10px] uppercase font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                isCompared ? 'text-[#E31B23]' : 'text-neutral-500 hover:text-neutral-300'
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
              className="text-sm font-extrabold text-white group-hover:text-[#E31B23] transition-colors line-clamp-2 leading-snug font-heading"
            >
              {product.name}
            </Link>
          </h3>
        </div>

        {/* Pricing Action Row */}
        <div className="pt-3 border-t border-[#1A1F2C] flex items-center justify-between font-tech">
          <div>
            <div className="text-[10px] font-black text-[#E31B23] uppercase tracking-wider">
              Wholesale Rate
            </div>
            <div className="text-xs font-black text-neutral-200">
              {product.price ? `₹${product.price}` : 'Enquire For Best Price'}
            </div>
          </div>

          <button
            onClick={() => addToEnquiry(product, 1)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold uppercase rounded-lg transition-all shadow-md cursor-pointer font-display ${
              isEnquired
                ? 'bg-emerald-950 border border-emerald-800 text-emerald-400'
                : 'bg-[#171A23] hover:bg-[#E31B23] border border-[#222734] hover:border-[#E31B23] text-white'
            }`}
          >
            {isEnquired ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-[#E31B23] group-hover:text-white" />
                <span>Add List</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

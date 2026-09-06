import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ShieldCheck, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { productsData } from '../../data/productsData';
import { categoriesData } from '../../data/categoriesData';
import { bikeBrandsData } from '../../data/bikeModelsData';
import { useEnquiry } from '../../context/EnquiryContext';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';

export const GlobalSearchModal = ({ isOpen, onClose }) => {
  const { addToEnquiry } = useEnquiry();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  const matchingProducts = searchQuery
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.bikeModel.toLowerCase().includes(searchQuery) ||
          p.bikeBrand.toLowerCase().includes(searchQuery) ||
          (p.sku && p.sku.toLowerCase().includes(searchQuery))
      )
    : productsData.slice(0, 4);

  const matchingCategories = searchQuery
    ? categoriesData.filter((c) => c.name.toLowerCase().includes(searchQuery))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0F1117] border border-[#222734] max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden space-y-0">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-[#222734] px-4 py-3.5 bg-[#171A23]">
          <Search className="w-5 h-5 text-[#E31B23] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search part name, bike model (e.g. Activa, Pulsar, Splendor), or SKU..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-white text-sm font-bold placeholder-neutral-500 focus:outline-none pl-3 pr-8 font-tech"
          />
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded-lg bg-[#0F1117] border border-[#222734] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 font-body">
          
          {/* Quick Categories If Matched */}
          {matchingCategories.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-[#E31B23] font-tech">
                Matching Categories
              </div>
              <div className="flex flex-wrap gap-2">
                {matchingCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.slug}`}
                    onClick={onClose}
                    className="px-3 py-1.5 bg-[#171A23] hover:bg-[#E31B23] text-neutral-200 hover:text-white text-xs font-bold uppercase rounded-lg border border-[#222734] transition-all font-tech"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matching Products Header */}
          <div className="flex items-center justify-between text-[11px] font-black uppercase text-neutral-400 font-tech">
            <span>{searchQuery ? `Matching Parts (${matchingProducts.length})` : 'Popular Part SKUs'}</span>
            <span className="text-[10px] text-neutral-500 font-mono">Press ESC to close</span>
          </div>

          {/* Product Items List */}
          {matchingProducts.length > 0 ? (
            <div className="space-y-2">
              {matchingProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-3 p-3 bg-[#171A23]/60 hover:bg-[#171A23] border border-[#222734] hover:border-[#E31B23] rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg bg-[#0F1117] border border-[#222734] shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-[#E31B23] font-bold">
                          {product.sku || 'TQ-PART'}
                        </span>
                        <span className="text-[9px] font-bold text-emerald-400 bg-[#0F1117] px-1.5 py-0.5 rounded border border-[#222734]">
                          Virgin ABS
                        </span>
                      </div>
                      <Link
                        to={`/products/${product.slug || product.id}`}
                        onClick={onClose}
                        className="text-xs font-bold text-white group-hover:text-[#E31B23] transition-colors truncate block font-heading"
                      >
                        {product.name}
                      </Link>
                      <div className="text-[10px] text-neutral-400 truncate font-tech">
                        Fits: {product.bikeModel}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 font-tech">
                    <button
                      onClick={() => {
                        addToEnquiry(product, 1);
                        onClose();
                      }}
                      className="px-3 py-1.5 bg-[#0F1117] hover:bg-[#E31B23] text-white text-[11px] font-bold uppercase rounded-lg border border-[#222734] transition-all cursor-pointer"
                    >
                      + Add
                    </button>
                    <a
                      href={getProductWhatsAppUrl(product, 1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#E31B23] text-white rounded-lg hover:bg-[#FF2A35] transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-neutral-400 space-y-2">
              <Search className="w-8 h-8 text-[#E31B23] mx-auto" />
              <div className="text-xs font-bold uppercase text-white font-heading">No matching parts found</div>
              <p className="text-[11px]">Try searching for 'Activa', 'Splendor', 'Visor', or 'Mudguard'.</p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 bg-[#0F1117] border-t border-[#222734] flex items-center justify-between text-xs text-neutral-400 font-tech">
          <div className="flex items-center gap-1.5 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>Direct Indian OEM Fitment Guarantee</span>
          </div>
          <Link
            to="/products"
            onClick={onClose}
            className="text-[11px] text-[#E31B23] font-bold uppercase flex items-center gap-1 hover:underline"
          >
            <span>Full Catalog</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </div>
  );
};

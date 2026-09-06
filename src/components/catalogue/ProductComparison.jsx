import React from 'react';
import { X, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const ProductComparison = () => {
  const { compareList, removeFromCompare, clearCompare, isCompareOpen, setIsCompareOpen, addToEnquiry } = useEnquiry();

  if (!isCompareOpen || compareList.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={() => setIsCompareOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#0D0D0D] border border-[#242424] w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-[#242424]">
          <div className="flex items-center gap-3">
            <span className="text-base font-black uppercase text-white tracking-wider">
              Compare Spare Parts ({compareList.length}/3)
            </span>
            <button
              onClick={clearCompare}
              className="text-xs text-neutral-400 hover:text-[#D71920] underline uppercase font-bold"
            >
              Clear All
            </button>
          </div>

          <button
            onClick={() => setIsCompareOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white bg-[#141414] border border-[#242424] rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#242424]">
                <th className="py-4 px-4 w-1/4 text-neutral-400 font-bold uppercase text-[11px]">Feature</th>
                {compareList.map((p) => (
                  <th key={p.id} className="py-4 px-4 w-1/4 align-top">
                    <div className="space-y-2 relative">
                      <button
                        onClick={() => removeFromCompare(p.id)}
                        className="absolute top-0 right-0 p-1 text-neutral-500 hover:text-[#D71920]"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="w-20 h-20 bg-[#141414] border border-[#242424] rounded-sm overflow-hidden mx-auto">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="text-xs font-bold text-white text-center line-clamp-2">{p.name}</div>
                      
                      <button
                        onClick={() => addToEnquiry(p, 1)}
                        className="w-full py-1.5 bg-[#D71920] hover:bg-[#E31B23] text-white text-[10px] font-bold uppercase rounded-sm flex items-center justify-center gap-1 shadow"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add to Enquiry</span>
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242424]/60 text-neutral-300">
              
              {/* SKU */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">SKU / Part Code</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-mono font-bold text-[#D71920]">
                    {p.sku || p.partCode || 'N/A'}
                  </td>
                ))}
              </tr>

              {/* Category */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">Category</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4 uppercase font-semibold text-white">
                    {p.categoryName || p.category}
                  </td>
                ))}
              </tr>

              {/* Compatible Bike */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">Bike Compatibility</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-semibold text-neutral-200">
                    {p.bikeModel} ({p.bikeBrand})
                  </td>
                ))}
              </tr>

              {/* Variant */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">Variant / Finish</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4 text-neutral-300">
                    {p.variant || 'Standard Gloss'}
                  </td>
                ))}
              </tr>

              {/* Wholesale Pricing */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">Wholesale Pricing</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-extrabold text-[#D71920] text-xs uppercase">
                    Quotation On Request
                  </td>
                ))}
              </tr>

              {/* MOQ */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">Minimum Order (MOQ)</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4 font-semibold text-neutral-300">
                    {p.moq ? `${p.moq} pcs` : 'No Minimum'}
                  </td>
                ))}
              </tr>

              {/* Availability */}
              <tr>
                <td className="py-3 px-4 font-bold text-neutral-400 uppercase text-[11px]">Availability</td>
                {compareList.map((p) => (
                  <td key={p.id} className="py-3 px-4">
                    <span className="px-2 py-0.5 bg-green-950 text-green-400 text-[10px] font-bold uppercase rounded-sm border border-green-800">
                      {p.availability || 'Available'}
                    </span>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

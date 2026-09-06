import React, { useState, useMemo } from 'react';
import { Search, Plus, MessageCircle, AlertCircle, ShieldCheck, Check, Download, Calculator, Filter, FileText } from 'lucide-react';
import { productsData } from '../../data/productsData';
import { categoriesData } from '../../data/categoriesData';
import { bikeBrandsData } from '../../data/bikeModelsData';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { useEnquiry } from '../../context/EnquiryContext';

export const RateListTable = ({ onSelectProduct }) => {
  const { addToEnquiry, enquiryItems } = useEnquiry();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [estimateQty, setEstimateQty] = useState(50);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const filteredRateList = useMemo(() => {
    return productsData
      .filter((item) => {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !query ||
          item.name.toLowerCase().includes(query) ||
          item.bikeModel.toLowerCase().includes(query) ||
          item.categoryName.toLowerCase().includes(query) ||
          (item.sku && item.sku.toLowerCase().includes(query));

        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory || item.category.startsWith(selectedCategory);
        const matchesBrand =
          selectedBrand === 'all' ||
          item.bikeBrand.toLowerCase() === selectedBrand.toLowerCase();

        return matchesQuery && matchesCategory && matchesBrand;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedCategory, selectedBrand]);

  const discountTier = useMemo(() => {
    if (estimateQty >= 200) return { discount: '20% Wholesale Rebate', badge: 'Tier 1 Wholesale' };
    if (estimateQty >= 50) return { discount: '12% Bulk Trade Discount', badge: 'Tier 2 Trade' };
    return { discount: 'Standard Factory Rate', badge: 'Retail Trade' };
  }, [estimateQty]);

  return (
    <section className="py-12 bg-[#07080A] min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Card */}
        <div className="bg-[#0F1117] border border-[#222734] p-6 sm:p-8 rounded-xl space-y-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E31B23]/15 border border-[#E31B23]/40 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#E31B23] font-tech">
                  OFFICIAL FACTORY PRICE DIRECTORY • 2026 EDITION
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-2 font-heading">
                TORQVA Wholesale Rate List
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 font-body mt-1 max-w-xl">
                Browse direct factory rates for motorcycle visors, mudguards, side panels, and scooter nose aprons across India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPdfModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#171A23] hover:bg-[#222734] text-white border border-[#222734] font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md font-display cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#E31B23]" />
                <span>Download Rate Sheet PDF</span>
              </button>

              <a
                href={getWhatsAppUrl(`Hello TORQVA team, I want to request the official 2026 wholesale rate list PDF.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E31B23] hover:bg-[#FF2A35] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-xl transition-all font-display cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Request WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* Wholesale Bulk Discount Estimator Strip */}
          <div className="bg-[#171A23] border border-[#222734] p-4 rounded-xl space-y-3 font-tech">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222734] pb-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-white">
                <Calculator className="w-4 h-4 text-[#E31B23]" />
                <span>B2B Wholesale Order Volume Estimator</span>
              </div>
              <div className="px-3 py-1 bg-[#E31B23] text-white text-[10px] font-black uppercase rounded font-tech">
                {discountTier.badge} ({discountTier.discount})
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-xs">
              <div>
                <label className="text-neutral-400 block mb-1">Target Order Quantity (Pieces):</label>
                <input
                  type="number"
                  min="10"
                  max="5000"
                  value={estimateQty}
                  onChange={(e) => setEstimateQty(Number(e.target.value))}
                  className="w-full bg-[#0F1117] border border-[#222734] text-white px-3 py-2 rounded-lg font-bold focus:border-[#E31B23] focus:outline-none"
                />
              </div>

              <div className="col-span-2 text-neutral-300 text-xs font-body">
                <span>Orders over <strong>50 pcs</strong> qualify for tiered trade pricing. Contact sales hotline <strong className="text-white">{siteConfig.displayPhone}</strong> for custom dealer terms.</span>
              </div>
            </div>
          </div>

          {/* Search and Filters Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-tech">
            <div className="relative">
              <input
                type="text"
                placeholder="Search part name, SKU, or bike model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#171A23] border border-[#222734] text-white text-xs font-bold py-3 pl-10 pr-4 rounded-lg focus:border-[#E31B23] focus:outline-none"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#171A23] border border-[#222734] text-white text-xs font-bold py-3 px-3 rounded-lg focus:border-[#E31B23] focus:outline-none cursor-pointer"
            >
              <option value="all">All Part Categories</option>
              {categoriesData.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>

            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-[#171A23] border border-[#222734] text-white text-xs font-bold py-3 px-3 rounded-lg focus:border-[#E31B23] focus:outline-none cursor-pointer"
            >
              <option value="all">All Bike Brands</option>
              {bikeBrandsData.map((b) => (
                <option key={b.id} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-[#0F1117] border border-[#222734] rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#171A23] border-b border-[#222734] text-neutral-300 font-black uppercase tracking-wider font-tech">
                <th className="py-4 px-4 text-[#E31B23]">SKU / Part Code</th>
                <th className="py-4 px-4">Part Description</th>
                <th className="py-4 px-4">Vehicle Model Fitment</th>
                <th className="py-4 px-4">Material / Finish</th>
                <th className="py-4 px-4">Factory Rate (INR)</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222734] text-neutral-300 font-body">
              {filteredRateList.map((item) => {
                const isEnquired = enquiryItems.some((i) => i.product.id === item.id);
                return (
                  <tr key={item.id} className="hover:bg-[#171A23]/60 transition-colors group">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E31B23]">
                      {item.sku || item.partCode || 'TQ-PART'}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white group-hover:text-[#E31B23] transition-colors font-heading text-sm">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-neutral-300 font-tech">
                      {item.bikeModel} ({item.bikeBrand})
                    </td>
                    <td className="py-3.5 px-4 font-tech">
                      <span className="px-2.5 py-0.5 bg-[#171A23] text-emerald-400 font-bold rounded border border-[#222734]">
                        100% Virgin ABS
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-black text-white font-tech text-sm">
                      {item.price ? `₹${item.price}.00` : 'Enquire Rate'}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => addToEnquiry(item, 1)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold uppercase rounded-lg transition-all cursor-pointer font-display ${
                          isEnquired ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-[#E31B23] hover:bg-[#FF2A35] text-white'
                        }`}
                      >
                        {isEnquired ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>{isEnquired ? 'Added' : 'Add to Enquiry'}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-3 font-body">
          {filteredRateList.map((item) => {
            const isEnquired = enquiryItems.some((i) => i.product.id === item.id);
            return (
              <div key={item.id} className="bg-[#0F1117] border border-[#222734] p-4 rounded-xl space-y-3 shadow-md">
                <div className="flex items-center justify-between font-tech">
                  <span className="text-[10px] font-mono font-bold text-[#E31B23] bg-[#E31B23]/15 px-2.5 py-0.5 rounded">
                    {item.sku || item.partCode}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-[#171A23] px-2 py-0.5 rounded border border-[#222734]">
                    100% Virgin ABS
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{item.name}</h4>
                  <div className="text-xs text-neutral-400 mt-0.5 font-tech">
                    Fits: <span className="text-neutral-200 font-semibold">{item.bikeModel}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#222734] flex items-center justify-between font-tech">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-bold">Wholesale Unit Rate</div>
                    <div className="text-sm font-black text-white">{item.price ? `₹${item.price}.00` : 'Enquire Rate'}</div>
                  </div>

                  <button
                    onClick={() => addToEnquiry(item, 1)}
                    className={`px-4 py-2 text-xs font-extrabold uppercase rounded-lg flex items-center gap-1.5 cursor-pointer font-display ${
                      isEnquired ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-[#E31B23] text-white'
                    }`}
                  >
                    {isEnquired ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{isEnquired ? 'Added' : 'Add to Enquiry'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* PDF Download Simulation Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0F1117] border border-[#222734] max-w-md w-full p-6 rounded-2xl shadow-2xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E31B23]/20 text-[#E31B23] rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase text-white font-heading">
                  TORQVA Rate Sheet 2026
                </h3>
                <p className="text-xs text-neutral-400 font-tech">Verified Official Factory Price Catalog</p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-body">
              Click below to initiate the official rate list download or receive the latest catalog directly on WhatsApp.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppUrl(`Hello TORQVA team, please send me the latest 2026 Product Rate List PDF.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPdfModal(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#E31B23] hover:bg-[#FF2A35] text-white font-extrabold text-xs uppercase rounded-lg shadow-lg font-display cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Receive Rate PDF On WhatsApp</span>
              </a>

              <button
                onClick={() => setShowPdfModal(false)}
                className="w-full py-2.5 bg-[#171A23] hover:bg-[#222734] text-neutral-300 text-xs font-bold uppercase rounded-lg font-tech cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { Search, Plus, MessageCircle, AlertCircle, ShieldCheck, Check } from 'lucide-react';
import { productsData } from '../../data/productsData';
import { categoriesData } from '../../data/categoriesData';
import { bikeBrandsData } from '../../data/bikeModelsData';
import { siteConfig } from '../../config/siteConfig';
import { getProductWhatsAppUrl, getWhatsAppUrl } from '../../utils/whatsapp';
import { useEnquiry } from '../../context/EnquiryContext';
import { analytics } from '../analytics/analytics';

export const RateListTable = ({ onSelectProduct }) => {
  const { addToEnquiry, enquiryItems } = useEnquiry();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

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

  return (
    <section className="py-12 bg-[#050505] min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header Card */}
        <div className="bg-[#0D0D0D] border border-[#242424] p-6 rounded-sm space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D71920]/15 border border-[#D71920]/40 rounded-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#D71920]">
                  Official Spare Parts Directory
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2">
                TORQVA Product Catalogue
              </h1>
            </div>

            <a
              href={getWhatsAppUrl(`Hello TORQVA team, I would like to request the complete product quotation list.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D71920] hover:bg-[#E31B23] text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get Wholesale Quote via WhatsApp</span>
            </a>
          </div>

          {/* Notice */}
          <div className="flex items-start gap-2 text-xs text-neutral-400 bg-[#141414] p-3 rounded-sm border border-[#242424]">
            <AlertCircle className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
            <p>Select required parts and click "Add to Enquiry" to build your bulk trade quotation request.</p>
          </div>

          {/* Search and Filters Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search part name, SKU, model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#141414] border border-[#242424] text-white text-xs font-semibold py-2.5 pl-9 pr-4 rounded-sm focus:border-[#D71920] focus:outline-none"
              />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#141414] border border-[#242424] text-white text-xs font-semibold py-2.5 px-3 rounded-sm focus:border-[#D71920] focus:outline-none cursor-pointer"
            >
              <option value="all">All Part Categories</option>
              {categoriesData.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>

            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-[#141414] border border-[#242424] text-white text-xs font-semibold py-2.5 px-3 rounded-sm focus:border-[#D71920] focus:outline-none cursor-pointer"
            >
              <option value="all">All Bike Brands</option>
              {bikeBrandsData.map((b) => (
                <option key={b.id} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-[#0D0D0D] border border-[#242424] rounded-sm overflow-hidden shadow-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#141414] border-b border-[#242424] text-neutral-300 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 text-[#D71920]">SKU / Part Code</th>
                <th className="py-3.5 px-4">Part Name</th>
                <th className="py-3.5 px-4">Compatible Bike</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Pricing Mode</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242424]/60 text-neutral-300">
              {filteredRateList.map((item) => {
                const isEnquired = enquiryItems.some((i) => i.product.id === item.id);
                return (
                  <tr key={item.id} className="hover:bg-[#141414] transition-colors group">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#D71920]">
                      {item.sku || item.partCode || 'TQ-PART'}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white group-hover:text-[#D71920] transition-colors">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-neutral-300">
                      {item.bikeModel} ({item.bikeBrand})
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 bg-[#141414] text-neutral-300 font-semibold rounded-sm border border-[#242424]">
                        {item.categoryName}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-neutral-300">
                      Direct WhatsApp Quote
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <button
                        onClick={() => addToEnquiry(item, 1)}
                        className={`inline-flex items-center gap-1 px-3 py-1 text-[11px] font-bold uppercase rounded-sm transition-colors cursor-pointer ${
                          isEnquired ? 'bg-green-950 text-green-400 border border-green-800' : 'bg-[#D71920] hover:bg-[#E31B23] text-white'
                        }`}
                      >
                        {isEnquired ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
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
        <div className="lg:hidden space-y-3">
          {filteredRateList.map((item) => {
            const isEnquired = enquiryItems.some((i) => i.product.id === item.id);
            return (
              <div key={item.id} className="bg-[#0D0D0D] border border-[#242424] p-4 rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#D71920] bg-[#D71920]/15 px-2 py-0.5 rounded-sm">
                    {item.sku || item.partCode}
                  </span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase bg-[#141414] px-2 py-0.5 rounded-sm border border-[#242424]">
                    {item.categoryName}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Fits: <span className="text-neutral-200 font-semibold">{item.bikeModel}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#242424] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-semibold">Pricing Mode</div>
                    <div className="text-xs font-bold text-neutral-200">Wholesale Quote</div>
                  </div>

                  <button
                    onClick={() => addToEnquiry(item, 1)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center gap-1 cursor-pointer ${
                      isEnquired ? 'bg-green-950 text-green-400 border border-green-800' : 'bg-[#D71920] text-white'
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
    </section>
  );
};

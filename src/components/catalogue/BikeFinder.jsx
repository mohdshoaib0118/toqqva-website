import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck, RefreshCw, ChevronDown, Plus } from 'lucide-react';
import { bikeBrandsData } from '../../data/bikeModelsData';
import { categoriesData } from '../../data/categoriesData';
import { productsData } from '../../data/productsData';
import { ProductCard } from '../common/ProductCard';
import { useEnquiry } from '../../context/EnquiryContext';
import { analytics } from '../analytics/analytics';

export const BikeFinder = ({ onSelectProduct }) => {
  const { addToEnquiry } = useEnquiry();
  const [selectedBrandId, setSelectedBrandId] = useState('hero');
  const [selectedModelId, setSelectedModelId] = useState('splendor');
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  const currentBrand = useMemo(() => {
    return bikeBrandsData.find((b) => b.id === selectedBrandId) || bikeBrandsData[0];
  }, [selectedBrandId]);

  const currentModels = useMemo(() => {
    return currentBrand ? currentBrand.models : [];
  }, [currentBrand]);

  const currentModelObj = useMemo(() => {
    return currentModels.find((m) => m.id === selectedModelId) || currentModels[0];
  }, [currentModels, selectedModelId]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchBrand = p.bikeBrand.toLowerCase().includes(currentBrand.name.toLowerCase()) || 
                         currentBrand.name.toLowerCase().includes(p.bikeBrand.toLowerCase());
      const matchModel = !selectedModelId || p.bikeModelId === selectedModelId || 
                         p.bikeModel.toLowerCase().includes(selectedModelId.toLowerCase());
      const matchCategory = selectedCategoryId === 'all' || p.category === selectedCategoryId;

      return matchBrand && (matchModel || !selectedModelId) && matchCategory;
    });
  }, [currentBrand, selectedModelId, selectedCategoryId]);

  const handleBrandChange = (brandId) => {
    setSelectedBrandId(brandId);
    const brandObj = bikeBrandsData.find((b) => b.id === brandId);
    if (brandObj && brandObj.models.length > 0) {
      setSelectedModelId(brandObj.models[0].id);
    } else {
      setSelectedModelId('');
    }
    analytics.bikeFinderUsed(brandId, '', selectedCategoryId);
  };

  const handleAddAllToEnquiry = () => {
    filteredProducts.forEach((p) => addToEnquiry(p, 1));
  };

  const handleReset = () => {
    setSelectedBrandId('hero');
    setSelectedModelId('splendor');
    setSelectedCategoryId('all');
  };

  return (
    <section className="py-20 bg-[#050505] border-b border-[#1f1f1f]" id="bike-finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#D71920]/50 rounded-full shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#D71920]" />
            <span className="text-[11px] font-black uppercase tracking-widest text-white">
              OEM Fitment Finder
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-sans">
            Find Parts For Your Bike
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Select your motorcycle or scooter brand, model, and body part category to filter exact matching parts.
          </p>
        </div>

        {/* 3-Step Selector Container */}
        <div className="bg-gradient-to-b from-[#0e0e0e] to-[#080808] border border-[#242424] p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-neutral-300">
                1. Select Bike Brand
              </label>
              <div className="relative">
                <select
                  value={selectedBrandId}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="w-full bg-[#121212] border border-[#282828] text-white text-xs font-extrabold py-3.5 px-4 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer appearance-none shadow-sm"
                >
                  {bikeBrandsData.map((brand) => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#D71920] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-neutral-300">
                2. Select Bike Model
              </label>
              <div className="relative">
                <select
                  value={selectedModelId}
                  onChange={(e) => setSelectedModelId(e.target.value)}
                  className="w-full bg-[#121212] border border-[#282828] text-white text-xs font-extrabold py-3.5 px-4 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer appearance-none shadow-sm"
                >
                  {currentModels.map((model) => (
                    <option key={model.id} value={model.id}>{model.name}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#D71920] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-neutral-300">
                3. Part Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                  className="w-full bg-[#121212] border border-[#282828] text-white text-xs font-extrabold py-3.5 px-4 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer appearance-none shadow-sm"
                >
                  <option value="all">All Part Categories</option>
                  {categoriesData.map((cat) => (
                    <option key={cat.id} value={cat.slug}>{cat.name}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#D71920] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Selector Footer */}
          <div className="pt-5 border-t border-[#1e1e1e] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2 text-neutral-300 font-bold">
              <span className="text-neutral-500 uppercase">Selected Filter:</span>
              <span className="px-2.5 py-1 bg-[#D71920]/20 text-[#D71920] rounded-md font-black uppercase border border-[#D71920]/40">
                {currentBrand.name}
              </span>
              <span>→</span>
              <span className="px-2.5 py-1 bg-[#121212] text-white rounded-md font-black border border-[#262626]">
                {currentModelObj ? currentModelObj.name : 'All Models'}
              </span>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white uppercase font-black text-xs transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>

        {/* Results Grid Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black uppercase tracking-wider text-white">
            Matching Compatible Parts ({filteredProducts.length})
          </h3>

          {filteredProducts.length > 0 && (
            <button
              onClick={handleAddAllToEnquiry}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#D71920] hover:bg-[#E31B23] text-white text-xs font-black uppercase rounded-lg shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add All to Enquiry</span>
            </button>
          )}
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
            ))}
          </div>
        ) : (
          <div className="bg-[#0e0e0e] border border-[#242424] p-12 text-center rounded-xl space-y-4">
            <div className="w-14 h-14 mx-auto bg-[#141414] border border-[#262626] flex items-center justify-center rounded-full text-neutral-400">
              <Search className="w-6 h-6 text-[#D71920]" />
            </div>
            <h4 className="text-base font-black text-white uppercase">No Specific Parts Found</h4>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              We manufacture custom plastic parts for {currentModelObj ? currentModelObj.name : currentBrand.name}. Contact our sales desk directly to enquire about custom orders.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

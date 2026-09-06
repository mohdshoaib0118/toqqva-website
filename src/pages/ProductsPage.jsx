import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ShieldCheck, RefreshCw, X, SlidersHorizontal, MessageCircle } from 'lucide-react';
import { productsData } from '../data/productsData';
import { categoriesData } from '../data/categoriesData';
import { bikeBrandsData } from '../data/bikeModelsData';
import { ProductCard } from '../components/common/ProductCard';
import { ProductDetailsModal } from '../components/catalogue/ProductDetailsModal';
import { RecentlyViewed } from '../components/catalogue/RecentlyViewed';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';
import { getSearchEmptyStateWhatsAppUrl } from '../utils/whatsapp';
import { analytics } from '../components/analytics/analytics';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL params
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';
  const initialModel = searchParams.get('model') || '';
  const initialSearch = searchParams.get('q') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [sortOption, setSortOption] = useState(initialSort);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state to URL search params
  const updateUrlParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(newParams).forEach((key) => {
      const val = newParams[key];
      if (!val || val === 'all') {
        params.delete(key);
      } else {
        params.set(key, val);
      }
    });
    setSearchParams(params);
  };

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedBrand(searchParams.get('brand') || 'all');
    setSelectedModel(searchParams.get('model') || '');
    setSearchQuery(searchParams.get('q') || '');
    setSortOption(searchParams.get('sort') || 'featured');
  }, [searchParams]);

  // Find models for selected brand
  const currentBrandObj = bikeBrandsData.find(
    (b) => b.name.toLowerCase() === selectedBrand.toLowerCase()
  );
  const availableModels = currentBrandObj ? currentBrandObj.models : [];

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !query ||
          p.name.toLowerCase().includes(query) ||
          p.bikeModel.toLowerCase().includes(query) ||
          (p.sku && p.sku.toLowerCase().includes(query)) ||
          p.categoryName.toLowerCase().includes(query);

        const matchesCategory =
          selectedCategory === 'all' ||
          p.category === selectedCategory ||
          p.category.startsWith(selectedCategory) ||
          selectedCategory.startsWith(p.category) ||
          (selectedCategory === 'mudguards' && (p.category === 'mudguards-front' || p.category === 'mudguards-rear')) ||
          (selectedCategory === 'other-parts' && ['headlight-cases', 'meter-covers', 'chain-covers', 'leg-shields', 'tail-light-visors', 'other-parts'].includes(p.category));

        const matchesBrand =
          selectedBrand === 'all' || p.bikeBrand.toLowerCase() === selectedBrand.toLowerCase();
        const matchesModel =
          !selectedModel || p.bikeModel.toLowerCase().includes(selectedModel.toLowerCase());

        return matchesQuery && matchesCategory && matchesBrand && matchesModel;
      })
      .sort((a, b) => {
        if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
        if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, selectedBrand, selectedModel, sortOption]);

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    updateUrlParams({ q: val });
    if (val) analytics.productSearch(val);
  };

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    setSearchQuery('');
    setSelectedModel('');
    updateUrlParams({ category: slug, q: '', model: '' });
    analytics.filterApplied('category', slug);
  };

  const handleBrandChange = (brandName) => {
    setSelectedBrand(brandName);
    setSelectedModel('');
    updateUrlParams({ brand: brandName, model: '' });
    analytics.filterApplied('brand', brandName);
  };

  const handleModelChange = (modelId) => {
    setSelectedModel(modelId);
    updateUrlParams({ model: modelId });
    analytics.filterApplied('model', modelId);
  };

  const handleSortChange = (sortVal) => {
    setSortOption(sortVal);
    updateUrlParams({ sort: sortVal });
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedModel('');
    setSortOption('featured');
    setSearchParams({});
  };

  return (
    <div className="pt-10 pb-16 bg-[#050505] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'Products Catalogue' }]} />

        {/* Page Title Header */}
        <div className="border-b border-[#242424] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#D71920]/40 rounded-full text-xs font-black uppercase text-white mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D71920]" />
              <span>WHOLESALE SPARE PARTS CATALOGUE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Two-Wheeler Plastic Spare Parts
            </h1>
          </div>
        </div>

        {/* Desktop Filter Controls Bar */}
        <div className="bg-gradient-to-b from-[#0e0e0e] to-[#080808] border border-[#242424] p-5 sm:p-6 rounded-xl space-y-5 shadow-2xl">
          
          {/* Search Box */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by part name, SKU, bike model (e.g. TQ-VIS-SPL-01, Splendor, Activa)..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-bold py-3.5 pl-11 pr-4 rounded-lg focus:border-[#D71920] focus:outline-none shadow-inner"
              />
              <Search className="w-4 h-4 text-[#D71920] absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-3.5 bg-[#D71920] text-white text-xs font-black uppercase rounded-lg shadow-md"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="hidden lg:flex flex-wrap items-center gap-2 pt-1 border-t border-[#1e1e1e]">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#D71920] text-white shadow-md'
                  : 'bg-[#121212] text-neutral-300 hover:text-white border border-[#242424]'
              }`}
            >
              All Categories
            </button>

            {categoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-[#D71920] text-white shadow-md'
                    : 'bg-[#121212] text-neutral-300 hover:text-white border border-[#242424]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dropdown Filters (Brand, Model, Sort) */}
          <div className="hidden lg:flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#1e1e1e]">
            <div className="flex flex-wrap items-center gap-4">
              {/* Brand Select */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-black uppercase">Brand:</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="bg-[#121212] border border-[#262626] text-white text-xs font-bold py-2 px-3 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer"
                >
                  <option value="all">All Brands</option>
                  {bikeBrandsData.map((b) => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>

              {/* Model Select */}
              {availableModels.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400 font-black uppercase">Model:</span>
                  <select
                    value={selectedModel}
                    onChange={(e) => handleModelChange(e.target.value)}
                    className="bg-[#121212] border border-[#262626] text-white text-xs font-bold py-2 px-3 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer"
                  >
                    <option value="">All Models</option>
                    {availableModels.map((m) => (
                      <option key={m.id} value={m.name}>{m.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Sort Select */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-black uppercase">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="bg-[#121212] border border-[#262626] text-white text-xs font-bold py-2 px-3 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-black uppercase"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Clear All Filters</span>
            </button>
          </div>

        </div>

        {/* Dynamic Product Count Display */}
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <div>
            Showing <span className="text-white font-extrabold">{filteredProducts.length}</span> of <span className="text-white font-extrabold">{productsData.length}</span> spare parts
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          /* Search Empty State */
          <div className="bg-[#0e0e0e] border border-[#242424] p-12 text-center rounded-xl space-y-4">
            <div className="w-14 h-14 mx-auto bg-[#141414] border border-[#262626] flex items-center justify-center rounded-full text-neutral-400">
              <Search className="w-7 h-7 text-[#D71920]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-black uppercase text-white">Can't find the part you're looking for?</h3>
              <p className="text-xs text-neutral-300 max-w-md mx-auto">
                Send us your bike model and required part on WhatsApp. Our team manufactures custom replacement plastic body parts.
              </p>
            </div>

            <a
              href={getSearchEmptyStateWhatsAppUrl(searchQuery || selectedCategory)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D71920] hover:bg-[#E31B23] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        )}

        {/* Recently Viewed Section */}
        <RecentlyViewed onSelectProduct={(p) => setSelectedProduct(p)} />

      </div>

      {/* Mobile Filter Drawer / Bottom Sheet */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/85 backdrop-blur-md">
          <div className="bg-[#0e0e0e] border-t border-[#242424] p-6 rounded-t-2xl max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-[#242424] pb-4">
              <h3 className="text-base font-black uppercase text-white">Filter Products</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-neutral-400">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Category Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-neutral-300">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full bg-[#141414] border border-[#242424] text-white text-xs font-bold py-3 px-3 rounded-lg"
              >
                <option value="all">All Categories</option>
                {categoriesData.map((c) => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Brand Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-neutral-300">Bike Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full bg-[#141414] border border-[#242424] text-white text-xs font-bold py-3 px-3 rounded-lg"
              >
                <option value="all">All Brands</option>
                {bikeBrandsData.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 bg-[#D71920] text-white font-black text-xs uppercase rounded-lg"
              >
                Apply Filters
              </button>
              <button
                onClick={() => { handleReset(); setMobileFilterOpen(false); }}
                className="py-3 px-4 bg-[#141414] border border-[#242424] text-neutral-300 font-bold text-xs uppercase rounded-lg"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

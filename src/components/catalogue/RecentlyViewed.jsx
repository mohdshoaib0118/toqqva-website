import React, { useState, useEffect } from 'react';
import { getRecentlyViewedIds } from '../../utils/storage';
import { productsData } from '../../data/productsData';
import { ProductCard } from '../common/ProductCard';
import { siteConfig } from '../../config/siteConfig';

export const RecentlyViewed = ({ onSelectProduct }) => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    if (!siteConfig.showRecentlyViewed) return;
    const ids = getRecentlyViewedIds();
    const items = ids
      .map((id) => productsData.find((p) => p.id === id))
      .filter(Boolean);
    setRecentProducts(items);
  }, []);

  if (!siteConfig.showRecentlyViewed || recentProducts.length === 0) return null;

  return (
    <section className="py-12 bg-[#050505] border-t border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-lg font-black uppercase text-white tracking-wider border-l-2 border-[#D71920] pl-3">
          Recently Viewed Spare Parts
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

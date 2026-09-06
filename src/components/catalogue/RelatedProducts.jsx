import React from 'react';
import { productsData } from '../../data/productsData';
import { ProductCard } from '../common/ProductCard';

export const RelatedProducts = ({ currentProduct, onSelectProduct }) => {
  if (!currentProduct) return null;

  const related = productsData
    .filter((p) => p.id !== currentProduct.id && (p.category === currentProduct.category || p.bikeBrand === currentProduct.bikeBrand))
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="space-y-4 pt-6 border-t border-[#242424]">
      <h3 className="text-base font-black uppercase text-white tracking-wider border-l-2 border-[#D71920] pl-3">
        You May Also Need
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {related.map((prod) => (
          <ProductCard key={prod.id} product={prod} onSelect={onSelectProduct} />
        ))}
      </div>
    </div>
  );
};

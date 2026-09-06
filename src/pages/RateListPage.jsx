import React, { useState } from 'react';
import { RateListTable } from '../components/ratelist/RateListTable';
import { ProductDetailsModal } from '../components/catalogue/ProductDetailsModal';

export const RateListPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="py-6 bg-[#07080A] text-white min-h-screen">
      <RateListTable onSelectProduct={(p) => setSelectedProduct(p)} />

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

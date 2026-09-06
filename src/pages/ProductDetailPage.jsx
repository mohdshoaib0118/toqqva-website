import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductDetailsModal } from '../components/catalogue/ProductDetailsModal';

export const ProductDetailPage = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  const product = productsData.find(
    (p) => p.slug === productSlug || p.id === productSlug
  );

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | TORQVA Spare Parts`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-16 text-center text-white min-h-[60vh] space-y-4 font-body">
        <h2 className="text-2xl font-black uppercase font-heading">Part Not Found</h2>
        <p className="text-xs text-neutral-400">The requested spare part could not be located in our active catalogue.</p>
        <Link to="/products" className="inline-block px-6 py-2.5 bg-[#E31B23] text-white text-xs font-bold uppercase rounded-lg font-display">
          Return to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 bg-[#07080A] text-white min-h-screen font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Products', path: '/products' },
            { label: product.categoryName || product.category, path: `/products?category=${product.category}` },
            { label: product.name }
          ]}
        />

        {/* Embedded Full Product Detail Experience */}
        <ProductDetailsModal product={product} onClose={() => navigate('/products')} />
      </div>
    </div>
  );
};

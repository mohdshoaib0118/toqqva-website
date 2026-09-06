import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import { productsData } from '../../data/productsData';
import { ProductCard } from '../common/ProductCard';

export const FeaturedProducts = ({ onSelectProduct }) => {
  const featured = productsData.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="py-20 bg-[#050505] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#222222]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#D71920]/40 rounded-full text-xs font-black uppercase tracking-widest text-[#D71920] mb-2">
              <Flame className="w-4 h-4 fill-[#D71920]" />
              <span>TOP MOVING SPARE PARTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-sans">
              Popular Body Parts
            </h2>
          </div>

          <Link
            to="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-300 hover:text-white group bg-[#121212] px-4 py-2.5 rounded-lg border border-[#262626] hover:border-[#D71920] transition-all"
          >
            <span>Browse Full Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#D71920] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Disc, Square, Zap, Triangle, Layers } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const QuickCategoryGrid = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#D71920]" />;
      case 'Disc': return <Disc className="w-5 h-5 text-[#D71920]" />;
      case 'Square': return <Square className="w-5 h-5 text-[#D71920]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#D71920]" />;
      case 'Triangle': return <Triangle className="w-5 h-5 text-[#D71920]" />;
      default: return <Layers className="w-5 h-5 text-[#D71920]" />;
    }
  };

  return (
    <section className="py-20 bg-[#070707] border-b border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#222222]">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#D71920] flex items-center gap-1.5">
              <span>// OEM COMPATIBLE RANGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1.5 font-sans">
              Explore Spare Parts Categories
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-300 hover:text-white group bg-[#121212] px-4 py-2.5 rounded-lg border border-[#262626] hover:border-[#D71920] transition-all"
          >
            <span>Full Parts Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#D71920] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.slug}`}
              className="group relative bg-gradient-to-b from-[#0e0e0e] to-[#080808] border border-[#222222] hover:border-[#D71920] rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-red-950/30 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#050505]">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.name}
                  category={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>

                {/* Top Count Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-black text-neutral-200 uppercase rounded-md border border-[#333333] shadow-md">
                  {cat.itemCount}+ Variants
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 bg-[#141414] border border-[#262626] rounded-md group-hover:border-[#D71920] transition-colors">
                      {getIcon(cat.icon)}
                    </div>
                    <h3 className="text-lg font-black uppercase text-white group-hover:text-[#D71920] transition-colors">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {cat.shortDescription}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-xs font-black uppercase tracking-wider text-neutral-300 group-hover:text-white">
                  <span>Explore {cat.name}</span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#141414] group-hover:bg-[#D71920] text-neutral-400 group-hover:text-white rounded-md transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

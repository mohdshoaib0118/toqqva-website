import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Disc, Square, Zap, Triangle, Layers } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const QuickCategoryGrid = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#E31B23]" />;
      case 'Disc': return <Disc className="w-5 h-5 text-[#E31B23]" />;
      case 'Square': return <Square className="w-5 h-5 text-[#E31B23]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#E31B23]" />;
      case 'Triangle': return <Triangle className="w-5 h-5 text-[#E31B23]" />;
      default: return <Layers className="w-5 h-5 text-[#E31B23]" />;
    }
  };

  return (
    <section className="py-20 bg-[#07080A] border-b border-[#1A1F2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#1A1F2C]">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#E31B23] flex items-center gap-2 font-tech">
              <span>// DIRECT OEM PLASTIC BODY RANGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1.5 font-heading">
              Spare Parts Catalog Categories
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-neutral-300 hover:text-white group bg-[#0F1117] px-5 py-3 rounded-lg border border-[#222734] hover:border-[#E31B23] transition-all font-display shadow-md"
          >
            <span>View All SKUs & Categories</span>
            <ArrowRight className="w-4 h-4 text-[#E31B23] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.slug}`}
              className="group relative bg-[#0F1117] border border-[#222734] hover:border-[#E31B23] rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-red-950/40 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#07080A]">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.name}
                  category={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent"></div>

                {/* Top Count & Quality Badges */}
                <div className="absolute top-3 right-3 bg-[#07080A]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black text-neutral-200 uppercase rounded-md border border-[#222734] shadow-md font-tech">
                  {cat.itemCount}+ SKUs
                </div>
                <div className="absolute bottom-3 left-3 bg-[#E31B23] text-white px-2.5 py-0.5 text-[9px] font-black uppercase rounded shadow-sm font-tech">
                  Virgin ABS
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 bg-[#171A23] border border-[#222734] rounded-lg group-hover:border-[#E31B23] transition-colors shrink-0">
                      {getIcon(cat.icon)}
                    </div>
                    <h3 className="text-xl font-black uppercase text-white group-hover:text-[#E31B23] transition-colors font-heading">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-body">
                    {cat.shortDescription}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#1A1F2C] flex items-center justify-between text-xs font-black uppercase tracking-wider text-neutral-300 group-hover:text-white font-tech">
                  <span>Explore {cat.name}</span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#171A23] group-hover:bg-[#E31B23] text-neutral-400 group-hover:text-white rounded-lg transition-colors shadow-sm">
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

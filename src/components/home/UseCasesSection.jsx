import React from 'react';
import { Store, ShoppingBag, Wrench, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Store className="w-6 h-6 text-[#D71920]" />,
      title: "Spare Parts Dealers",
      subtitle: "Bulk Stock Requirements",
      description: "Get competitive distributor rates, ready stock availability, and reliable logistics packing for high-volume orders.",
      cta: "Dealer Enquiry",
      link: "/contact#dealer-enquiry"
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#D71920]" />,
      title: "Retail Shop Owners",
      subtitle: "Fast Moving Stock",
      description: "Stock high-demand visors, mudguards, and side cowls for Hero, Honda, TVS, and Bajaj bikes with clear product pricing.",
      cta: "Explore Catalogue",
      link: "/products"
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#D71920]" />,
      title: "Garage Mechanics",
      subtitle: "Quick Part Identification",
      description: "Search compatible parts by bike model and brand to find exact fitment plastic cowls without hassle or delays.",
      cta: "Find Parts",
      link: "/bike-models"
    },
    {
      icon: <Navigation className="w-6 h-6 text-[#D71920]" />,
      title: "Individual Riders",
      subtitle: "Replacement Body Cowls",
      description: "Replace broken or damaged bike plastic panels with factory-matched glossy visors and mudguards.",
      cta: "View Product Parts",
      link: "/products"
    }
  ];

  return (
    <section className="py-16 bg-[#050505] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#D71920]">
            Target Audience & Business Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Who TORQVA Serves
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Engineered to cater to every partner in the automotive replacement spare parts ecosystem.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => (
            <div
              key={idx}
              className="bg-[#0D0D0D] border border-[#242424] hover:border-[#D71920] p-6 rounded-sm space-y-4 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#141414] border border-[#242424] group-hover:border-[#D71920] rounded-sm transition-colors">
                  {uc.icon}
                </div>

                <div>
                  <div className="text-[10px] font-bold text-[#D71920] uppercase tracking-wider">
                    {uc.subtitle}
                  </div>
                  <h3 className="text-lg font-black uppercase text-white group-hover:text-[#D71920] transition-colors mt-0.5">
                    {uc.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {uc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#242424]">
                <Link
                  to={uc.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white"
                >
                  <span>{uc.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D71920] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

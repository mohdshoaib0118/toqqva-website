import React from 'react';
import { Star, Quote, MapPin, Store } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { siteConfig } from '../../config/siteConfig';

export const TestimonialsSection = () => {
  if (!siteConfig.showTestimonials) return null;

  return (
    <section className="py-16 bg-[#0B0B0B] border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#D71920]">
            Trade Partner Feedback
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Trusted by Dealers & Mechanics
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Hear from spare-parts distributors and workshop owners using TORQVA plastic body parts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-[#141414] border border-[#242424] p-6 rounded-sm space-y-4 flex flex-col justify-between hover:border-[#D71920]/60 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#D71920]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D71920]" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#242424] opacity-80" />

                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#242424]">
                <div className="font-bold text-white text-sm uppercase">{t.name}</div>
                <div className="text-[11px] text-[#D71920] font-semibold">{t.role}</div>
                <div className="flex items-center gap-1 text-[10px] text-neutral-400 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

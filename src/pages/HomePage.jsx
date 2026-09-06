import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { QuickCategoryGrid } from '../components/home/QuickCategoryGrid';
import { BikeFinder } from '../components/catalogue/BikeFinder';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyToqqva } from '../components/home/WhyToqqva';
import { UseCasesSection } from '../components/home/UseCasesSection';
import { DealerEnquiryForm } from '../components/dealer/DealerEnquiryForm';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { FAQAccordion } from '../components/faq/FAQAccordion';
import { FinalCTA } from '../components/home/FinalCTA';
import { ProductDetailsModal } from '../components/catalogue/ProductDetailsModal';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const demoGalleryImages = [
    { src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", title: "TORQVA Visor Assembly" },
    { src: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80", title: "High-Gloss Front Mudguards" },
    { src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", title: "Side Panel Lock Alignment" },
    { src: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80", title: "Scooter Nose Panel Molding" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Category Grid */}
      <QuickCategoryGrid />

      {/* 3. Find Parts For Your Bike */}
      <BikeFinder onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* 4. Featured Products */}
      <FeaturedProducts onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* 5. Why TORQVA */}
      <WhyToqqva />

      {/* 6. Use Cases (Dealers, Retailers, Mechanics, Riders) */}
      <UseCasesSection />

      {/* 7. Dealer & Bulk Enquiry */}
      <DealerEnquiryForm />

      {/* 8. Gallery Preview */}
      <section className="py-16 bg-[#050505] border-b border-[#242424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#242424]">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D71920]">Visual Showcase</div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
                Brand & Finish Gallery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white group"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#D71920] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {demoGalleryImages.map((img, idx) => (
              <Link
                key={idx}
                to="/gallery"
                className="group relative aspect-[4/3] bg-[#141414] border border-[#242424] overflow-hidden rounded-sm"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                  <span className="text-xs font-bold text-white uppercase group-hover:text-[#D71920] transition-colors">
                    {img.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ Accordion */}
      <FAQAccordion />

      {/* 11. Final CTA */}
      <FinalCTA />

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

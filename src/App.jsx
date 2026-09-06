import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { EnquiryProvider } from './context/EnquiryContext';
import { InitialLoader } from './components/common/InitialLoader';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryList } from './components/enquiry/EnquiryList';
import { ProductComparison } from './components/catalogue/ProductComparison';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { RateListPage } from './pages/RateListPage';
import { BikeModelsPage } from './pages/BikeModelsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Dynamic SEO & Scroll restoration component
const SEOAndScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'TORQVA | Two-Wheeler Spare Parts & Plastic Body Parts Manufacturer India',
      '/products': 'Two-Wheeler Plastic Body Parts Catalog | TORQVA',
      '/rate-list': 'Official B2B Wholesale Rate List 2026 | TORQVA',
      '/bike-models': 'Find Parts By Motorcycle & Scooter Model | TORQVA',
      '/gallery': 'Product Quality & Finish Showcase | TORQVA',
      '/about': 'About TORQVA | Indian OEM-Grade Spare Parts Manufacturer',
      '/contact': 'Dealer Enquiry & Factory Sales Desk | TORQVA',
    };

    if (pageTitles[pathname]) {
      document.title = pageTitles[pathname];
    }

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export function App() {
  return (
    <EnquiryProvider>
      <InitialLoader />
      <Router>
        <SEOAndScrollHandler />
        <div className="flex flex-col min-h-screen bg-[#07080A] text-white selection:bg-[#E31B23] selection:text-white font-body antialiased">
          <Navbar />

          <main className="flex-1 transition-opacity duration-300">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productSlug" element={<ProductDetailPage />} />
              <Route path="/rate-list" element={<RateListPage />} />
              <Route path="/bike-models" element={<BikeModelsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
          <MobileBottomBar />
          <FloatingWhatsApp />

          {/* Global Drawers, Modals & Vercel Analytics */}
          <EnquiryList />
          <ProductComparison />
          <Analytics />
        </div>
      </Router>
    </EnquiryProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { EnquiryProvider } from './context/EnquiryContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryList } from './components/enquiry/EnquiryList';
import { ProductComparison } from './components/catalogue/ProductComparison';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BikeModelsPage } from './pages/BikeModelsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#D71920] selection:text-white">
          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productSlug" element={<ProductDetailPage />} />
              <Route path="/bike-models" element={<BikeModelsPage />} />
              {/* Rate list removed per user request: redirect to products */}
              <Route path="/rate-list" element={<Navigate to="/products" replace />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
          <MobileBottomBar />
          <FloatingWhatsApp />
          
          {/* Global Drawers & Modals */}
          <EnquiryList />
          <ProductComparison />
        </div>
      </Router>
    </EnquiryProvider>
  );
}

export default App;

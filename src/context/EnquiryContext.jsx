import React, { createContext, useContext, useState, useEffect } from 'react';
import { analytics } from '../components/analytics/analytics';

const EnquiryContext = createContext(null);

const STORAGE_ENQUIRY_KEY = 'torqva_enquiry_basket';

export const EnquiryProvider = ({ children }) => {
  const [enquiryItems, setEnquiryItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ENQUIRY_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [compareList, setCompareList] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ENQUIRY_KEY, JSON.stringify(enquiryItems));
    } catch (e) {}
  }, [enquiryItems]);

  // Add item to enquiry list
  const addToEnquiry = (product, quantity = 1) => {
    setEnquiryItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity: Math.max(1, quantity) }];
      }
    });

    analytics.enquiryStarted(enquiryItems.length + 1);
    setIsDrawerOpen(true);
  };

  // Remove item
  const removeFromEnquiry = (productId) => {
    setEnquiryItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) {
      removeFromEnquiry(productId);
      return;
    }
    setEnquiryItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Clear all items
  const clearEnquiry = () => {
    setEnquiryItems([]);
  };

  // Toggle product in comparison list (max 3)
  const toggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 products at a time.');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const removeFromCompare = (productId) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const totalItemsCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <EnquiryContext.Provider
      value={{
        enquiryItems,
        totalItemsCount,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
        isDrawerOpen,
        setIsDrawerOpen,
        compareList,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        isCompareOpen,
        setIsCompareOpen,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};

/**
 * TORQVA Analytics Event Logger
 * Lightweight, privacy-focused event logger for tracking user interactions.
 */
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    const timestamp = new Date().toISOString();
    const payload = {
      event: eventName,
      params: eventParams,
      timestamp,
    };

    // Log to console in development mode
    if (import.meta.env?.DEV) {
      console.log(`[TORQVA Analytics]`, eventName, eventParams);
    }

    // Window dataLayer integration if GTM / Analytics is present
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(payload);
    }
  } catch (e) {
    // Fail silently without disrupting UI
  }
};

export const analytics = {
  productView: (product) => trackEvent('product_view', { productId: product.id, name: product.name, sku: product.sku }),
  productSearch: (searchTerm) => trackEvent('product_search', { query: searchTerm }),
  bikeFinderUsed: (brand, model, category) => trackEvent('bike_finder_used', { brand, model, category }),
  filterApplied: (filterType, value) => trackEvent('filter_applied', { filterType, value }),
  whatsappClicked: (source, productId = null) => trackEvent('whatsapp_clicked', { source, productId }),
  phoneClicked: (source) => trackEvent('phone_clicked', { source }),
  enquiryStarted: (itemCount) => trackEvent('enquiry_started', { itemCount }),
  enquirySubmitted: (itemCount, category) => trackEvent('enquiry_submitted', { itemCount, category }),
  catalogueDownloaded: (docName) => trackEvent('catalogue_downloaded', { docName }),
  rateListViewed: () => trackEvent('rate_list_viewed', {}),
};

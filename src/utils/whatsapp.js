import { siteConfig } from '../config/siteConfig';

/**
 * Base encoded WhatsApp URL
 */
export const getWhatsAppUrl = (customText, numberOverride) => {
  const targetPhone = (numberOverride || siteConfig.whatsapp).replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(
    customText || `Hello ${siteConfig.brandName}, I would like to enquire about your two-wheeler plastic spare parts catalogue.`
  );
  return `https://wa.me/${targetPhone}?text=${encodedText}`;
};

/**
 * Single product WhatsApp enquiry link (without price)
 */
export const getProductWhatsAppUrl = (product, quantity = 1) => {
  const message = `Hello ${siteConfig.brandName}, I am interested in the following spare part:

*Part Name:* ${product.name}
*SKU / Part Code:* ${product.sku || product.partCode || 'N/A'}
*Category:* ${product.categoryName || product.category}
*Compatible Bike:* ${product.bikeModel} (${product.bikeBrand})
*Quantity Needed:* ${quantity} ${product.moq ? `(MOQ: ${product.moq} pcs)` : ''}

Please share current wholesale pricing, stock availability, and shipping details.`;

  return getWhatsAppUrl(message);
};

/**
 * Combined Multi-Product Enquiry WhatsApp Link (without prices)
 */
export const getMultiProductWhatsAppUrl = (enquiryItems) => {
  if (!enquiryItems || enquiryItems.length === 0) {
    return getWhatsAppUrl(`Hello ${siteConfig.brandName}, I would like to make a bulk product enquiry.`);
  }

  let itemsListText = '';

  enquiryItems.forEach((item, idx) => {
    const p = item.product;
    const qty = item.quantity;

    itemsListText += `\n${idx + 1}. *${p.name}*
   - SKU: ${p.sku || p.partCode || 'N/A'}
   - Compatible Bike: ${p.bikeModel} (${p.bikeBrand})
   - Quantity Needed: ${qty} pcs\n`;
  });

  const message = `Hello ${siteConfig.brandName} Sales Desk,

I would like to place a combined product quotation enquiry for the following ${enquiryItems.length} spare part(s):
${itemsListText}
*Total Items Count:* ${enquiryItems.reduce((acc, i) => acc + i.quantity, 0)} pcs

Please confirm live wholesale pricing, stock availability, and dispatch timeline.`;

  return getWhatsAppUrl(message);
};

/**
 * Search empty state custom WhatsApp link
 */
export const getSearchEmptyStateWhatsAppUrl = (searchTerm) => {
  const message = `Hello ${siteConfig.brandName}, I was searching your catalogue for "${searchTerm}" but couldn't find the exact part. 

Do you manufacture or stock plastic body parts for this model? Please check availability.`;
  return getWhatsAppUrl(message);
};

/**
 * Dealer Bulk Enquiry form WhatsApp link
 */
export const getDealerBulkWhatsAppUrl = (formData) => {
  const message = `Hello ${siteConfig.brandName} Sales Team, I would like to submit a B2B Dealer Enquiry:

*Name:* ${formData.name || 'N/A'}
*Business Name:* ${formData.businessName || 'N/A'}
*Business Type:* ${formData.businessType || 'Dealer'}
*Phone:* ${formData.phone || 'N/A'}
*WhatsApp:* ${formData.whatsappNumber || formData.phone || 'N/A'}
*City / State:* ${formData.city || 'N/A'}
*Interested Category:* ${formData.category || 'All Categories'}
*Target Bike Model:* ${formData.bikeModel || 'All Models'}
*Estimated Bulk Quantity:* ${formData.quantity || 'Bulk Order'}
*Message:* ${formData.message || 'Please send wholesale rates and dealership terms.'}`;

  return getWhatsAppUrl(message);
};

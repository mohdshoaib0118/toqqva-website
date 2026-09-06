import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';
import { siteConfig } from '../../config/siteConfig';
import { getDealerBulkWhatsAppUrl } from '../../utils/whatsapp';

export const DealerEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    category: 'All Categories',
    quantity: '100 - 500 Pieces',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const waUrl = getDealerBulkWhatsAppUrl(formData);
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-20 bg-[#080808] border-b border-[#1f1f1f]" id="dealer-enquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#D71920]/50 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#D71920]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-white">
                B2B Wholesale Trade Desk
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white italic font-sans">
                Looking for Bulk Supply?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Connect with our sales team for dealer, retailer, and bulk product enquiries. We offer factory pricing, bulk dispatch support, and consistent inventory for distributors across India.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#242424] p-5 rounded-xl space-y-4 shadow-xl">
              <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-[#D71920] pl-3">
                Trade Support & Benefits
              </h4>
              <ul className="space-y-2.5 text-xs font-bold text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Direct Factory Wholesale Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Custom Carton Packaging & Safe Transit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Priority WhatsApp Enquiry Desk ({siteConfig.displayWhatsapp})</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Full Range Visors, Mudguards & Cowls</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getDealerBulkWhatsAppUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: {siteConfig.displayWhatsapp}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#121212] border border-[#242424] text-neutral-200 hover:text-white font-black text-xs uppercase tracking-wider rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#D71920]" />
                <span>Call: {siteConfig.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#242424] p-6 sm:p-8 rounded-xl shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[#D71920]/20 text-[#D71920] flex items-center justify-center rounded-full border border-[#D71920]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white uppercase">Enquiry Prepared!</h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Thank you <span className="text-white font-bold">{formData.name}</span>. Our trade manager will review your request and contact you at <span className="text-white font-bold">{formData.phone}</span> shortly.
                </p>
                
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#D71920] text-white text-xs font-black uppercase rounded-lg shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Copy on WhatsApp</span>
                  </button>
                  
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#050505] border border-[#242424] text-neutral-300 text-xs font-bold uppercase rounded-lg"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black uppercase text-white tracking-tight border-b border-[#222222] pb-3 font-sans">
                  Bulk Supply Quotation Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Kumar Auto Traders"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 79861 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">City / State *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Product Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer"
                    >
                      <option value="All Categories">All Categories</option>
                      {categoriesData.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Expected Bulk Quantity</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none cursor-pointer"
                    >
                      <option value="50 - 100 Pieces">50 - 100 Pieces</option>
                      <option value="100 - 500 Pieces">100 - 500 Pieces</option>
                      <option value="500 - 1000 Pieces">500 - 1000 Pieces</option>
                      <option value="1000+ Carton Order">1000+ Carton Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Requirement Details</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Mention specific bike models (e.g. Splendor Visors 50 pcs, Activa Nose 30 pcs)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#080808] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#080808] border border-[#262626] hover:border-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500 fill-green-500/20" />
                    <span>Submit via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

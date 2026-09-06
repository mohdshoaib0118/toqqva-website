import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';
import { siteConfig } from '../../config/siteConfig';
import { getDealerBulkWhatsAppUrl } from '../../utils/whatsapp';
import { analytics } from '../analytics/analytics';

export const DealerEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Dealer',
    phone: '',
    whatsappNumber: '',
    city: '',
    category: 'All Categories',
    bikeModel: 'All Models',
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
    analytics.enquirySubmitted(1, formData.category);
  };

  const handleSendViaWhatsApp = () => {
    analytics.whatsappClicked('dealer_enquiry_form');
    const waUrl = getDealerBulkWhatsAppUrl(formData);
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-16 bg-[#0D0D0D] border-b border-[#242424]" id="dealer-enquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#D71920]/50 rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                Trade & Wholesale Desk
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white italic">
                Looking for Bulk Supply?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Talk to our team for dealer, retailer and bulk product enquiries. We supply spare parts distributors, workshops, and multi-brand retailers across India.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#242424] p-5 rounded-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Wholesale Benefits
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Direct Wholesale Margin Rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Custom Carton Packaging & Safe Logistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>Priority WhatsApp Dispatch Confirmations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#242424] p-6 sm:p-8 rounded-sm shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[#D71920]/20 text-[#D71920] flex items-center justify-center rounded-full border border-[#D71920]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white uppercase">Trade Enquiry Submitted</h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Thank you <span className="text-white font-bold">{formData.name}</span>. Our sales desk will process your request and connect with you at <span className="text-white font-bold">{formData.phone}</span>.
                </p>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#D71920] text-white text-xs font-bold uppercase rounded-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Copy via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#050505] border border-[#242424] text-neutral-300 text-xs font-bold uppercase rounded-sm"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black uppercase text-white tracking-tight border-b border-[#242424] pb-3">
                  B2B Dealer & Bulk Supply Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Sharma Auto Spares"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Business Type</label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none cursor-pointer"
                    >
                      <option value="Dealer">Dealer</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Mechanic">Mechanic</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      placeholder="+91 98765 XXXXX"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">City / Location *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Jaipur"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Part Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none cursor-pointer"
                    >
                      <option value="All Categories">All Categories</option>
                      {categoriesData.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Estimated Quantity</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none cursor-pointer"
                    >
                      <option value="50 - 100 Pieces">50 - 100 Pieces</option>
                      <option value="100 - 500 Pieces">100 - 500 Pieces</option>
                      <option value="500 - 1000 Pieces">500 - 1000 Pieces</option>
                      <option value="1000+ Carton Order">1000+ Carton Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Requirement Notes</label>
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Specify bike models (e.g. Splendor Visors 50 pcs, Activa Nose 30 pcs)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border border-[#242424] text-white text-xs font-semibold p-3 rounded-sm focus:border-[#D71920] focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-sm shadow transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#050505] border border-[#242424] hover:border-neutral-500 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span>Send via WhatsApp</span>
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

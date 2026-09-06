import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Navigation, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { DealerEnquiry } from '../components/enquiry/DealerEnquiry';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { analytics } from '../components/analytics/analytics';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    subject: 'General Enquiry',
    product: '',
    bikeModel: '',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    analytics.enquirySubmitted(1, 'General Contact Form');
  };

  return (
    <div className="pt-10 pb-16 bg-[#050505] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Page Header */}
        <div className="border-b border-[#242424] pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#121212] border border-[#D71920]/40 rounded-full text-xs font-black uppercase tracking-widest text-white mb-2">
            <ShieldCheck className="w-4 h-4 text-[#D71920]" />
            <span>DIRECT SALES & TRADE DESK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
            Contact TORQVA Team
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
            Get in touch directly via phone, WhatsApp, or form for wholesale spare part enquiries and dealership terms.
          </p>
        </div>

        {/* Contact Info Cards featuring Both Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Line 1 */}
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => analytics.phoneClicked('contact_page')}
            className="bg-[#0e0e0e] border border-[#242424] hover:border-[#D71920] p-6 rounded-xl space-y-3 transition-all duration-300 group shadow-lg"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#141414] border border-[#262626] group-hover:border-[#D71920] rounded-lg">
              <Phone className="w-5 h-5 text-[#D71920]" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-neutral-400">Primary Call Desk</div>
              <div className="text-base font-black text-white group-hover:text-[#D71920] transition-colors">
                {siteConfig.displayPhone}
              </div>
            </div>
          </a>

          {/* Phone Line 2 / WhatsApp */}
          <a
            href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, I am reaching out from your website contact page.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.whatsappClicked('contact_page')}
            className="bg-[#0e0e0e] border border-[#242424] hover:border-green-600 p-6 rounded-xl space-y-3 transition-all duration-300 group shadow-lg"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#141414] border border-[#262626] group-hover:border-green-600 rounded-lg">
              <MessageCircle className="w-5 h-5 text-green-500 fill-green-500/20" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-neutral-400">WhatsApp & Secondary Desk</div>
              <div className="text-base font-black text-white group-hover:text-green-500 transition-colors">
                {siteConfig.displayWhatsapp}
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-[#0e0e0e] border border-[#242424] hover:border-[#D71920] p-6 rounded-xl space-y-3 transition-all duration-300 group shadow-lg"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#141414] border border-[#262626] group-hover:border-[#D71920] rounded-lg">
              <Mail className="w-5 h-5 text-[#D71920]" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-neutral-400">Official Email</div>
              <div className="text-sm font-black text-white group-hover:text-[#D71920] transition-colors">
                {siteConfig.email}
              </div>
            </div>
          </a>

          {/* Working Hours */}
          <div className="bg-[#0e0e0e] border border-[#242424] p-6 rounded-xl space-y-3 shadow-lg">
            <div className="w-10 h-10 flex items-center justify-center bg-[#141414] border border-[#262626] rounded-lg">
              <Clock className="w-5 h-5 text-[#D71920]" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-neutral-400">Working Hours</div>
              <div className="text-xs font-black text-white">{siteConfig.workingHours}</div>
            </div>
          </div>
        </div>

        {/* General Contact Form & Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-[#0e0e0e] border border-[#242424] p-6 sm:p-8 rounded-xl shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[#D71920]/20 text-[#D71920] flex items-center justify-center rounded-full border border-[#D71920]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white uppercase">Message Prepared</h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Thank you <span className="text-white font-bold">{formData.name}</span>. Your enquiry request has been logged. You can also connect via WhatsApp for an immediate response.
                </p>

                <div className="pt-4 flex justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(`Hello ${siteConfig.brandName}, my name is ${formData.name}. Subject: ${formData.subject}. Message: ${formData.message}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#D71920] text-white text-xs font-black uppercase rounded-lg shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#141414] border border-[#242424] text-neutral-300 text-xs font-bold uppercase rounded-lg"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black uppercase text-white tracking-tight border-b border-[#222222] pb-3 font-sans">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Suresh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 79861 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">City / State *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. New Delhi"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Part / Product (Optional)</label>
                    <input
                      type="text"
                      name="product"
                      placeholder="e.g. Splendor Visor"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Bike Model (Optional)</label>
                    <input
                      type="text"
                      name="bikeModel"
                      placeholder="e.g. Activa 6G"
                      value={formData.bikeModel}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Quantity (Optional)</label>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="e.g. 20"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">Message / Requirements *</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    placeholder="Describe your spare part inquiry or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#121212] border border-[#262626] text-white text-xs font-semibold p-3 rounded-lg focus:border-[#D71920] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D71920] hover:bg-[#E31B23] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Location Map Header */}
          <div className="lg:col-span-5 bg-[#0e0e0e] border border-[#242424] p-6 rounded-xl space-y-6 shadow-2xl">
            <div>
              <h3 className="text-base font-black uppercase text-white font-sans">Factory & Trade Depot</h3>
              <p className="text-xs text-neutral-400 mt-1">
                {siteConfig.address}, {siteConfig.city}, {siteConfig.state} - {siteConfig.pincode}
              </p>
            </div>

            <div className="relative aspect-[4/3] bg-[#121212] border border-[#262626] rounded-xl flex items-center justify-center text-center p-4">
              <div className="space-y-2">
                <MapPin className="w-8 h-8 text-[#D71920] mx-auto animate-bounce" />
                <div className="text-sm font-black text-white uppercase">{siteConfig.brandName} Main Hub</div>
                <div className="text-xs text-neutral-400">{siteConfig.city}, {siteConfig.state}</div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.address}, ${siteConfig.city}, ${siteConfig.state}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#121212] border border-[#262626] hover:border-[#D71920] text-white text-xs font-black uppercase rounded-lg transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#D71920]" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Dealer Enquiry Component */}
        <DealerEnquiry />

      </div>
    </div>
  );
};

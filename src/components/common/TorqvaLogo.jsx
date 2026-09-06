import React from 'react';
import { Link } from 'react-router-dom';

export const TorqvaLogo = ({ variant = 'header', className = '', showLink = true }) => {
  if (variant === 'full') {
    const content = (
      <div className={`relative rounded-2xl overflow-hidden border border-[#222734] shadow-2xl bg-[#07080A] p-6 text-center ${className}`}>
        <img
          src="/torqva-full-logo.svg"
          alt="TORQVA - Engineered for Every Ride | Supplier of Premium Quality Two-Wheeler Plastic Body Parts"
          className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
        />
      </div>
    );
    return showLink ? <Link to="/">{content}</Link> : content;
  }

  if (variant === 'badge') {
    const content = (
      <div className={`relative group inline-flex items-center gap-3 bg-[#0F1117] border border-[#222734] hover:border-[#E31B23] p-2 px-3 rounded-xl transition-all shadow-md ${className}`}>
        <img
          src="/torqva-nav-logo.svg"
          alt="TORQVA Logo"
          className="h-10 w-auto object-contain"
        />
      </div>
    );
    return showLink ? <Link to="/">{content}</Link> : content;
  }

  // Header / Default variant - Premium Modern Classic Automotive Emblem
  const headerContent = (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* 3D Metallic Emblem Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#181C26] to-[#0A0B0E] border border-[#222734] group-hover:border-[#E31B23] rounded-xl transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(227,27,35,0.4)] group-hover:scale-105">
        <svg viewBox="0 0 60 60" className="w-7 h-7">
          <defs>
            <linearGradient id="torqRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2A35" />
              <stop offset="100%" stopColor="#A30D13" />
            </linearGradient>
            <linearGradient id="torqSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>
          <polygon points="6,6 24,6 20,12 10,12" fill="url(#torqRedGrad)"/>
          <polygon points="54,6 36,6 40,12 50,12" fill="url(#torqRedGrad)"/>
          <polygon points="30,56 2,24 10,24 30,48 50,24 58,24" fill="url(#torqSilverGrad)"/>
          <polygon points="14,24 46,24 42,30 36,30 36,44 30,50 24,44 24,30 18,30" fill="url(#torqRedGrad)"/>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="text-2xl font-black tracking-wider uppercase font-heading flex items-center leading-none">
          <span className="text-white drop-shadow-sm">TORQ</span>
          <span className="text-[#E31B23] italic font-black text-2.5xl drop-shadow-[0_0_8px_rgba(227,27,35,0.6)]">V</span>
          <span className="text-white drop-shadow-sm">A</span>
        </div>
        <span className="text-[9px] font-black text-[#E31B23] tracking-[0.2em] uppercase mt-0.5 font-tech">
          ENGINEERED FOR EVERY RIDE
        </span>
      </div>
    </div>
  );

  return showLink ? <Link to="/" className="inline-block">{headerContent}</Link> : headerContent;
};

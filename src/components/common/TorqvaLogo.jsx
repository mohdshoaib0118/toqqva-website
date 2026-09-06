import React from 'react';
import { Link } from 'react-router-dom';

export const TorqvaLogo = ({ variant = 'header', className = '', showLink = true }) => {
  if (variant === 'full') {
    const content = (
      <div className={`relative rounded-lg overflow-hidden border border-[#242424] shadow-2xl bg-[#050505] p-4 text-center ${className}`}>
        <img
          src="/torqva-full-logo.svg"
          alt="TORQVA - Engineered for Every Ride | Supplier of Premium Quality Two-Wheeler Plastic Body Parts"
          className="w-full h-auto max-w-2xl mx-auto drop-shadow-xl"
        />
      </div>
    );
    return showLink ? <Link to="/">{content}</Link> : content;
  }

  if (variant === 'badge') {
    const content = (
      <div className={`relative group inline-flex items-center gap-3 bg-[#0a0a0a] border border-[#242424] hover:border-[#D71920]/60 p-2 px-3 rounded-md transition-all ${className}`}>
        <img
          src="/torqva-nav-logo.svg"
          alt="TORQVA Logo"
          className="h-10 w-auto object-contain"
        />
      </div>
    );
    return showLink ? <Link to="/">{content}</Link> : content;
  }

  // Header / Default variant
  const headerContent = (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Emblem Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#141414] to-[#080808] border border-[#333333] group-hover:border-[#D71920] rounded-sm transition-all duration-300 shadow-md group-hover:shadow-[#D71920]/30">
        <svg viewBox="0 0 60 60" className="w-7 h-7">
          <polygon points="6,6 24,6 20,12 10,12" fill="#D71920"/>
          <polygon points="54,6 36,6 40,12 50,12" fill="#D71920"/>
          <polygon points="30,56 2,24 10,24 30,48 50,24 58,24" fill="#E2E8F0"/>
          <polygon points="14,24 46,24 42,30 36,30 36,44 30,50 24,44 24,30 18,30" fill="#D71920"/>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="text-2xl font-black tracking-wider uppercase font-sans flex items-center leading-none">
          <span className="text-white">TORQ</span>
          <span className="text-[#D71920] italic font-black">V</span>
          <span className="text-white">A</span>
        </div>
        <span className="text-[9px] font-extrabold text-[#D71920] tracking-widest uppercase mt-0.5">
          ENGINEERED FOR EVERY RIDE
        </span>
      </div>
    </div>
  );

  return showLink ? <Link to="/" className="inline-block">{headerContent}</Link> : headerContent;
};

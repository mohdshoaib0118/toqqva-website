import React, { useState } from 'react';
import { ShieldAlert, Wrench, Shield, Component } from 'lucide-react';

export const ImageWithFallback = ({
  src,
  alt = 'TORQVA Two Wheeler Spare Part',
  className = 'w-full h-full object-cover',
  category = 'Spare Part',
  fallbackTitle = 'TORQVA Plastic Body Part',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [retried, setRetried] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!retried) {
      setRetried(true);
      // Fallback to a guaranteed high quality motorcycle spare part photo
      setImgSrc('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80');
    } else {
      setError(true);
    }
  };

  if (error || !imgSrc) {
    return (
      <div className="relative w-full h-full min-h-[160px] bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#050505] border border-[#242424] flex flex-col items-center justify-center p-4 text-center select-none group overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-carbon-pattern opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D71920]/10 blur-xl pointer-events-none"></div>

        {/* Part Badge Icon */}
        <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-[#1c1c1c] border border-[#333] text-[#D71920] shadow-lg group-hover:scale-110 transition-transform">
          <Component className="w-6 h-6" />
        </div>

        <span className="text-xs font-black uppercase text-white tracking-wider line-clamp-1">
          {alt || fallbackTitle}
        </span>
        <span className="text-[10px] font-bold text-[#D71920] uppercase tracking-widest mt-1">
          TORQVA OEM SPEC PART
        </span>

        {/* Bottom Corner Accent */}
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-neutral-400 uppercase">
          {category}
        </div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

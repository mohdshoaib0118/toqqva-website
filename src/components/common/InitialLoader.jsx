import React, { useState, useEffect } from 'react';

export const InitialLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING AUTOMOTIVE CATALOGUE...');

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 5;
        if (next > 40 && next < 70) {
          setStatusText('VERIFYING OEM FITMENT DATA...');
        } else if (next >= 70 && next < 95) {
          setStatusText('LOADING VIRGIN ABS SPARE PARTS...');
        } else if (next >= 95) {
          setStatusText('PRECISION READY');
        }
        return next;
      });
    }, 45);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading && progress >= 100) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080A] text-white transition-all duration-700 ${
        loading ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      {/* High-Tech Background FX */}
      <div className="absolute inset-0 bg-mesh-dark opacity-30 pointer-events-none"></div>
      <div className="absolute w-[450px] h-[450px] bg-[#E31B23]/15 rounded-full blur-[140px] animate-pulse-glow pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center space-y-8 text-center px-4 max-w-md w-full">
        
        {/* Animated TORQVA Emblem Container */}
        <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-b from-[#181C26] to-[#0A0B0E] border-2 border-[#E31B23] rounded-3xl shadow-[0_0_50px_rgba(227,27,35,0.45)] animate-float">
          
          {/* Pulsing Outer Glow Ring */}
          <div className="absolute -inset-1 rounded-3xl bg-[#E31B23]/20 blur-md animate-ping"></div>

          {/* SVG Emblem */}
          <svg viewBox="0 0 60 60" className="w-14 h-14 sm:w-16 sm:h-16 relative z-10">
            <defs>
              <linearGradient id="loaderRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF2A35" />
                <stop offset="100%" stopColor="#A30D13" />
              </linearGradient>
              <linearGradient id="loaderSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
            </defs>
            <polygon points="6,6 24,6 20,12 10,12" fill="url(#loaderRedGrad)"/>
            <polygon points="54,6 36,6 40,12 50,12" fill="url(#loaderRedGrad)"/>
            <polygon points="30,56 2,24 10,24 30,48 50,24 58,24" fill="url(#loaderSilverGrad)"/>
            <polygon points="14,24 46,24 42,30 36,30 36,44 30,50 24,44 24,30 18,30" fill="url(#loaderRedGrad)"/>
          </svg>
        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-black uppercase tracking-wider font-heading flex items-center justify-center leading-none">
            <span className="text-white">TORQ</span>
            <span className="text-[#E31B23] italic font-black text-4xl sm:text-5xl drop-shadow-[0_0_12px_rgba(227,27,35,0.7)]">V</span>
            <span className="text-white">A</span>
          </div>
          <p className="text-[10px] sm:text-[11px] font-black text-[#E31B23] tracking-[0.25em] uppercase font-tech">
            ENGINEERED FOR EVERY RIDE
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-2 pt-2">
          <div className="w-full h-1.5 bg-[#171A23] rounded-full overflow-hidden border border-[#222734] relative">
            <div
              className="h-full bg-gradient-to-r from-[#E31B23] to-[#FF2A35] rounded-full transition-all duration-150 shadow-[0_0_15px_#E31B23]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-bold text-neutral-400 font-tech uppercase tracking-wider">
            <span>{statusText}</span>
            <span className="text-white font-mono">{progress}%</span>
          </div>
        </div>

        {/* Micro Quality Badge */}
        <div className="text-[9px] text-neutral-500 font-tech uppercase tracking-widest pt-4">
          // INDIAN OEM-GRADE AUTOMOTIVE PLASTICS //
        </div>

      </div>
    </div>
  );
};

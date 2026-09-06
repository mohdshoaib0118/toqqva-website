import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const LightboxModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || !images || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6">
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
          <ImageIcon className="w-4 h-4 text-[#D71920]" />
          <span>{currentItem.title || `TORQVA Showcase ${currentIndex + 1}/${images.length}`}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white bg-[#141414] border border-[#242424] rounded-sm transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-[#141414]/80 border border-[#242424] hover:border-[#D71920] rounded-sm transition-all z-10"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Display */}
      <div className="max-w-5xl max-h-[80vh] overflow-hidden flex flex-col items-center">
        <ImageWithFallback
          src={currentItem.src || currentItem.image}
          alt={currentItem.title || 'TORQVA Gallery'}
          className="max-w-full max-h-[70vh] object-contain rounded-sm shadow-2xl border border-[#242424]"
        />
        {currentItem.caption && (
          <p className="mt-3 text-xs sm:text-sm text-neutral-300 text-center max-w-xl font-medium">
            {currentItem.caption}
          </p>
        )}
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-[#141414]/80 border border-[#242424] hover:border-[#D71920] rounded-sm transition-all z-10"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

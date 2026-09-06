import React from 'react';
import { Plus, Minus } from 'lucide-react';

export const QuantitySelector = ({ quantity = 1, onChange, min = 1, className = "" }) => {
  const handleDecrement = (e) => {
    e.stopPropagation();
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    onChange(quantity + 1);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= min) {
      onChange(val);
    } else if (e.target.value === '') {
      onChange(min);
    }
  };

  return (
    <div className={`flex items-center bg-[#050505] border border-[#242424] rounded-sm overflow-hidden ${className}`}>
      <button
        onClick={handleDecrement}
        type="button"
        disabled={quantity <= min}
        className="px-2.5 py-1 text-neutral-300 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-300 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-3 h-3" />
      </button>

      <input
        type="number"
        min={min}
        value={quantity}
        onChange={handleInputChange}
        onClick={(e) => e.stopPropagation()}
        className="w-10 text-center text-xs font-bold text-white bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        onClick={handleIncrement}
        type="button"
        className="px-2.5 py-1 text-neutral-300 hover:text-white transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-3 h-3" />
      </button>
    </div>
  );
};

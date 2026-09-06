import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CopyButton = ({ textToCopy, label = "Copy", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] hover:bg-[#242424] border border-[#242424] hover:border-neutral-500 text-neutral-300 hover:text-white text-[11px] font-bold uppercase rounded-sm transition-all ${className}`}
      title={`Copy ${label}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-500" />
          <span className="text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-neutral-400" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

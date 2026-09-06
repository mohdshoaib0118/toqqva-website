import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex items-center text-xs text-neutral-400 overflow-x-auto py-2">
      <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors shrink-0">
        <Home className="w-3.5 h-3.5 text-[#D71920]" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0 mx-2" />
          {item.path ? (
            <Link to={item.path} className="hover:text-white transition-colors font-semibold uppercase shrink-0">
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-bold uppercase truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

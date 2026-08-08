import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Call‑to‑Action button.
 * Props:
 *   - to: destination URL or route (string)
 *   - children: button label (node)
 *   - className: optional additional classes (string)
 */
const CTAButton = ({ to = '#', children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`inline-block rounded-full px-8 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold transition-all hover:opacity-95 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </Link>
  );
};

export default CTAButton;

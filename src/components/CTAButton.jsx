import React from 'react';

/**
 * Reusable Call‑to‑Action button.
 * Props:
 *   - to: destination href (string)
 *   - children: button label (node)
 *   - className: optional additional classes (string)
 *   - onClick: optional click handler
 */
const CTAButton = ({ to = '#', target = '_self', children, className = '', onClick }) => {
  return (
    <a
      href={to}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`inline-block rounded-full px-8 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold transition-all hover:opacity-95 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
};

export default CTAButton;

import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

/**
 * Reusable navigation link with optional submenu support.
 * Uses Tailwind classes for smooth hover underline animation.
 */
const NavLink = ({ to, children, submenu }) => {
  const [open, setOpen] = useState(false);

  const baseClasses =
    "relative inline-flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95";

  if (submenu && submenu.length) {
    return (
      <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <button className={baseClasses} aria-haspopup="true" aria-expanded={open}>
          {children}
          <FiChevronDown size={12} />
        </button>
        {open && (
          <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 py-2">
            {submenu.map((item) => (
              <li key={item.to}>
                <a href={item.to} className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#4F39F6]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <a href={to} className={baseClasses}>
      {children}
    </a>
  );
};

export default NavLink;

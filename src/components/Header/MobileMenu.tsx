import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Components', href: '/components' },
  { title: 'Documentation', href: '/docs' },
  { title: 'GitHub', href: 'https://github.com/buildeasy/components' },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400
                  ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300'}`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
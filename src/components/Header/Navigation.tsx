import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Components', href: '/components' },
  { title: 'Documentation', href: '/docs' },
  { title: 'GitHub', href: 'https://github.com/GaneshVarma1' },
];

export const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) =>
        item.title === 'GitHub' ? (
          // External link for GitHub
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-300"
          >
            {item.title}
          </a>
        ) : (
          // Internal links
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400
              ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`
            }
          >
            {item.title}
          </NavLink>
        )
      )}
    </nav>
  );
};

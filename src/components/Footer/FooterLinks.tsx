import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLink } from '../../types';

const footerLinks: FooterLink[] = [
  {
    title: 'Product',
    items: [
      { title: 'Components', href: '/components' },
      { title: 'Documentation', href: '/docs' },
      { title: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'GitHub', href: 'https://github.com/buildeasy/components' },
      { title: 'Examples', href: '/examples' },
      { title: 'Templates', href: '/templates' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About', href: '/about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
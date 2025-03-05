import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'Components', href: '/components' },
  { title: 'Documentation', href: '/docs' },
  { title: 'GitHub', href: 'https://github.com/GaneshVarma1' },
];

export const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-primary-500 ${
              isActive ? 'text-primary-500' : 'text-gray-300'
            }`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

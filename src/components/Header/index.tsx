import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
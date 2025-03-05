import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme] = useState<'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Keep toggleTheme function but make it do nothing
  const toggleTheme = () => {};

  return { theme, toggleTheme };
};
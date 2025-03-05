import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ComponentThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ComponentThemeContext = createContext<ComponentThemeContextType | undefined>(undefined);

export function ComponentThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      // Add or remove 'dark' class from HTML element
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  // Set initial dark mode class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ComponentThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ComponentThemeContext.Provider>
  );
}

export const useComponentTheme = () => {
  const context = useContext(ComponentThemeContext);
  if (context === undefined) {
    throw new Error('useComponentTheme must be used within a ComponentThemeProvider');
  }
  return context;
}; 
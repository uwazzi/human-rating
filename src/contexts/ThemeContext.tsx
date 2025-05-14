'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeAppearance = 'light' | 'dark';

interface ThemeContextType {
  appearance: ThemeAppearance;
  setAppearance: (appearance: ThemeAppearance) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  appearance: 'light',
  setAppearance: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appearance, setAppearance] = useState<ThemeAppearance>('light');
  const [mounted, setMounted] = useState(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    
    // Check for saved preference in localStorage
    const savedAppearance = localStorage.getItem('theme-appearance');
    
    if (savedAppearance && (savedAppearance === 'light' || savedAppearance === 'dark')) {
      setAppearance(savedAppearance as ThemeAppearance);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no saved preference, use system preference
      setAppearance('dark');
    }
    
    // Listen for changes to system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme-appearance')) {
        setAppearance(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Update localStorage when appearance changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme-appearance', appearance);
      
      // Add/remove dark class to ensure consistent styling
      if (appearance === 'dark') {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }, [appearance, mounted]);

  return (
    <ThemeContext.Provider value={{ appearance, setAppearance }}>
      {children}
    </ThemeContext.Provider>
  );
}; 
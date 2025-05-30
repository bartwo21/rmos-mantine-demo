"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { availableColors } from '@/lib/constants';

interface IThemeContextType {
  primaryColor: string;
  changePrimaryColor: () => void;
}

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState<string>('red');

  const changePrimaryColor = () => {
    const currentIndex = availableColors.indexOf(primaryColor);
    let randomIndex;
    
    do {
      randomIndex = Math.floor(Math.random() * availableColors.length);
    } while (randomIndex === currentIndex);
    
    const newColor = availableColors[randomIndex];
    setPrimaryColor(newColor);
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, changePrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
}; 
import React, {ReactNode, useContext, useState} from 'react';
import {Theme, ThemeContextType} from '../types/theme-data-type.ts';
import {ThemeContext} from './theme-context.tsx';

export function useThemeProvider(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSessionProvider must be used within a SessionProvider');
  }
  return context;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

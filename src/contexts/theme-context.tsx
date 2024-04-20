import React from 'react';
import {ThemeContextType} from '../types/theme-data-type.ts';
export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

import React from 'react';
import { UseThemeProps, ThemeProviderProps } from './types.js';

declare const useTheme: () => UseThemeProps;
declare const ThemeProvider: React.FC<ThemeProviderProps>;

export { ThemeProvider, useTheme };

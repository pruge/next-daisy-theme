import React from 'react';
import { UseThemeProps, ThemeProviderProps } from './types.mjs';

declare const useTheme: () => UseThemeProps;
declare const ThemeProvider: React.FC<ThemeProviderProps>;

export { ThemeProvider, useTheme };

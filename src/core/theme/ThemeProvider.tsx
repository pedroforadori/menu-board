import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import type { ReactNode } from 'react';
import { GlobalStyle } from './styles/ThemeProvider';
import type { AppTheme } from './theme';

export function AppThemeProvider({ theme, children }: { theme: AppTheme; children: ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}

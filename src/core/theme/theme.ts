import type { ThemeConfig, ThemeMode } from '../../types';

export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textSecondary: string;
    card: string;
    border: string;
    shadow: string;
    primaryLight: string;
    primaryDark: string;
    secondaryLight: string;
    secondaryDark: string;
  };
  typography: {
    fontFamily: string;
    baseSize: number;
  };
  backgroundImage?: string;
  logoUrl?: string;
  mode: ThemeMode;
}

export const getThemeColors = (isDark: boolean) => {
  return {
    text: isDark ? '#FFFFFF' : '#333333',
    textSecondary: isDark ? '#CCCCCC' : '#666666',
    background: isDark ? '#1A1A1A' : '#FFFFFF',
    border: isDark ? '#333333' : '#E0E0E0',
    shadow: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
    primaryLight: '#FF8C42',
    primaryDark: '#CC5500',
    secondaryLight: '#3A3A4F',
    secondaryDark: '#14141F',
  };
};

export const buildTheme = (config: ThemeConfig, mode: ThemeMode = 'dark'): AppTheme => {
  const background = config.background.type === 'image' ? '#000000' : config.background.value;
  const isLight = mode === 'light';
  const baseColors = getThemeColors(!isLight);

  return {
    colors: {
      primary: config.primaryColor,
      secondary: config.secondaryColor,
      background: isLight ? '#FFFFFF' : background,
      text: isLight ? '#000000' : '#FFFFFF',
      textSecondary: baseColors.textSecondary,
      card: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)',
      border: isLight ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.18)',
      shadow: baseColors.shadow,
      primaryLight: baseColors.primaryLight,
      primaryDark: baseColors.primaryDark,
      secondaryLight: baseColors.secondaryLight,
      secondaryDark: baseColors.secondaryDark,
    },
    typography: {
      fontFamily: config.typography.fontFamily,
      baseSize: config.typography.baseSizePx,
    },
    backgroundImage: config.background.type === 'image' ? config.background.value : undefined,
    logoUrl: config.logoUrl,
    mode,
  };
};

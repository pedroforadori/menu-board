import type { ThemeConfig } from '../../types';

export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    card: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    baseSize: number;
  };
  backgroundImage?: string;
}

export const buildTheme = (config: ThemeConfig): AppTheme => {
  const background = config.background.type === 'image' ? '#000000' : config.background.value;

  return {
    colors: {
      primary: config.primaryColor,
      secondary: config.secondaryColor,
      background,
      text: '#FFFFFF',
      card: 'rgba(255, 255, 255, 0.12)',
      border: 'rgba(255, 255, 255, 0.18)',
    },
    typography: {
      fontFamily: config.typography.fontFamily,
      baseSize: config.typography.baseSizePx,
    },
    backgroundImage: config.background.type === 'image' ? config.background.value : undefined,
  };
};

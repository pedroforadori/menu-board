import { buildTheme, getThemeColors } from '../../../core/theme/theme';

describe('Theme System', () => {
  describe('buildTheme', () => {
    it('builds a complete theme object with provided config', () => {
      const config = {
        primaryColor: '#FF6B00',
        secondaryColor: '#1E1E2F',
        background: { type: 'color' as const, value: '#000000' },
        typography: { fontFamily: 'Arial', baseSizePx: 16 },
        logoUrl: 'https://example.com/logo.png',
      };

      const theme = buildTheme(config);

      expect(theme).toHaveProperty('colors');
      expect(theme).toHaveProperty('typography');
      expect(theme).toHaveProperty('logoUrl');
      expect(theme.colors.primary).toBe('#FF6B00');
      expect(theme.colors.secondary).toBe('#1E1E2F');
      expect(theme.colors.background).toBe('#000000');
      expect(theme.typography.fontFamily).toBe('Arial');
      expect(theme.typography.baseSize).toBe(16);
      expect(theme.logoUrl).toBe('https://example.com/logo.png');
    });

    // it('handles background gradients', () => {
    //   const config = {
    //     primaryColor: '#FF6B00',
    //     secondaryColor: '#1E1E2F',
    //     background: {
    //       type: 'gradient' as const,
    //       value: 'linear-gradient(45deg, #FF6B00, #1E1E2F)'
    //     },
    //     typography: { fontFamily: 'Arial', baseSizePx: 16 },
    //     logoUrl: 'https://example.com/logo.png',
    //   };

    //   const theme = buildTheme(config);

    //   expect(theme.colors.background).toBe('linear-gradient(45deg, #FF6B00, #1E1E2F)');
    // });

    it('generates derived colors from primary and secondary', () => {
      const config = {
        primaryColor: '#FF6B00',
        secondaryColor: '#1E1E2F',
        background: { type: 'color' as const, value: '#000000' },
        typography: { fontFamily: 'Arial', baseSizePx: 16 },
        logoUrl: 'https://example.com/logo.png',
      };

      const theme = buildTheme(config);

      // Check that derived colors are generated
      expect(theme.colors).toHaveProperty('primaryLight');
      expect(theme.colors).toHaveProperty('primaryDark');
      expect(theme.colors).toHaveProperty('secondaryLight');
      expect(theme.colors).toHaveProperty('secondaryDark');
      expect(theme.colors).toHaveProperty('text');
      expect(theme.colors).toHaveProperty('textSecondary');
      expect(theme.colors).toHaveProperty('border');
      expect(theme.colors).toHaveProperty('shadow');
    });
  });

  describe('getThemeColors', () => {
    it('returns light theme colors when isDark is false', () => {
      const colors = getThemeColors(false);

      expect(colors.text).toBe('#333333');
      expect(colors.background).toBe('#FFFFFF');
      expect(colors.border).toBe('#E0E0E0');
    });

    it('returns dark theme colors when isDark is true', () => {
      const colors = getThemeColors(true);

      expect(colors.text).toBe('#FFFFFF');
      expect(colors.background).toBe('#1A1A1A');
      expect(colors.border).toBe('#333333');
    });

    it('includes all necessary color properties', () => {
      const colors = getThemeColors(false);

      expect(colors).toHaveProperty('text');
      expect(colors).toHaveProperty('textSecondary');
      expect(colors).toHaveProperty('background');
      expect(colors).toHaveProperty('border');
      expect(colors).toHaveProperty('shadow');
      expect(colors).toHaveProperty('primaryLight');
      expect(colors).toHaveProperty('primaryDark');
      expect(colors).toHaveProperty('secondaryLight');
      expect(colors).toHaveProperty('secondaryDark');
    });
  });

  describe('Theme Integration', () => {
    it('theme colors are properly applied to components', () => {
      const config = {
        primaryColor: '#FF6B00',
        secondaryColor: '#1E1E2F',
        background: { type: 'color' as const, value: '#000000' },
        typography: { fontFamily: 'Arial', baseSizePx: 16 },
        logoUrl: 'https://example.com/logo.png',
      };

      const theme = buildTheme(config);

      // Verify that primary and secondary colors are preserved
      expect(theme.colors.primary).toBe('#FF6B00');
      expect(theme.colors.secondary).toBe('#1E1E2F');

      // Verify that base theme colors are applied
      expect(theme.colors.text).toBeDefined();
      expect(theme.colors.background).toBe('#000000'); // Should use config background
    });

    it('handles edge cases gracefully', () => {
      const config = {
        primaryColor: '#FF6B00',
        secondaryColor: '#1E1E2F',
        background: { type: 'color' as const, value: '#FFFFFF' },
        typography: { fontFamily: 'Arial', baseSizePx: 16 },
        logoUrl: 'https://example.com/logo.png',
      };

      const theme = buildTheme(config);

      // Should not crash with any valid config
      expect(theme).toBeDefined();
      expect(theme.colors).toBeDefined();
      expect(theme.typography).toBeDefined();
    });
  });
});
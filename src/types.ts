export type Orientation = 'landscape' | 'portrait';

export type BadgeType = 'new' | 'promo' | 'sold-out';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  background: {
    type: 'color' | 'image';
    value: string;
  };
  typography: {
    fontFamily: string;
    baseSizePx: number;
  };
  logoUrl?: string;
}

export type LayoutMode = 'grid' | 'list' | 'featured';

export interface LayoutConfig {
  mode: LayoutMode;
  orientation: Orientation;
  showCategories: boolean;
  featuredProductId?: string;
}

export interface MediaSlide {
  id: string;
  type: 'image' | 'video';
  url: string;
  durationSeconds: number;
  order: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  badge?: BadgeType;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  title: string;
  order: number;
  products: Product[];
}

export interface MenuData {
  id: string;
  name: string;
  categories: Category[];
}

export interface TenantConfig {
  id: string;
  name: string;
  theme: ThemeConfig;
  layout: LayoutConfig;
  media: MediaSlide[];
}

// Styled Components theme type
declare module 'styled-components' {
  export interface DefaultTheme {
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
}

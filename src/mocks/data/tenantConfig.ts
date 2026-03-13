import type { TenantConfig } from '../../types';

export const tenantConfigMock: TenantConfig = {
  id: 'tenant-123',
  name: 'Burger & Boards',
  theme: {
    primaryColor: '#FF6B00',
    secondaryColor: '#1E1E2F',
    background: {
      type: 'image',
      value: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70',
    },
    typography: {
      fontFamily: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      baseSizePx: 18,
    },
    logoUrl: 'https://via.placeholder.com/240x80?text=Logo',
  },
  layout: {
    mode: 'grid',
    orientation: 'landscape',
    showCategories: true,
    featuredProductId: 'prod-002',
  },
  media: [
    {
      id: 'media-1',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80',
      durationSeconds: 10,
      order: 1,
    },
    {
      id: 'media-2',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1600&q=80',
      durationSeconds: 10,
      order: 2,
    },
  ],
};

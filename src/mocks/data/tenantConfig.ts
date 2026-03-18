import type { TenantConfig } from '../../types';

export const tenantConfigMock: TenantConfig =
{
    id: 'tenant-123',
    name: 'Burger & Boards',
    theme: {
        primaryColor: '#FF6B00',
        secondaryColor: '#1E1E2F',
        background: {
            type: 'image',
            value: '',
        },
        typography: {
            fontFamily: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            baseSizePx: 18,
        },
        logoUrl: 'https://images.unsplash.com/photo-1640812570037-ea415861315b?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    layout: {
        mode: 'grid',
        orientation: 'landscape',
        showCategories: true,
        featuredProductId: 'prod-002',
    },
    media: [
        // {
        //   id: 'media-1',
        //   type: 'image',
        //   url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80',
        //   durationSeconds: 10,
        //   order: 1,
        // },
        // {
        //   id: 'media-2',
        //   type: 'image',
        //   url: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1600&q=80',
        //   durationSeconds: 10,
        //   order: 2,
        // },
    ],
    promotions: [
        {
            id: 'promo-1',
            title: 'Desconto de 20% em Burgers',
            description: 'Aproveite nossa promoção especial!',
            imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
            durationSeconds: 8,
            order: 1,
        },
        {
            id: 'promo-2',
            title: 'Combo Família',
            description: 'Burger + Batata + Refrigerante por R$ 45',
            imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            durationSeconds: 8,
            order: 2,
        },
    ],
};

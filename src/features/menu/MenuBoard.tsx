import { Spin, Typography, Button } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
import { Root, Header, Brand, Logo, Loading } from './styles/MenuBoard';
import { fetchMenuData, fetchTenantConfig } from '../../services/api';
import type { MenuData, TenantConfig, Product, LayoutMode, ThemeMode } from '../../types';
import { buildTheme } from '../../core/theme/theme';
import { AppThemeProvider } from '../../core/theme/ThemeProvider';
import { LayoutEngine } from '../../core/layout/LayoutEngine';
import { MediaCarousel } from '../media/MediaCarousel';

const { Title } = Typography;

export function MenuBoard() {
  const [tenant, setTenant] = useState<TenantConfig | null>(null);
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('grid');
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [tenantResponse, menuResponse] = await Promise.all([fetchTenantConfig(), fetchMenuData()]);
        if (cancelled) return;
        setTenant(tenantResponse);
        setMenu(menuResponse);
      } catch (err) {
        console.error(err);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const featuredProduct = useMemo<Product | undefined>(() => {
    if (!menu || !tenant) return undefined;
    if (!tenant.layout.featuredProductId) return undefined;
    return menu.categories
      .flatMap((category) => category.products)
      .find((product) => product.id === tenant.layout.featuredProductId);
  }, [menu, tenant]);

  const currentConfig = useMemo(() => {
    if (!tenant) return null;
    return { ...tenant.layout, mode: layoutMode };
  }, [tenant, layoutMode]);

  if (!tenant || !menu) {
    return (
      <Root>
        <Loading>
          <Spin size="large" />
        </Loading>
      </Root>
    );
  }

  const theme = buildTheme(tenant.theme, themeMode);

  return (
    <AppThemeProvider theme={theme}>
      <Root>
        <Header>
          <Brand>
            {tenant.theme.logoUrl && <Logo src={tenant.theme.logoUrl} alt={tenant.name} />}
            <Title style={{ margin: 0, color: theme.colors.text }}>{tenant.name}</Title>
          </Brand>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Button
              type="default"
              icon={themeMode === 'dark' ? <SunOutlined /> : <MoonOutlined />}
              onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
              size="large"
              style={{ background: "transparent", color: theme.colors.text, border: 'none', outline: 'none' }}
            />
            <Button
              type="default"
              icon={layoutMode === 'grid' ? <UnorderedListOutlined /> : <AppstoreOutlined />}
              onClick={() => setLayoutMode(layoutMode === 'grid' ? 'list' : 'grid')}
              size="large"
              style={{ background: "transparent", color: theme.colors.text, border: 'none', outline: 'none' }}
            >
              {layoutMode === 'grid' ? 'Lista' : 'Grid'}
            </Button>
          </div>
        </Header>
        <MediaCarousel slides={tenant.media} />
        {currentConfig && <LayoutEngine config={currentConfig} menu={menu} featuredProduct={featuredProduct} />}
      </Root>
    </AppThemeProvider>
  );
}

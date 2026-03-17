import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MenuList } from '../MenuList';
import { buildTheme } from '../../../core/theme/theme';
import type { MenuData } from '../../../types';

const mockMenuData: MenuData = {
  id: 'test-menu',
  name: 'Test Menu',
  categories: [
    {
      id: 'cat-1',
      title: 'Comidas',
      order: 1,
      products: [
        {
          id: 'prod-1',
          name: 'Test Burger',
          description: 'A delicious test burger',
          price: 25.99,
          imageUrl: 'https://example.com/image.jpg',
        },
        {
          id: 'prod-2',
          name: 'Test Pizza',
          description: 'A delicious test pizza',
          price: 35.99,
        },
      ],
    },
    {
      id: 'cat-2',
      title: 'Bebidas',
      order: 2,
      products: [
        {
          id: 'prod-3',
          name: 'Test Drink',
          description: 'A refreshing test drink',
          price: 8.99,
        },
      ],
    },
  ],
};

const mockTheme = buildTheme({
  primaryColor: '#FF6B00',
  secondaryColor: '#1E1E2F',
  background: { type: 'color', value: '#000000' },
  typography: { fontFamily: 'Arial', baseSizePx: 16 },
  logoUrl: 'https://example.com/logo.png',
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('MenuList', () => {
  it('renders all products from all categories', () => {
    renderWithTheme(<MenuList menu={mockMenuData} showCategories={true} />);

    expect(screen.getByText('Test Burger')).toBeInTheDocument();
    expect(screen.getByText('Test Pizza')).toBeInTheDocument();
    expect(screen.getByText('Test Drink')).toBeInTheDocument();
  });

  it('renders category titles when showCategories is true', () => {
    renderWithTheme(<MenuList menu={mockMenuData} showCategories={true} />);

    expect(screen.getByText('Comidas')).toBeInTheDocument();
    expect(screen.getByText('Bebidas')).toBeInTheDocument();
  });

  it('does not render category titles when showCategories is false', () => {
    renderWithTheme(<MenuList menu={mockMenuData} showCategories={false} />);

    expect(screen.queryByText('Comidas')).not.toBeInTheDocument();
    expect(screen.queryByText('Bebidas')).not.toBeInTheDocument();
  });

  it('renders products in list layout', () => {
    renderWithTheme(<MenuList menu={mockMenuData} showCategories={true} />);

    // Check if products are rendered
    const products = screen.getAllByText(/Test/);
    expect(products.length).toBeGreaterThan(0);

    // Verify list layout is applied (this would require more specific testing)
  });

  it('renders products with correct prices', () => {
    renderWithTheme(<MenuList menu={mockMenuData} showCategories={true} />);

    expect(screen.getByText('R$ 25.99')).toBeInTheDocument();
    expect(screen.getByText('R$ 35.99')).toBeInTheDocument();
    expect(screen.getByText('R$ 8.99')).toBeInTheDocument();
  });

  it('renders products with descriptions', () => {
    renderWithTheme(<MenuList menu={mockMenuData} showCategories={true} />);

    expect(screen.getByText('A delicious test burger')).toBeInTheDocument();
    expect(screen.getByText('A delicious test pizza')).toBeInTheDocument();
    expect(screen.getByText('A refreshing test drink')).toBeInTheDocument();
  });

  it('handles empty categories gracefully', () => {
    const emptyMenuData: MenuData = {
      id: 'empty-menu',
      name: 'Empty Menu',
      categories: [],
    };

    renderWithTheme(<MenuList menu={emptyMenuData} showCategories={true} />);

    // Should render without crashing
    expect(screen.queryByText(/Test/)).not.toBeInTheDocument();
  });

  it('handles categories with no products gracefully', () => {
    const menuWithEmptyCategory: MenuData = {
      id: 'menu-with-empty-category',
      name: 'Menu with Empty Category',
      categories: [
        {
          id: 'empty-cat',
          title: 'Empty Category',
          order: 1,
          products: [],
        },
      ],
    };

    renderWithTheme(<MenuList menu={menuWithEmptyCategory} showCategories={true} />);

    expect(screen.getByText('Empty Category')).toBeInTheDocument();
    // Should not crash when category has no products
  });
});
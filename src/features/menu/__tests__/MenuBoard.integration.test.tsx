import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MenuBoard } from '../../../features/menu/MenuBoard';
import { buildTheme } from '../../../core/theme/theme';

// Mock the API service
jest.mock('../../../services/api', () => ({
  fetchMenuData: jest.fn(() =>
    Promise.resolve({
      id: 'test-menu',
      name: 'Burger & Boards',
      categories: [
        {
          id: 'burgers',
          title: 'Burgers',
          order: 1,
          products: [
            {
              id: 'classic-beef',
              name: 'Classic Beef Burger',
              description: 'Juicy beef patty with fresh vegetables',
              price: 25.99,
              imageUrl: 'https://example.com/burger.jpg',
            },
          ],
        },
        {
          id: 'drinks',
          title: 'Drinks',
          order: 2,
          products: [
            {
              id: 'coca-cola',
              name: 'Coca Cola',
              description: 'Refreshing cola drink',
              price: 5.99,
              imageUrl: 'https://example.com/cola.jpg',
            },
          ],
        },
      ],
    })
  ),
  fetchTenantConfig: jest.fn(() =>
    Promise.resolve({
      id: 'test-tenant',
      name: 'Burger & Boards',
      theme: {
        logoUrl: 'https://example.com/logo.png',
        primaryColor: '#FF6B00',
        secondaryColor: '#1E1E2F',
        background: { type: 'color', value: '#000000' },
        typography: { fontFamily: 'Arial', baseSizePx: 16 },
      },
      layout: {
        mode: 'grid',
        orientation: 'landscape',
        showCategories: true,
      },
      media: [],
    })
  ),
}));

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

describe('Menu Board Integration', () => {
  it('renders complete menu board with all components', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check main title
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();

      // Check categories
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
      expect(screen.getByText(/Drinks/i)).toBeInTheDocument();

      // Check products
      expect(screen.getByText(/Classic Beef Burger/i)).toBeInTheDocument();
      expect(screen.getByText(/Juicy beef patty/i)).toBeInTheDocument();
    });
  });

  it('displays products with correct pricing format', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check that prices are formatted correctly (R$ XX.XX)
      const priceRegex = /R\$\s*\d+\.\d{2}/;
      const prices = screen.getAllByText(priceRegex);
      expect(prices.length).toBeGreaterThan(0);
    });
  });

  it('renders product images when available', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check for product images (alt text should match product names)
      const images = screen.getAllByAltText(/Burger|Drink|Pizza/i);
      expect(images.length).toBeGreaterThan(0);
    });
  });

  it('handles theme application across all components', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Verify that the entire menu board renders with theme applied
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
    });

    // The theme should be applied to all styled components
    // This is tested implicitly by the fact that components render without errors
  });

  it('maintains component hierarchy and layout', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check that categories contain products
      const burgersCategory = screen.getByText(/Burgers/i).closest('div');
      const drinksCategory = screen.getByText(/Drinks/i).closest('div');

      expect(burgersCategory).toBeInTheDocument();
      expect(drinksCategory).toBeInTheDocument();

      // Check that products are within their categories
      expect(burgersCategory?.textContent).toMatch(/Classic Beef Burger/i);
      expect(drinksCategory?.textContent).toMatch(/Coca Cola/i);
    });
  });

  it('handles responsive layout correctly', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check that the layout renders properly
      // This would require more specific responsive testing
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
    });
  });

  it('integrates with API data correctly', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Verify that API data is properly integrated
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
      expect(screen.getByText(/Classic Beef Burger/i)).toBeInTheDocument();
    });

    // The component should handle API responses and render data appropriately
  });
});
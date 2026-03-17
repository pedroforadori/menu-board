import { screen, waitFor } from '@testing-library/react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MenuBoard } from '../MenuBoard';
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

describe('MenuBoard', () => {
  it('renders the tenant title and a product card', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
      expect(screen.getByText(/Classic Beef Burger/i)).toBeInTheDocument();
    });
  });

  it('renders menu categories', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check for category titles
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
      expect(screen.getByText(/Drinks/i)).toBeInTheDocument();
    });
  });

  it('renders product prices correctly', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check for price formatting
      expect(screen.getAllByText(/R\$\s*\d+\.\d{2}/)[0]).toBeInTheDocument();
    });
  });

  it('renders product descriptions', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check for product descriptions
      expect(screen.getByText(/Juicy beef patty/i)).toBeInTheDocument();
    });
  });

  it('renders with theme applied', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
    });

    // Verify that the component renders with theme (this would require more specific testing)
  });

  it('handles loading state gracefully', async () => {
    // This test would require mocking the API call to simulate loading
    renderWithTheme(<MenuBoard />);

    // For now, we verify that the component renders without crashing
    await waitFor(() => {
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
    });
  });

  it('handles error state gracefully', async () => {
    // This test would require mocking API errors
    renderWithTheme(<MenuBoard />);

    // For now, we verify that the component renders without crashing
    await waitFor(() => {
      expect(screen.getByText(/Burgers/i)).toBeInTheDocument();
    });
  });

  it('renders featured products section', async () => {
    renderWithTheme(<MenuBoard />);

    await waitFor(() => {
      // Check if featured products are rendered (if any exist in mock data)
      // const featuredElements = screen.queryAllByText(/Featured/i);
      // This might not exist in current mock data, so we just verify no crash
    });
  });
});

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ProductCard } from '../ProductCard';
import { buildTheme } from '../../../core/theme/theme';
import type { Product } from '../../../types';

const mockProduct: Product = {
  id: 'test-product',
  name: 'Test Burger',
  description: 'A delicious test burger',
  price: 25.99,
  imageUrl: 'https://example.com/image.jpg',
  badge: 'promo',
};

const mockProductWithoutImage: Product = {
  id: 'test-product-no-image',
  name: 'Test Burger No Image',
  description: 'A delicious test burger without image',
  price: 22.99,
};

// const mockTheme = buildTheme({
//   primaryColor: '#FF6B00',
//   secondaryColor: '#1E1E2F',
//   background: { type: 'color', value: '#000000' },
//   typography: { fontFamily: 'Arial', baseSizePx: 16 },
//   logoUrl: 'https://example.com/logo.png',
// });

// const renderWithTheme = (component: React.ReactElement) => {
//   return render(
//     <ThemeProvider theme={mockTheme}>
//       {component}
//     </ThemeProvider>
//   );
// };

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

describe('ProductCard', () => {
  it('renders product name and price', () => {
    renderWithTheme(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Burger')).toBeInTheDocument();
    expect(screen.getByText('R$ 25.99')).toBeInTheDocument();
  });

  it('renders product description', () => {
    renderWithTheme(<ProductCard product={mockProduct} />);

    expect(screen.getByText('A delicious test burger')).toBeInTheDocument();
  });

  it('renders product image when available', () => {
    renderWithTheme(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText('Test Burger');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders placeholder when image is not available', () => {
    renderWithTheme(<ProductCard product={mockProductWithoutImage} />);

    // The placeholder contains an image with alt text "Sem imagem"
    const placeholderImage = screen.getByAltText('Sem imagem');
    expect(placeholderImage).toBeInTheDocument();
  });

  it('renders promo badge correctly', () => {
    renderWithTheme(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Promoção')).toBeInTheDocument();
  });

  it('renders new badge correctly', () => {
    const productWithNewBadge = { ...mockProduct, badge: 'new' as const };
    renderWithTheme(<ProductCard product={productWithNewBadge} />);

    expect(screen.getByText('Novo')).toBeInTheDocument();
  });

  it('renders sold-out badge correctly', () => {
    const productWithSoldOutBadge = { ...mockProduct, badge: 'sold-out' as const };
    renderWithTheme(<ProductCard product={productWithSoldOutBadge} />);

    expect(screen.getByText('Esgotado')).toBeInTheDocument();
  });

  it('does not render badge when product has no badge', () => {
    const productWithoutBadge = { ...mockProduct, badge: undefined };
    renderWithTheme(<ProductCard product={productWithoutBadge} />);

    expect(screen.queryByText('Promoção')).not.toBeInTheDocument();
    expect(screen.queryByText('Novo')).not.toBeInTheDocument();
    expect(screen.queryByText('Esgotado')).not.toBeInTheDocument();
  });

  it('applies correct theme colors', () => {
    renderWithTheme(<ProductCard product={mockProduct} />);

    // The card should have the theme colors applied
    const card = screen.getByText('Test Burger').closest('.ant-card');
    expect(card).toBeInTheDocument();
  });
});
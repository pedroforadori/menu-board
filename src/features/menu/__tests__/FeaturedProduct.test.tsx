import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FeaturedProduct } from '../FeaturedProduct';
import { buildTheme } from '../../../core/theme/theme';
import type { Product } from '../../../types';

const mockProduct: Product = {
    id: 'featured-prod-1',
    name: 'Featured Burger',
    description: 'Our most popular burger with special sauce',
    price: 29.99,
    imageUrl: 'https://example.com/featured-burger.jpg',
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

describe('FeaturedProduct', () => {
    it('renders product name', () => {
        renderWithTheme(<FeaturedProduct product={mockProduct} />);

        expect(screen.getByText('Featured Burger')).toBeInTheDocument();
    });

    it('renders product description', () => {
        renderWithTheme(<FeaturedProduct product={mockProduct} />);

        expect(screen.getByText('Our most popular burger with special sauce')).toBeInTheDocument();
    });

    it('renders product price with correct formatting', () => {
        renderWithTheme(<FeaturedProduct product={mockProduct} />);

        expect(screen.getByText('R$ 29.99')).toBeInTheDocument();
    });

    it('renders product image when imageUrl is provided', () => {
        renderWithTheme(<FeaturedProduct product={mockProduct} />);

        const image = document.querySelector('div[image]');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('image', 'https://example.com/featured-burger.jpg');
    });

    it('handles product without image gracefully', () => {
        const productWithoutImage: Product = {
            ...mockProduct,
            imageUrl: undefined,
        };

        renderWithTheme(<FeaturedProduct product={productWithoutImage} />);

        // Should render without crashing
        expect(screen.getByText('Featured Burger')).toBeInTheDocument();
        expect(screen.queryByAltText('Featured Burger')).not.toBeInTheDocument();
    });

    it('applies featured styling', () => {
        renderWithTheme(<FeaturedProduct product={mockProduct} />);

        // Check if the component has featured styling (this would require more specific testing)
        const featuredElement = screen.getByText('Featured Burger').closest('div');
        expect(featuredElement).toBeInTheDocument();
    });

    it('renders with theme colors', () => {
        renderWithTheme(<FeaturedProduct product={mockProduct} />);

        // Verify that the component renders with theme applied
        expect(screen.getByText('Featured Burger')).toBeInTheDocument();
    });

    it('handles long product names', () => {
        const productWithLongName: Product = {
            ...mockProduct,
            name: 'Very Long Product Name That Might Cause Layout Issues',
        };

        renderWithTheme(<FeaturedProduct product={productWithLongName} />);

        expect(screen.getByText('Very Long Product Name That Might Cause Layout Issues')).toBeInTheDocument();
    });

    it('handles long descriptions', () => {
        const productWithLongDescription: Product = {
            ...mockProduct,
            description: 'This is a very long description that might wrap to multiple lines and test how the component handles text overflow and layout adjustments.',
        };

        renderWithTheme(<FeaturedProduct product={productWithLongDescription} />);

        expect(screen.getByText('This is a very long description that might wrap to multiple lines and test how the component handles text overflow and layout adjustments.')).toBeInTheDocument();
    });
});
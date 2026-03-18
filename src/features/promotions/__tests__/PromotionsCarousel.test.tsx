import { render, screen } from '@testing-library/react';
import { PromotionsCarousel } from '../PromotionsCarousel';
import type { Promotion } from '../../../types';

const mockPromotions: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Test Promo 1',
    description: 'Description 1',
    imageUrl: 'https://example.com/image1.jpg',
    durationSeconds: 5,
    order: 1,
  },
  {
    id: 'promo-2',
    title: 'Test Promo 2',
    imageUrl: 'https://example.com/image2.jpg',
    durationSeconds: 5,
    order: 2,
  },
];

describe('PromotionsCarousel', () => {
  it('renders promotions correctly', () => {
    render(<PromotionsCarousel promotions={mockPromotions} />);

    expect(screen.getByText('Test Promo 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Promo 2')).toBeInTheDocument();
  });

  it('renders nothing when no promotions', () => {
    const { container } = render(<PromotionsCarousel promotions={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
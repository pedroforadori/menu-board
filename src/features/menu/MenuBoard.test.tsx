import { screen, waitFor } from '@testing-library/react';
import { render } from '@testing-library/react';
import { MenuBoard } from './MenuBoard';

describe('MenuBoard', () => {
  it('renders the tenant title and a product card', async () => {
    render(<MenuBoard />);

    await waitFor(() => {
      expect(screen.getByText(/Burger & Boards/i)).toBeInTheDocument();
      expect(screen.getByText(/Classic Beef Burger/i)).toBeInTheDocument();
    });
  });
});

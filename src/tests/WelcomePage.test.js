import { render, screen } from '@testing-library/react';
import WelcomePage from '../WelcomePage';

test('renders Découvrez notre sélection de produits link', () => {
  render(<WelcomePage />);
  const linkElement = screen.getByText(/Découvrez notre sélection de produits/i);
  
  expect(linkElement).toBeInTheDocument();
});

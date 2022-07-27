import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom'
import Cart from '../Cart';

test('renders Votre panier est vide', () => {
  render(<Cart />)


  const linkElement = screen.getByText(/Votre panier est vide/i);
  expect(linkElement).toBeInTheDocument();
});
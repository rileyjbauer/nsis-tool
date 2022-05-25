import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TitlePage from './TitlePage';

test('renders home page', () => {
  render(<BrowserRouter><TitlePage /></BrowserRouter>);
  const linkElement = screen.getByText(/Food Systems Nutrition-Sensitive Intervention Selection Tool/i);
  expect(linkElement).toBeInTheDocument();
});

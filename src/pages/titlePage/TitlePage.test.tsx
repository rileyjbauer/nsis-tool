import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TitlePage from './TitlePage';

test('renders home page', () => {
  render(<BrowserRouter><TitlePage /></BrowserRouter>);
  const linkElement = screen.getByText(/FOOD SYSTEMS NUTRITION-SENSITIVE INTERVENTION SELECTION DESIGN TOOL/i);
  expect(linkElement).toBeInTheDocument();
});

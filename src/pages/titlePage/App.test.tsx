import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders home page', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/FOOD SYSTEMS NUTRITION-SENSITIVE INTERVENTION SELECTION DESIGN TOOL/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // to support routing in tests
import App from './App';

test('renders main heading on home page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // The main heading in your home page hero section
  const heading = screen.getByText(/Little Lemon Chicago/i);
  expect(heading).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Check some nav links are rendered
  expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Reservations/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Booking/i })).toBeInTheDocument();
});

test('renders specials section heading', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Check the specials section title exists
  const specialsHeading = screen.getByText(/This week's specials!/i);
  expect(specialsHeading).toBeInTheDocument();
});

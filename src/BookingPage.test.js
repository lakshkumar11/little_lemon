// src/BookingPage.test.js
import { render, screen } from '@testing-library/react';
import Main from './BookingPage';  // Assuming Main is default export from BookingPage.js
import { initializeTimes, updateTimes } from './BookingPage';
import * as api from './api'; // Import the API module

describe('BookingPage Tests', () => {
  test('renders heading in BookingPage', () => {
    render(<Main />);
    const heading = screen.getByText(/Reserve a Table/i);
    expect(heading).toBeInTheDocument();
  });

  test('initializeTimes returns available times for today', () => {
    // initializeTimes uses fetchAPI internally
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('updateTimes returns available times for a given date', () => {
    const someDate = new Date('2025-06-07');  // example fixed date
    const result = updateTimes([], { type: 'update', date: someDate });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(time => typeof time === 'string')).toBe(true);
  });
});

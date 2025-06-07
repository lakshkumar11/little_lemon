import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  const mockTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
    render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  });

  test('renders all form labels and button', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book now|reserve table/i })).toBeInTheDocument();
  });

  test('inputs have correct HTML5 validation attributes', () => {
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeRequired();
    expect(nameInput).toHaveAttribute('type', 'text');

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute('type', 'email');

    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('type', 'date');
    // Optional: check min date attribute matches today
    const today = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', today);

    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('type', 'number');
  });

  test('dispatch called with correct date on date change', () => {
    const dateInput = screen.getByLabelText(/date/i);
    const newDate = new Date().toISOString().split('T')[0];

    fireEvent.change(dateInput, { target: { value: newDate } });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'update', date: newDate });
  });

  test('submit button is disabled initially and enabled after valid input', () => {
    const submitButton = screen.getByRole('button', { name: /book now|reserve table/i });
    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: new Date().toISOString().split('T')[0] } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: mockTimes[0] } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });

    expect(submitButton).toBeEnabled();
  });

  test('form submission logs the form data', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'alice@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: new Date().toISOString().split('T')[0] } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: mockTimes[1] } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });

    const submitButton = screen.getByRole('button', { name: /book now|reserve table/i });
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      name: 'Alice',
      email: 'alice@example.com',
      date: expect.any(String),
      time: mockTimes[1],
      guests: 4,
    });

    consoleSpy.mockRestore();
  });
});

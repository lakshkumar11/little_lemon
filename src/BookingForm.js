// src/BookingForm.js
import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can import and use submitAPI here later
    console.log({
      name,
      email,
      date,
      time,
      guests,
    });

    // Optional: Reset form
    // setName('');
    // setEmail('');
    // setDate('');
    // setTime('');
    // setGuests(1);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'update', date: selectedDate });
  };

  return (
    <section aria-labelledby="booking-form-heading">
      <h2 id="booking-form-heading">Reserve a Table</h2>
      <form onSubmit={handleSubmit} aria-describedby="booking-form-instructions">
        <p id="booking-form-instructions" className="sr-only">
          Please fill in all required fields marked with an asterisk.
        </p>

        <div>
          <label htmlFor="name">Name: <span aria-hidden="true">*</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email">Email: <span aria-hidden="true">*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="date">Date: <span aria-hidden="true">*</span></label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="time">Time: <span aria-hidden="true">*</span></label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-required="true"
            aria-label="Select a time slot"
          >
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests">Number of guests: <span aria-hidden="true">*</span></label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
            aria-required="true"
          />
        </div>

        <button type="submit" aria-label="On Click">
          Book Now
        </button>
      </form>
    </section>
  );
}

export default BookingForm;

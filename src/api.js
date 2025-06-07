// src/api.js

// Seeded random number generator based on a seed value (date)
const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    s = (s * a) % m;
    return s / m;
  };
};

// Simulates fetching available booking times for a given date
export const fetchAPI = function (date) {
  let result = [];
  // Use the day of the month as seed for deterministic availability
  let random = seededRandom(date.getDate());

  // Generate times from 17:00 to 23:30 with 30 min intervals, probabilistically included
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

// Simulates submitting the booking form data to an API, always succeeds here
export const submitAPI = function (formData) {
  return true;
};

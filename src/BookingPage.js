import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api";

const fetchAvailableTimes = (date) => {
  return fetchAPI(new Date(date));
};

const updateTimes = (state, action) => {
  if (action.type === "update") {
    return fetchAvailableTimes(action.date);
  }
  return state;
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default BookingPage;
export { initializeTimes, updateTimes };

// src/App.js
import './App.css';
import Logo from './Logo .png';
import restauranfood from './restauranfood.jpg';
import greeksalad from './greek salad.jpg';
import React from 'react';
import lemondessert from './lemon dessert.jpg';
import bruchetta from './bruchetta.png';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <Router>
      <Helmet>
        <meta name="description" content="The Little Lemon web app provides a seamless online experience for customers to engage with the restaurant. It offers a user-friendly interface to explore menu options, learn about the family-owned Mediterranean restaurant, and most importantly, reserve a table online. The app aims to solve the problem of inconvenient phone-based reservations by providing a 24/7 self-service booking system, enhancing customer satisfaction and streamlining restaurant operations." />
        <meta name="og:title" content="Little Lemon Chicago - Authentic Mediterranean Cuisine & Easy Online Reservations" />
        <meta name="og:description" content="Discover Little Lemon, Chicago's beloved family-owned Mediterranean restaurant. Explore our modern menu and easily reserve your table online for a seamless dining experience." />
        <meta name="og:image" content="https://chatgpt.com/s/m_68430b96a2fc8191bd78e66cc3a68d56" />
      </Helmet>

      <header>
        <img src={Logo} alt="Little Lemon Logo" height="40" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order-online">Order Online</Link>
          <Link to="/login">Login</Link>
          <Link to="/booking">Booking</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="hero">
                <div className="hero-text">
                  <h1>Little Lemon<br />Chicago</h1>
                  <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <Link to="/reservations">
                    <button>Reserve a Table</button>
                  </Link>
                </div>
                <img src={restauranfood} alt="Bruschetta Dish" />
              </section>

              <section className="specials-section">
                <h2>This week's specials!</h2>
                <div className="cards">
                  <div className="card">
                    <img src={greeksalad} alt="Greek Salad" />
                    <h3>Greek Salad - $12.99</h3>
                    <p>Fresh salad with tomatoes, cucumbers, olives, and feta cheese.</p>
                    <Link to="">Order for delivery</Link>
                  </div>
                  <div className="card">
                    <img src={bruchetta} alt="Bruschetta" />
                    <h3>Bruschetta - $12.99</h3>
                    <p>Grilled bread with garlic and tomatoes, drizzled with olive oil.</p>
                    <Link to="">Order for delivery</Link>
                  </div>
                  <div className="card">
                    <img src={lemondessert} alt="Lemon Dessert" />
                    <h3>Lemon Dessert - $12.99</h3>
                    <p>A fresh lemony dessert made with love and tradition.</p>
                    <Link to="">Order for delivery</Link>
                  </div>
                </div>
              </section>
            </>
          }
        />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;

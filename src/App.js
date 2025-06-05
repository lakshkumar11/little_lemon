import './App.css';
import Logo from './Logo .png'
import restauranfood from './restauranfood.jpg';
import greeksalad from './greek salad.jpg';
import React from 'react';
import lemondessert from './lemon dessert.jpg';
import bruchetta from './bruchetta.png'
function App() {
  return (
    <>
      <header>
        <img src={Logo} alt="Little Lemon Logo" height="40" />
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Order</a>
          <a href="#">Login</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon<br />Chicago</h1>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
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
            <a href="#">Order for delivery</a>
          </div>
          <div className="card">
            <img src={bruchetta} alt="Bruschetta" />
            <h3>Bruschetta - $12.99</h3>
            <p>Grilled bread with garlic and tomatoes, drizzled with olive oil.</p>
            <a href="#">Order for delivery</a>
          </div>
          <div className="card">
            <img src={lemondessert} alt="Lemon Dessert" />
            <h3>Lemon Dessert - $12.99</h3>
            <p>A fresh lemony dessert made with love and tradition.</p>
            <a href="#">Order for delivery</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

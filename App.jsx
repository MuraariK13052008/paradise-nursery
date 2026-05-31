import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './components/ProductList';
import CartPage from './components/CartItem';
import AboutUs from './components/AboutUs';

function Navbar({ page, setPage }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand" onClick={() => setPage('home')}>
        Paradise Nursery 🌿
      </a>
      <ul className="navbar-links">
        <li><a href="#" onClick={() => setPage('home')}>Home</a></li>
        <li><a href="#" onClick={() => setPage('plants')}>Plants</a></li>
        <li>
          <button className="cart-icon-btn" onClick={() => setPage('cart')}>
            🛒 Cart
            {totalCount > 0 && (
              <span className="cart-badge">{totalCount}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

function LandingPage({ setPage }) {
  return (
    <div className="landing-bg">
      <Navbar page="home" setPage={setPage} />
      <div className="hero">
        <h1>Paradise Nursery</h1>
        <p>
          Bring nature indoors. Explore our curated collection of tropical,
          succulent, and air-purifying houseplants — delivered fresh to your door.
        </p>
        <button className="btn-primary" onClick={() => setPage('plants')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');

  if (page === 'home') return <LandingPage setPage={setPage} />;

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartPage onContinueShopping={() => setPage('plants')} />}
      {page === 'about' && <AboutUs />}
    </>
  );
}

export default App;

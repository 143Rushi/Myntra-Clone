import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, wishlistCount, wishlistNotification }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Section: Logo + Hamburger */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
              alt="Myntra"
            />
          </Link>
        </div>

        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
        <li><Link to="/home-living">HOME & LIVING</Link></li>
        <li><Link to="/beauty">BEAUTY</Link></li>
        <li><Link to="/studio">STUDIO</Link></li>
      </ul>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      {/* Right Side Icons */}
      <div className="navbar-icons">
        <Link to="/profile">👤</Link>

        <div className="wishlist-wrapper">
          <Link to="/wishlist">❤️</Link>
          {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          {wishlistNotification && <span className="wishlist-toast-icon">+1</span>}
        </div>

        <Link to="/cart" className="cart-icon">
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Componants/Navbar';
import RisingStars from './Componants/RisingStars';
import LuxeDeals from './Componants/LuxeDeals';
import ShopByCategory from './Componants/ShopByCategory';
import Men from './Componants/Men';
import Cart from './Componants/Cart';
import Wishlist from './Componants/Wishlist';

import './App.css'; // Make sure this contains styles for .wishlist-toast

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [wishlistNotification, setWishlistNotification] = useState(false);

  // Add to Cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((i) => i.id === item.id);
      if (exists) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Add to Wishlist
  const handleAddToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.find((i) => i.id === item.id);
      if (exists) return prevItems;

      setWishlistNotification(true);
      setTimeout(() => setWishlistNotification(false), 2000);

      return [...prevItems, item];
    });
  };

  // Buy Now (from Cart or Wishlist)
  const handleBuyNow = (id) => {
    const itemFromCart = cartItems.find((i) => i.id === id);
    const itemFromWishlist = wishlistItems.find((i) => i.id === id);
    const item = itemFromCart || itemFromWishlist;

    if (item) {
      setPurchasedItems((prev) => [...prev, item]);
      setCartItems((prev) => prev.filter((i) => i.id !== id));
      setWishlistItems((prev) => prev.filter((i) => i.id !== id));
    }
  };

  return (
    <Router>
      <Navbar
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <RisingStars />
              <LuxeDeals />
              <ShopByCategory />
            </>
          }
        />
        <Route
          path="/men"
          element={
            <Men
              handleAddToCart={handleAddToCart}
              handleAddToWishlist={handleAddToWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleBuyNow={handleBuyNow}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              handleBuyNow={handleBuyNow}
              purchasedItems={purchasedItems}
            />
          }
        />
      </Routes>

      {/* Toast Notification */}
      {wishlistNotification && (
        <div className="wishlist-toast">💖 Added to Wishlist!</div>
      )}
    </Router>
  );
}

export default App;

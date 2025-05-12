import React from 'react';
import './Wishlist.css'; // Ensure you have styling for both wishlist and purchases

const Wishlist = ({ wishlistItems, handleBuyNow, purchasedItems }) => {
  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist yet.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-image" />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <button className="buy-now-btn" onClick={() => handleBuyNow(item.id)}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Your Purchased Items Section */}
      <h2>Your Purchases</h2>
      {purchasedItems.length === 0 ? (
        <p>No purchases yet.</p>
      ) : (
        <div className="wishlist-grid">
          {purchasedItems.map((item) => (
            <div key={item.id} className="wishlist-card purchased">
              <img src={item.image} alt={item.name} className="wishlist-image" />
              <h3>{item.name}</h3>
              <p>Purchased at ₹{item.price}</p>
              <span className="purchased-label">✔ Purchased</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

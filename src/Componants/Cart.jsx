import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleBuyNow }) => {
  const [purchasedItems, setPurchasedItems] = useState([]);

  const handleBuy = (item) => {
    handleBuyNow(item.id);
    setPurchasedItems((prev) => [...prev, item]);
    alert(`✅ You bought ${item.title} for ₹${item.price * item.quantity}!`);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-section">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div className="cart-card fade-in" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="price">
                    Price: ₹{item.price} × {item.quantity}
                  </div>
                  <div className="total">Total: ₹{item.price * item.quantity}</div>
                  <button
                    className="buy-btn"
                    onClick={() => handleBuy(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        </>
      )}

      {/* ✅ Purchased Items Section */}
      {purchasedItems.length > 0 && (
        <div className="purchased-section">
          <h2 className="purchased-title">✅ Your Purchases</h2>
          <div className="cart-grid">
            {purchasedItems.map((item) => (
              <div className="cart-card fade-in purchased" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="price">
                    Price: ₹{item.price} × {item.quantity}
                  </div>
                  <div className="total">Total: ₹{item.price * item.quantity}</div>
                  <button className="purchased-btn" disabled>
                    Purchased ✅
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

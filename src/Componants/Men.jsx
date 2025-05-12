import React from 'react';
import './Men.css';

const Men = ({ handleAddToCart, handleAddToWishlist }) => {
  return (
    <div className="men-products-section">
      <h2>Men's Fashion Picks</h2>
      <div className="product-grid">

        {/* === Product 1 === */}
        <div className="product-card">
          <img src="https://simp9.in/wp-content/uploads/2024/12/LPP_0427-scaled.jpg" alt="Roadster T-shirt" />
          <div className="rating">⭐ 4.1 <span>(2.1k)</span></div>
          <h4>Roadster</h4>
          <p>Solid Polo Pure Cotton T-shirt</p>
          <div className="price">
            <span className="new">Rs. 449</span>
            <span className="old">Rs. 1499</span>
            <span className="offer">70% OFF</span>
          </div>
          <div className="btn-group">
            <button className="add-cart-btn" onClick={() => handleAddToCart({
              id: 1,
              title: "Roadster",
              description: "Solid Polo Pure Cotton T-shirt",
              price: 449,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0427-scaled.jpg"
            })}>Add to Cart</button>
            <button className="wishlist-btn" onClick={() => handleAddToWishlist({
              id: 1,
              title: "Roadster",
              description: "Solid Polo Pure Cotton T-shirt",
              price: 449,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0427-scaled.jpg"
            })}>♡ Wishlist</button>
          </div>
        </div>

        {/* === Product 2 === */}
        <div className="product-card">
          <img src="https://simp9.in/wp-content/uploads/2025/01/LPP_0384-scaled-e1738146343982-768x1152.jpg" alt="Rare Rabbit Jacket" />
          <div className="rating">⭐ 4.8 <span>(5)</span></div>
          <h4>RARE RABBIT</h4>
          <p>Quilted Jacket with Patchwork</p>
          <div className="price">
            <span className="new">Rs. 5979</span>
            <span className="old">Rs. 9199</span>
            <span className="offer">35% OFF</span>
          </div>
          <div className="btn-group">
            <button className="add-cart-btn" onClick={() => handleAddToCart({
              id: 2,
              title: "RARE RABBIT",
              description: "Quilted Jacket with Patchwork",
              price: 5979,
              image: "https://simp9.in/wp-content/uploads/2025/01/LPP_0384-scaled-e1738146343982-768x1152.jpg"
            })}>Add to Cart</button>
            <button className="wishlist-btn" onClick={() => handleAddToWishlist({
              id: 2,
              title: "RARE RABBIT",
              description: "Quilted Jacket with Patchwork",
              price: 5979,
              image: "https://simp9.in/wp-content/uploads/2025/01/LPP_0384-scaled-e1738146343982-768x1152.jpg"
            })}>♡ Wishlist</button>
          </div>
        </div>

        {/* === Product 3 === */}
        <div className="product-card">
          <img src="https://simp9.in/wp-content/uploads/2024/12/LPP_0483-scaled.jpg" alt="Roadster Pullover" />
          <div className="rating">⭐ 4.2 <span>(202)</span></div>
          <h4>Roadster</h4>
          <p>Cable Knit Acrylic Pullover</p>
          <div className="price">
            <span className="new">Rs. 499</span>
            <span className="old">Rs. 1699</span>
            <span className="offer">Rs. 1200 OFF</span>
          </div>
          <div className="btn-group">
            <button className="add-cart-btn" onClick={() => handleAddToCart({
              id: 3,
              title: "Roadster",
              description: "Cable Knit Acrylic Pullover",
              price: 499,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0483-scaled.jpg"
            })}>Add to Cart</button>
            <button className="wishlist-btn" onClick={() => handleAddToWishlist({
              id: 3,
              title: "Roadster",
              description: "Cable Knit Acrylic Pullover",
              price: 499,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0483-scaled.jpg"
            })}>♡ Wishlist</button>
          </div>
        </div>

        {/* === Product 4 === */}
        <div className="product-card">
          <img src="https://simp9.in/wp-content/uploads/2024/12/LPP_0432-scaled.jpg" alt="Max T-shirt" />
          <div className="rating">⭐ 4.3 <span>(2.5k)</span></div>
          <h4>Max</h4>
          <p>Men Polo Collar T-shirt</p>
          <div className="price">
            <span className="new">Rs. 399</span>
          </div>
          <div className="btn-group">
            <button className="add-cart-btn" onClick={() => handleAddToCart({
              id: 4,
              title: "Max",
              description: "Men Polo Collar T-shirt",
              price: 399,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0432-scaled.jpg"
            })}>Add to Cart</button>
            <button className="wishlist-btn" onClick={() => handleAddToWishlist({
              id: 4,
              title: "Max",
              description: "Men Polo Collar T-shirt",
              price: 399,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0432-scaled.jpg"
            })}>♡ Wishlist</button>
          </div>
        </div>

        {/* === Product 5 === */}
        <div className="product-card">
          <img src="https://simp9.in/wp-content/uploads/2024/12/LPP_0377-scaled.jpg" alt="Kurta" />
          <div className="rating">⭐ 4.6 <span>(23)</span></div>
          <h4>House of Pataudi</h4>
          <p>Embroidered Jashn Kurta</p>
          <div className="price">
            <span className="new">Rs. 1799</span>
            <span className="old">Rs. 4499</span>
            <span className="offer">60% OFF</span>
          </div>
          <div className="btn-group">
            <button className="add-cart-btn" onClick={() => handleAddToCart({
              id: 5,
              title: "House of Pataudi",
              description: "Embroidered Jashn Kurta",
              price: 1799,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0377-scaled.jpg"
            })}>Add to Cart</button>
            <button className="wishlist-btn" onClick={() => handleAddToWishlist({
              id: 5,
              title: "House of Pataudi",
              description: "Embroidered Jashn Kurta",
              price: 1799,
              image: "https://simp9.in/wp-content/uploads/2024/12/LPP_0377-scaled.jpg"
            })}>♡ Wishlist</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Men;

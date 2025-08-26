import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdFastfood } from 'react-icons/md';
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import './Nav.css';

function Nav({ onSearch, cartCount = 0, cartItems = [] }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="navbar">
      {/* Left Logo */}
      <div className="nav-logo">
        <MdFastfood className="nav-logo-icon" />
      </div>

      {/* Search Bar */}
      <form
        className="nav-search"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearchOutline className="nav-search-icon" />
        <input
          type="text"
          placeholder="Search items"
          className="nav-search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </form>

      {/* Cart Icon */}
      <div className="nav-cart" onClick={() => setShowCart(true)}>
        <span className="nav-cart-count">{cartCount}</span>
        <LuShoppingBag className="nav-cart-icon" />
      </div>

      {/* ✅ Center Modal for Cart */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item, i) => (
                <div key={i} className="cart-item">
                  <img src={item.food_image} alt={item.food_name} />
                  <div>
                    <h4>{item.food_name}</h4>
                    <p>Rs {item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in cart</p>
            )}

            <button className="close-cart" onClick={() => setShowCart(false)}>
              Close
            </button>
        
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;

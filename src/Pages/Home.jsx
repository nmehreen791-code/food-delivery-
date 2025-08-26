// src/Pages/Home.jsx
import React, { useState } from "react";
import Nav from "../Components/Nav";
import BelowNavbar from "./BelowNavbar";
import Food from "./food";
import "./Home.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="home-container">
      <Nav
        onSearch={(query) => setSearchQuery(query.toLowerCase())}
        cartCount={cart.length}
        cartItems={cart}
      />

      {/* ✅ Pass category select */}
      <BelowNavbar onCategorySelect={setSelectedCategory} />

      {/* ✅ Food respects category + search */}
      <Food
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import Nav from "./Components/Nav";
import Food from "./Pages/food";
import BelowNavbar from "./Pages/BelowNavbar"; 
import Footer from "./Components/Footer";
import BookingForm from "./Components/BookingForm";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.food_name} added to cart ✅`);
  };

  return (
    <>
      <Nav 
        onSearch={setSearchQuery} 
        cartCount={cartItems.length} 
        cartItems={cartItems} 
      />
      {/* ✅ pass setSelectedCategory here */}
      <BelowNavbar onCategorySelect={setSelectedCategory} />

      <Food 
        selectedCategory={selectedCategory} 
        searchQuery={searchQuery} 
        onAddToCart={handleAddToCart} 
      />
       <Footer /> 
    </>
  );
}

export default App;

// src/Pages/Food.jsx
import React from "react";
import { food_items } from "../fooditems.jsx";
import "./Food.css";

const Food = ({ selectedCategory, searchQuery, onAddToCart }) => {
  const filteredItems = food_items.filter((item) => {
    const name = item.food_name.toLowerCase();
    const category = item.food_category.toLowerCase();

    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    const matchesSearch =
      name.includes(searchQuery.toLowerCase()) ||
      category.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="food-container">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.food_image} alt={item.food_name} />
            <h3>{item.food_name}</h3>
            <p>Category: {item.food_category}</p>
            <p>Price: Rs {item.price}</p>
           <button className="add-btn" onClick={() => onAddToCart(item)}>
  Add to Dish
</button>

          </div>
        ))
      ) : (
        <p className="no-results">No items found</p>
      )}
    </div>
  );
};

export default Food;

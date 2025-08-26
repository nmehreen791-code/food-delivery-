import React, { useState } from "react";
import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";
import "./BelowNavbar.css";

function BelowNavbar({ onCategorySelect }) {
  const categories = [
    { id: 1, name: "all", label: "All", icon: <FaBorderAll /> },
    { id: 2, name: "breakfast", label: "Breakfast", icon: <MdOutlineFreeBreakfast /> },
    { id: 3, name: "soups", label: "Soups", icon: <TbSoup /> },
    { id: 4, name: "pasta", label: "Pasta", icon: <LiaPastafarianismSolid /> },
    { id: 5, name: "pizza", label: "Pizza", icon: <FaPizzaSlice /> },
    { id: 6, name: "burger", label: "Burger", icon: <GiHamburger /> },
    { id: 7, name: "main_course", label: "Main Course", icon: <FaBottleDroplet /> },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const handleClick = (category) => {
    setActiveCategory(category);

    if (onCategorySelect) {
      if (category.toLowerCase() === "all") {
        onCategorySelect("all");
      } else {
        onCategorySelect(category.toLowerCase());
      }
    }
  };

  return (
    <div className="below-navbar-container">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-button ${
            activeCategory.toLowerCase() === cat.name.toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleClick(cat.name)}
        >
          {cat.icon}
          <span className="category-name">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}

export default BelowNavbar;

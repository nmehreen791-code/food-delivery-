
import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    food: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Placed!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nFood: ${formData.food}\nQuantity: ${formData.quantity}`);
    // ✅ yahan API call ya backend connect karna ho to code likh sakte ho
  };

  return (
    <div className="booking-container">
      <h2>🍴 Food Order Form</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="03XX-XXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address
          <textarea
            name="address"
            placeholder="Enter delivery address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Select Food
          <select name="food" value={formData.food} onChange={handleChange} required>
            <option value="">-- Choose Food --</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Pizza">Pizza</option>
            <option value="Pasta">Pasta</option>
          </select>
        </label>

        <label>
          Quantity
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default BookingForm;

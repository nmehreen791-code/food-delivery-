import React from "react";
import "./Footer.css";  // CSS file import

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div>
          <h2 className="footer-brand">🍴 Food Delivery</h2>
          <p className="footer-desc">
            Fresh, fast and delicious meals delivered to your doorstep.
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Food Delivery. All rights reserved.
          </p>
        </div>

       {/* Quick Links */}
<div>
  <h3 className="footer-title">Quick Links</h3>
  <ul className="footer-links">
    <li><a href="/breakfast">Breakfast</a></li>
    <li><a href="/pizza">Pizza</a></li>
    <li><a href="/pasta">Pasta</a></li>
  </ul>
</div>

{/* Social Media */}
<div>
  <h3 className="footer-title">Follow Us</h3>
  <ul className="footer-social">
    <li><a href="#">Facebook</a></li>
    <li><a href="#">Instagram</a></li>
    <li><a href="#">Twitter</a></li>
  </ul>
</div>
      </div>
    </footer> 
  );
}

export default Footer;

import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="subscribe-section">
          <h4>Stay Connected With OLIPOP</h4>
          <input type="email" placeholder="Enter Your Email" />
          <button>SUBSCRIBE</button>
        </div>

        <div className="flavors-section">
          <h4>Flavours</h4>
          <ul>
            <li>Watermelon Lime</li>
            <li>Vintage Cola</li>
            <li>Classic Root Beer</li>
            <li>Doctor Goodwin</li>
            <li>Banana Cream</li>
            <li>Strawberry Vanilla</li>
            <li>Ginger Lemon</li>
          </ul>
        </div>

        <div className="info-section">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="social-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <i className="icon-instagram" />
            </li>
            <li>
              <i className="icon-facebook" />
            </li>
            <li>
              <i className="icon-twitter" />
            </li>
            <li>
              <i className="icon-linkedin" />
            </li>
            <li>
              <i className="icon-pinterest" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

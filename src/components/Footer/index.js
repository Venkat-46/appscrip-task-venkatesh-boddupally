import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaCcApplePay,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay
} from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-section">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 • USD</p>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr />

      {/* ---------- Middle Section ---------- */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>metta muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column follow-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
          </div>

          <h4>metta muse ACCEPTS</h4>
          <div className="payment-icons">
            <FaGooglePay />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
            <FaCcApplePay />
          </div>
        </div>
      </div>

      <p className="footer-copy">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

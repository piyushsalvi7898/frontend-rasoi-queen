import React from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar,Nav } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
// import { useRef } from 'react';
import { useCart } from '../contexts/CartContext';
import './css/cart.css';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (

    <>
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping now! 🛍️</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">Price: <span>${item.price}</span></p>
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(item)} className="quantity-button">-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="quantity-button">+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <button onClick={clearCart} className="clear-cart-button">🗑️ Clear Cart</button>
        </div>
      )}
    </div>




      {/* Footer */}
<Navbar bg="dark" variant="dark" className="footer p-4">
  <Container className="d-flex flex-column align-items-center">

    {/* Navigation Links (Without Toggle) */}
    <Nav className="mb-3 d-flex flex-wrap justify-content-center">
      <Nav.Link as={Link} to="/" className="text-light me-3">Home</Nav.Link>
      <Nav.Link as={Link} to="/product" className="text-light me-3">Products</Nav.Link>
      <Nav.Link as={Link} to="/about" className="text-light me-3">About</Nav.Link>
      <Nav.Link as={Link} to="/menu" className="text-light me-3">Menu</Nav.Link>
      <Nav.Link as={Link} to="/contact" className="text-light me-3">Contact</Nav.Link>
      <Nav.Link as={Link} to="/cart" className="text-light">Cart</Nav.Link>
    </Nav>

    {/* Company Name */}
    <h5 className="text-light">
      <span className="rasoi"> रसोई</span> Queen
    </h5>
    <p className="text-secondary text-center mb-2">
      Authentic flavors, unforgettable taste. Visit us or order online!
    </p>

    {/* Social Media Links */}
    <div className="mb-3 d-flex justify-content-center">
      <a href="#" className="text-light me-3">
        <FaFacebook color="#1877F2" size={30} />
      </a>
      <a href="#" className="text-light me-3">
        <FaInstagram color="#E4405F" size={30} />
      </a>
      <a href="#" className="text-light">
        <FaTwitter color="#1DA1F2" size={30} />
      </a>
    </div>

    {/* Contact Information */}
    <p className="text-secondary small mb-0 text-center">
      <FaMapMarkerAlt color="red" /> 409, Agrawal Compound, Khatipura, Sukhlia, Indore, Madhya Pradesh 452011
    </p>
    <p className="text-secondary text-center">
      <FaPhone color="green" /> +91-9630052299 | <FaEnvelope color="orange" /> info@rasoiqueenmasale.com
    </p>

    <span className="text-light small text-center">
      &copy; 2025 Masala Queen. All Rights Reserved.
    </span>
  </Container>
</Navbar>
    </>

  );
};

export default Cart;

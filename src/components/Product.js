import React from "react";
import "./css/product.css"; // Ensure correct path
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";


// Home Product Images
import chilli from "../assets/images/home/chilli.jpg";
import coriander from "../assets/images/home/coriander.jpg";
import turmeric from "../assets/images/home/turmeric.jpg";
import garamMasala from "../assets/images/home/garamMasala.jpg";
import acharMasala from "../assets/images/home/acharMasala.jpg";
import allPurpose from "../assets/images/home/allPurpose.jpg";
import jeerawan from "../assets/images/home/jeerawan.jpg";
import teaMasala from "../assets/images/home/teaMasala.jpg";

// import CoconutOil from "../assets/images/home/CoconutOil.jpg";
// import MustardOil from "../assets/images/home/MustardOil.jpg";
// import PeanutOil from "../assets/images/home/PeanutOil.jpg";



const products = [
  { id: 1, name: "Haldi/ Turmeric Powder", prices: [456.77, 10], weights: ["1 KG", "18g"], image: turmeric },
  { id: 2, name: "Mirchi/ Red Chilli Powder", prices: [412.56, 10], weights: ["1 KG", "16g"], image: chilli },
  { id: 3, name: "Dhaniya/ Coriander Powder", prices: [245.09, 10], weights: ["1 KG", "15g"], image: coriander },
  { id: 4, name: "Jeerawan Masala", prices: [426.62, 10], weights: ["1 KG", "18g"], image: jeerawan },
  { id: 5, name: "Tea Masala", prices: [1210.81, 10], weights: ["1 KG", "7g"], image: teaMasala },
  { id: 6, name: "Garam Masala", prices: [1210.81, 10], weights: ["1 KG", "7g"], image: garamMasala },
  { id: 7, name: "All Purpose Masala", prices: [1210.81, 10], weights: ["1 KG", "7g"], image: allPurpose },
  // { id: 8, name: "Panipuri Masala", prices: [465.70, 10], weights: ["1 KG", "18g"], image: panipuri },
  { id: 9, name: "Achar Masala", prices: [370.59, 10], weights: ["1 KG", "15g"], image: acharMasala }
];






const Product = () => {
  return (

    <>
      {/* Main Content */}
      <div className="container py-5">
        <h2 className="productmargintop">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>


                {/* Bootstrap Dropdown for Weights & Prices */}
                <div className="dropdown-container">
                  <select className="form-select product-dropdown">
                    {product.weights.map((weight, index) => (
                      <option key={index} value={weight}>
                        {weight} - ₹{product.prices[index].toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Footer */}
      <Navbar bg="dark" variant="dark" className="footer p-4">
        <Container className="d-flex flex-column align-items-center">

          {/* Navigation Links (Without Toggle) */}
          <Nav className="mb-3 d-flex flex-wrap justify-content-center hoverline">
            <Nav.Link as={Link} to="/" className="text-light me-3 ">Home</Nav.Link>
            <Nav.Link as={Link} to="/product" className="text-light me-3">Products</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light me-3">About</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-light me-3">Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light me-3">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-light">Cart</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-light">Dashboard</Nav.Link>
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

export default Product;

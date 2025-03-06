// import React from "react";
import { Link } from "react-router-dom";
import { Button as BootstrapButton } from "react-bootstrap";
import "./css/home.css";
import React, { useRef, useState } from "react"; // Ensure useState is imported
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Carousel,
} from "react-bootstrap";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

// import { useRef } from 'react';

import logo from "../assets/images/logo.png";
import qrCodeImage from "../assets/images/qrCodeImage.jpeg";
import certificateImage from "../assets/images/certificate.jpg";

// Home Product Images
import chilli from "../assets/images/home/chilli.jpg";
import chilliHover from "../assets/images/home/chilliHover.jpg";

import coriander from "../assets/images/home/coriander.jpg";
import corianderHover from "../assets/images/home/corianderHover.jpg";

import turmeric from "../assets/images/home/turmeric.jpg";
import turmericHover from "../assets/images/home/turmericHover.jpg";

import garamMasala from "../assets/images/home/garamMasala.jpg"; // Changed from .png to .jpg
import garamMasalaHover from "../assets/images/home/garamMasalaHover.jpg";

import acharMasala from "../assets/images/home/acharMasala.jpg";
import acharMasalaHover from "../assets/images/home/acharMasalaHover.jpg";

import allPurpose from "../assets/images/home/allPurpose.jpg";
import allPurposeHover from "../assets/images/home/allPurposeHover.jpg"; // Changed from .jpeg to .jpg

import jeerawan from "../assets/images/home/jeerawan.jpg";
import jeerawanHover from "../assets/images/home/jeerawanHover.jpg";

import teaMasala from "../assets/images/home/teaMasala.jpg"; // Changed from .jpeg to .jpg
import teaMasalaHover from "../assets/images/home/teaMasalaHover.jpg"; // Changed from .jpeg to .jpg

import CoconutOil from "../assets/images/home/CoconutOil.jpg";
import CoconutOilHover from "../assets/images/home/CoconutOilHover.jpg";

import MustardOil from "../assets/images/home/MustardOil.jpg";
import MustardOilHover from "../assets/images/home/MustardOilHover.jpg";

import PeanutOil from "../assets/images/home/PeanutOil.jpg";
import PeanutOilHover from "../assets/images/home/PeanutOilHover.jpg";

// import homeProduct9 from "../assets/images/home/homeProduct9.jpg";  // Changed from .png to .jpg
// import paniPuri from "../assets/images/home/panipuri.jpg";  // Changed from .png to .jpg

import shop1 from "../assets/images/home/shoap1.jpg";
import shop2 from "../assets/images/home/shoap2.jpg";
import shop3 from "../assets/images/home/shoap3.jpg";
import shop4 from "../assets/images/home/shoap4.jpg";

// WHY Choose Us
import pureSpices from "../assets/images/whychoose/hundred2.png";
import authenticTaste from "../assets/images/whychoose/best-test.png";
import trustedByMillions from "../assets/images/whychoose/trustedByMillions5.png";

// import posterimage from "../assets/images/whychoose/images1.png";


// Products List

// Products List
export const products = [
  {
    id: 1,

    name: "Mirchi Powder / मिर्ची पाउडर",
    weight: "500g",
    price: "₹210.00",
    image: chilli,
    hoverImage: chilliHover,
    overlayText: "Red Chilli Powder",
  },
  {
    id: 2,
    name: "Coriander Powder / धनिया पाउडर",
    weight: "200g",
    price: "₹220.00",
    image: coriander,
    hoverImage: corianderHover,
    overlayText: "Coriander Powder",
  },
  {
    id: 3,
    name: "Authentic and Pure Turmeric Powder / हल्दी पाउडर",
    weight: "500g",
    price: "₹180.00",
    image: turmeric,
    hoverImage: turmericHover,
    overlayText: "Turmeric Powder",
  },
  {
    id: 4,
    name: "All Purpose Masala",
    weight: "500g",
    price: "₹160.00",
    image: allPurpose,
    hoverImage: allPurposeHover,
    overlayText: "All Purpose Masala",
  },
  {
    id: 5,
    name: "Premium Garam Masala / गरम मसाला",
    weight: "500g",
    price: "₹171.00",
    image: garamMasala,
    hoverImage: garamMasalaHover,
    overlayText: "Garam Masala",
  },
  {
    id: 6,
    name: "Special Tea Masala",
    weight: "200g",
    price: "₹220.00",
    image: teaMasala,
    hoverImage: teaMasalaHover,
    overlayText: "Special Tea Masala",
  },
  {
    id: 7,
    name: "Mustard Oil",
    weight: "500g",
    price: "₹171.00",
    image: MustardOil,
    hoverImage: MustardOilHover,
    overlayText: "Mustard Oil",
  },
  {
    id: 8,
    name: "Peanut Oil",
    weight: "500g",
    price: "₹160.00",
    image: PeanutOil,
    hoverImage: PeanutOilHover,
    overlayText: "Peanut Oil",
  },
  {
    id: 9,
    name: "Coconut Oil",
    weight: "500g",
    price: "₹210.00",
    image: CoconutOil,
    hoverImage: CoconutOilHover,
    overlayText: "Coconut Oil",
  },
  {
    id: 10,
    name: "Pickle Masala",
    weight: "250g",
    price: "₹130.00",
    image: acharMasala,
    hoverImage: acharMasalaHover,
    overlayText: "Pickle Masala",
  },
  {
    id: 11,
    name: "Jeeravan Masala",
    weight: "500g",
    price: "₹180.00",
    image: jeerawan,
    hoverImage: jeerawanHover,
    overlayText: "Jeeravan Masala",
  },
];


//Gallery Images

const Home = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Add state for testimonials

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Background Image Container */}
      <div className="background-image">
        <img src={logo} alt="Masala Queen Logo" className="about-logo" />
      </div>

      <div className="home-container">


        {/* Logo & Header */}
        <Container className="text-center mt-5 pt-5  change-background">
          <h1>
            Welcome to <span className="rasoi"> रसोई</span> Queen
          </h1>
          <h5 className="sub-heading">PARTH ENTERPRISES</h5>
          <p>
            Parth Enterprises is a leading manufacturer of natural, fresh and
            pure spices in Indore (MP). Our high-quality products include
            Turmeric powder, Mirch powder, Dhaniya powder, Jeeravan masala, Tea
            (Chay) masala, Achar masala, Garam masala, All purpose masala,
            Jaljeera, Chat masala, Kashmiri mirch powder, Raita/ chanch (butter)
            masala and Lahsun (Garlic-peanut) thecha.
          </p>

          {/* Products Section */}
          <Container className="products-container mt-5">
            <h2 className="text-center mb-4 ourproduct">Our Products</h2>

            {/*  */}
            <Row>
              {products.map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-4"
                >
                  <Card className="custom-product-card text-center">
                    <div className="custom-image-container">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="custom-product-image"
                      />
                      <Card.Img
                        variant="top"
                        src={product.hoverImage} // Ensure this is a valid image URL
                        className="overlay-image" // No need for custom-product-image here
                      />
                      {/* <div className="custom-overlay">{product.overlayText}</div> */}
                    </div>
                    <Card.Body>
                      <Card.Title className="custom-font-color">
                        {product.name}
                      </Card.Title>
                      {/* Uncomment if needed
          <Card.Text className="custom-font-color">
            {product.weight}
          </Card.Text>
          <h5 className="text-danger">{product.price}</h5>
          <Button variant="primary">Buy Now</Button>
          */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {/*  */}
          </Container>
        </Container>

        {/* =======WHY CHOOSE============= */}
        <Container className="py-5">
          <h2 className="text-center mb-4 fw-bold">
            Why Choose <span style={{ color: "#ff5722" }}>RASOI QUEEN?</span>
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow border-0 text-center p-3">
                <Card.Img
                  variant="top"
                  src={pureSpices}
                  className="mx-auto mt-3"
                  style={{ width: "80px", height: "80px" }}
                />

                <Card.Body>
                  <Card.Title>100% Pure Spices</Card.Title>
                  <Card.Text>
                    We provide the highest quality, chemical-free, hand-picked
                    spices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow border-0 text-center p-3">
                <Card.Img
                  variant="top"
                  src={authenticTaste}
                  className="mx-auto mt-3"
                  style={{ width: "80px", height: "80px" }}
                />

                <Card.Body>
                  <Card.Title>Authentic Taste</Card.Title>
                  <Card.Text>
                    Our masalas bring rich, traditional flavors to your kitchen.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow border-0 text-center p-3">
                <Card.Img
                  variant="top"
                  src={trustedByMillions}
                  className="mx-auto mt-3"
                  style={{ width: "80px", height: "80px" }}
                />

                <Card.Body>
                  <Card.Title>Trusted by Millions</Card.Title>
                  <Card.Text>
                    Our spices are loved by households & top chefs across India.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <div>
<img src={posterimage} alt="Poster-Image" />
</div> */}

        {/* Testimonials Section */}
        <Container className="testimonials-section mt-5">
          <h3 className="testimonials-title">What Our Customers Say</h3>
          <Carousel className="testimonials-carousel">
            <Carousel.Item>
              <Card className="testimonial-card text-center shadow">
                <Card.Body>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">
                    "The best spices I have ever used! The aroma and quality are
                    unmatched. Highly recommended!"
                  </p>
                  <FaQuoteRight className="quote-icon" />
                  <h5 className="testimonial-author">- Piyush Salvi</h5>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card className="testimonial-card text-center shadow">
                <Card.Body>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">
                    "I love the freshness of Rasoi Queen spices. They add a
                    magical taste to my cooking!"
                  </p>
                  <FaQuoteRight className="quote-icon" />
                  <h5 className="testimonial-author">- Rohit Mehta</h5>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card className="testimonial-card text-center shadow">
                <Card.Body>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">
                    "Authentic flavors with premium quality. I have switched to
                    Rasoi Queen permanently!"
                  </p>
                  <FaQuoteRight className="quote-icon" />
                  <h5 className="testimonial-author">- Neha Verma</h5>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Container>

        {/* Gallery pages */}
        <h2 className="gallery-heading">Gallery</h2>

        <div className="gallery-container">
          <BootstrapButton className="scroll-btn left" onClick={scrollLeft}>
            &#8592;
          </BootstrapButton>

          <div className="image-gallery" ref={scrollRef}>
            {[shop1, shop2, shop3, shop4, shop1, shop2, shop3, shop4].map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Shop ${index + 1}`}
                  className="shop-image"
                />
              )
            )}
          </div>
          <BootstrapButton className="scroll-btn right" onClick={scrollRight}>
            &#8594;
          </BootstrapButton>
        </div>

        {/* -------------- */}
        <Container className="mt-5 ourmotto">
          <Row className="align-items-center  g-4">
            <Col xs={12} md={6} className="text-center text-md-left">
              <h1 style={{ fontSize: "6rem", color: "green" }}>Our Motto</h1>
            </Col>
            <Col xs={12} md={6}>
              <p style={{ fontSize: "1.5rem" }}>
                "Our motto is safe food for domestic markets. We do not want to
                categorize quality as exported and the rest for us, but as the
                largest feeder country, we Indians need to have quality
                foodstuffs."
              </p>
            </Col>
          </Row>
        </Container>

        {/* =====CONTAINER=====*/}
        <Container className="small-container mt-5 text-center">
          <h4 className="ourproduct">Our Certification</h4>
          <p>
            We are certified for maintaining the highest quality standards in
            our spices.
          </p>

          <div className="certificate-container">
            <div className="image-container">
              {/* Certificate (Left Side) */}
              <div className="certificate-box">
                <img
                  src={certificateImage}
                  alt="Our Certificate"
                  className="certificate-img"
                />
              </div>
              {/* QR Code (Right Side) */}
              <div className="qr-code-box">
                <img src={qrCodeImage} alt="QR Code" className="qr-code-img" />
              </div>
            </div>
          </div>
        </Container>

        {/* Footer */}
        <Navbar bg="dark" variant="dark" className="footer p-4">
          <Container className="d-flex flex-column align-items-center">
            {/* Navigation Links (Without Toggle) */}
            <Nav className="mb-3 d-flex flex-wrap justify-content-center hoverline">
              <Nav.Link as={Link} to="/" className="text-light me-3 ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product" className="text-light me-3">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light me-3">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" className="text-light me-3">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light me-3">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-light">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard" className="text-light">
                Dashboard
              </Nav.Link>
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
              <a
                href="https://www.facebook.com/RasoiQueen83/"
                className="text-light me-3"
              >
                <FaFacebook color="#1877F2" size={30} />
              </a>
              <a
                href="https://www.instagram.com/rasoi_queen11/"
                className="text-light me-3"
              >
                <FaInstagram color="#E4405F" size={30} />
              </a>
              <a href="#" className="text-light">
                <FaTwitter color="#1DA1F2" size={30} />
              </a>
            </div>

            {/* Contact Information */}
            <p className="text-secondary small mb-0 text-center">
              <FaMapMarkerAlt color="red" /> 409, Agrawal Compound, Khatipura,
              Sukhlia, Indore, Madhya Pradesh 452011
            </p>
            <p className="text-secondary text-center">
              <FaPhone color="green" /> +91-9630052299 |{" "}
              <FaEnvelope color="orange" /> info@rasoiqueenmasale.com
            </p>

            <span className="text-light small text-center">
              &copy; 2025 Masala Queen. All Rights Reserved.
            </span>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Home;

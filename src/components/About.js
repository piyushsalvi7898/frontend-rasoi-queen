import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Navbar } from "react-bootstrap";
import "./css/about.css";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import certificateImage from "../assets/images/certificate.jpg";
import posterImage from "../assets/images/whychoose/posterImage.webp";
import { motion } from "framer-motion";
import { FaSeedling, FaWarehouse, FaBlender, FaBoxOpen, FaTruck } from "react-icons/fa";


const steps = [
  { icon: <FaSeedling size={30} />, title: "Sourcing", desc: "Fresh spices sourced from farms." },
  { icon: <FaWarehouse size={30} />, title: "Sorting & Cleaning", desc: "Removing impurities and sorting best quality." },
  { icon: <FaBlender size={30} />, title: "Grinding", desc: "Processing spices into fine powders." },
  { icon: <FaBoxOpen size={30} />, title: "Packaging", desc: "Sealed for freshness and quality." },
  { icon: <FaTruck size={30} />, title: "Distribution", desc: "Delivered to stores and customers." },
]

const About = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>

      {/*  Full-Width Poster Image with Overlay Content */}
      <div className="poster-container">
        <img src={posterImage} alt="Parth Enterprises Poster" className="poster-image" />
        <div className="poster-overlay">
          <h1 className="about-heading">
            About <span>रसोई Queen</span>
          </h1>
          <p className="about-subheading">PARTH ENTERPRISES</p>

        </div>
      </div>




      <Container fluid className="roadmap-section py-5">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="roadmap-title">Our Roadmap</h2>
            <p className="roadmap-subtitle">Journey from farm to your home</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} className="position-relative roadmap-container">
            {/* Animated Connecting Line */}
            <motion.div className="roadmap-line" />

            {/* Roadmap Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`roadmap-step ${index % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="roadmap-icon">{step.icon}</div>
                <div className="roadmap-card">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>


      {/* Certification Section */}
      <Container className="certification-section text-center">
        <h3 className="certification-title">Our Certification</h3>
        <div className="certification-wrapper">
          <img src={certificateImage} alt="ZED Bronze Certificate" className="certification-image" />
          <p className="certification-text">
            We are proud to be awarded the <strong>ZED Bronze Certification</strong>, a testament to our commitment to
            <strong> quality, purity, and sustainability</strong> in the spice industry. This certification reflects our
            dedication to maintaining <strong>high standards in sourcing, processing, and packaging</strong>.
          </p>
        </div>
      </Container>

      {/*  Mission & Vision Section */}
      {/* <Container>
        <Row className="mt-5">
          <Col md={6}>
            <Card className="about-card shadow-lg">
              <Card.Body>
                <h4>Our Mission</h4>
                <p>To provide the highest quality, pure, and fresh spices to enhance the taste of every meal.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card shadow-lg">
              <Card.Body>
                <h4>Our Vision</h4>
                <p>To become a globally recognized brand known for authentic Indian spices and flavors.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}




      {/* Footer */}
      <Navbar bg="dark" variant="dark" className="footer p-4">
        <Container className="d-flex flex-column align-items-center">
          <h5 className="text-light">
            <span className="rasoi">रसोई</span> Queen
          </h5>
          <p className="text-secondary text-center mb-2">
            Authentic flavors, unforgettable taste. Visit us or order online!
          </p>

          <div className="mb-3">
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

          <p className="text-secondary small mb-0">
            <FaMapMarkerAlt color="red" /> 409, Agrawal Compound, Khatipura, Sukhlia, Indore, Madhya Pradesh 452011
          </p>
          <p className="text-secondary">
            <FaPhone color="green" /> +91-9630052299 | <FaEnvelope color="orange" /> info@rasoiqueenmasale.com
          </p>

          <span className="text-light small">&copy; 2025 Masala Queen. All Rights Reserved.</span>
        </Container>
      </Navbar>



    </>
  );
};

export default About;









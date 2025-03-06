import React, { useState } from "react";
import "../components/css/contactus.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [appointmentData, setAppointmentData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleAppointmentChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting contact data:", contactData); // Log the data being sent

    try {
      const response = await axios.post("http://localhost:8000/api/contact", contactData);
      alert("Your message has been sent!");
      console.log(response.data);
      // Reset the form after submission
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send the message. Please try again later.");
      console.error(error);
    }
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/appointments", appointmentData);
      alert("Your appointment has been booked!");
      console.log(response.data);
      // Reset the form after submission
      setAppointmentData({ fullName: "", phone: "", date: "", time: "" });
    } catch (error) {
      alert("Failed to book the appointment. Please try again later.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-content">
          {/* Contact Form Section */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactData.name}
                onChange={handleContactChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactData.email}
                onChange={handleContactChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactData.message}
                onChange={handleContactChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Appointment Booking Section */}
          <div className="appointment-form">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleAppointmentSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={appointmentData.fullName}
                onChange={handleAppointmentChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={appointmentData.phone}
                onChange={handleAppointmentChange}
                required
              />
              <input
                type="date"
                name="date"
                value={appointmentData.date}
                onChange={handleAppointmentChange}
                required
              />
              <input
                type="time"
                name="time"
                value={appointmentData.time}
                onChange={handleAppointmentChange}
                required
              />
              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>

        <div className="contact-info-uppermargin">
          <h3>Need Assistance?</h3>
          <p>If you need any assistance or have more questions, feel free to reach out to us via the contact form or book an appointment with us. Our team is here to help you!</p>
          <p>Phone: +91-9630052299</p>
        </div>
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

export default Contact;
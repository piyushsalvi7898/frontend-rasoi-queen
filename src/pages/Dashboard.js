import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container, Row, Col, Card, Button, Form, Table } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../components/css/dashboard.css"; // Import custom styles

const Dashboard = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  const correctPassword = "7898"; // Set your desired password

  // Handle password input change
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError(" Incorrect password. Please try again.");
    }
  };

  // Fetch Contacts & Appointments when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
      fetchAppointments();
    }
  }, [isAuthenticated]);

  // Fetch contacts from API
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contact");
      setContacts(response.data);
    } catch (error) {
      console.error(" Failed to fetch contacts:", error);
      setContacts([]);
    }
  };

  // Fetch appointments from API
  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch appointments:", error);
      setAppointments([]);
    }
  };

  return (
    <>
          <div className="dashboard">
      <Container>
        {!isAuthenticated ? (
          <Row className="fullscreen-center">
            <Col md={5}>
              <Card className="auth-card shadow-lg">
                <Card.Body className="p-4 text-center">
                  <h2 className="fw-bold mb-3">🔒 Secure Access</h2>
                  <p className="text-muted">Enter your password to continue</p>
                  {error && <p className="error-message">{error}</p>}

                  <Form onSubmit={handlePasswordSubmit} className="mt-3">
                    <Form.Group controlId="formPassword">
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        className="custom-input"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="custom-btn mt-4">
                      🔓 Unlock
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
             
            </Col>
            
          </Row>

        ) : (
          <Row>
            <h5 className="dashboard-heading"> Dashboard</h5>
            {/* Contact Submissions Section */}
            <Col md={12}>
              <Card className="info-card">
                <Card.Body>
                  <Card.Title className="text-center">📩 Contact Submissions</Card.Title>
                  <Table responsive striped bordered hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.length > 0 ? (
                        contacts.map((contact, index) => (
                          <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.message}</td>
                            <td>{contact.email}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center">No contacts found.</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            {/* Appointments Section */}
            <Col md={12} className="mt-4">
              <Card className="info-card">
                <Card.Body>
                  <Card.Title className="text-center">📅 Appointments</Card.Title>
                  <Table responsive striped bordered hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                          <tr key={index}>
                            <td>{appointment.fullName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.phone}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">No appointments found.</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
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

export default Dashboard;

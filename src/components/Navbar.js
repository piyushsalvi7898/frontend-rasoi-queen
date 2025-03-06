import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/navbar.css"; // Import Navbar CSS
import logo from "../assets/images/logo.png";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={isOpen}>
      <Container>
        <img
          src={logo}
          alt="Certificate Logo"
          className="certificate-logo"
        />

        {/* Custom Animated Toggle */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div className="bar top-bar"></div>
          <div className="bar middle-bar"></div>
          <div className="bar bottom-bar"></div>
        </button>

        {/* Nav Collapse with State */}
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setIsOpen(false)}> Home</Nav.Link>
            <Nav.Link as={Link} to="/product" onClick={() => setIsOpen(false)}>Products</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setIsOpen(false)}>About</Nav.Link>
            {/* <Nav.Link as={Link} to="/menu" onClick={() => setIsOpen(false)}>Menu</Nav.Link> */}
            <Nav.Link as={Link} to="/contact" onClick={() => setIsOpen(false)}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart" onClick={() => setIsOpen(false)}>Cart</Nav.Link>
            <Nav.Link as={Link} to="/companies" onClick={() => setIsOpen(false)}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/graphs" onClick={() => setIsOpen(false)}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" onClick={() => setIsOpen(false)}>Users</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default CustomNavbar;

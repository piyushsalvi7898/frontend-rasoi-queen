import React from "react";
import "./App.css";  // CSS file import ki
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import Product from './components/Product';
import About from "./components/About";
import Cart from "./components/Cart";
// import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Graph from "./pages/Graph";
import { CartProvider } from './contexts/CartContext'; // Import CartProvider


const App = () => {
  return (
    <CartProvider> {/* Provide global cart state */}
      <Router>
        <NavigationBar />
        <div className=""> {/* Adds margin for better spacing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/menu" element={<Menu />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/companies" element={<Companies/>}/>
            <Route path="/graphs" element={<Graph />} />

          </Routes>
      </div>
      </Router>
    </CartProvider>
  );
};

export default App;

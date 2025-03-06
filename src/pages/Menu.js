import React from "react";
import "../components/css/menu.css";

const Menu = () => {
  const menuItems = {
    Starters: [
      { name: "Paneer Tikka", price: "₹150" },
      { name: "Spring Rolls", price: "₹120" },
      { name: "Manchurian", price: "₹130" },
    ],
    "Main Course": [
      { name: "Shahi Paneer", price: "₹250" },
      { name: "Dal Makhani", price: "₹220" },
      { name: "Veg Biryani", price: "₹200" },
    ],
    Desserts: [
      { name: "Gulab Jamun", price: "₹80" },
      { name: "Rasmalai", price: "₹90" },
      { name: "Ice Cream", price: "₹100" },
    ],
    Beverages: [
      { name: "Masala Chai", price: "₹50" },
      { name: "Cold Coffee", price: "₹120" },
      { name: "Mango Shake", price: "₹110" },
    ],
  };

  return (
    <>
    <div className="menu-background-color">
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-subtitle">Explore our delicious food items!</p>

      {Object.keys(menuItems).map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems[category].map((item, index) => (
              <div key={index} className="menu-item">
                <p className="item-name">{item.name}</p>
                <p className="item-price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
   
    </>
 
  );
};

export default Menu;

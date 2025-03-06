// src/contexts/CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap around your application
export const CartProvider = ({ children }) => {
  // Initialize cart items from local storage or set to an empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  // Effect to save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    if (!item?.id) return; // Ensure item has an id
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      return existingItem
        ? prevItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Function to decrease quantity or remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, i) => {
        if (i.id === item.id) {
          if (i.quantity > 1) {
            acc.push({ ...i, quantity: i.quantity - 1 });
          }
        } else {
          acc.push(i);
        }
        return acc;
      }, [])
    );
  };

  // Function to remove an item completely from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => setCartItems([]);

  // Provide the cart state and functions to the context
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

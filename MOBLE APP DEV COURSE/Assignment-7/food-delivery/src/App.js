import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Pizza",
      description: "Cheesy pepperoni pizza with fresh toppings",
      price: 12,
      image: "https://images.unsplash.com/photo-1601924582971-c6d2f3a9f5d4"
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy beef burger with fries and cheese",
      price: 8,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      id: 3,
      name: "Pasta",
      description: "Creamy Alfredo pasta with mushrooms",
      price: 10,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
    },
    {
      id: 4,
      name: "Sandwich",
      description: "Club sandwich with mayo & lettuce",
      price: 6,
      image: "https://images.unsplash.com/photo-1604909053360-4c2e74e5465e"
    },
    {
      id: 5,
      name: "Biryani",
      description: "Spicy chicken biryani with raita",
      price: 7,
      image: "https://images.unsplash.com/photo-1600628422019-7425c27c2f9f"
    },
    {
      id: 6,
      name: "Taco",
      description: "Authentic Mexican beef taco",
      price: 5,
      image: "https://images.unsplash.com/photo-1617196035907-7b7e5e5f9fc1"
    }
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="products">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} />
      </div>
      <Footer />
    </div>
  );
}

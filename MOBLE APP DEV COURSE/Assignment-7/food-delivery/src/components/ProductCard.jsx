import React from "react";

export default function ProductCard({ item, addToCart }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="food-img" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

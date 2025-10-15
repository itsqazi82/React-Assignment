// src/pages/Products/Products.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock API call
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className="category">{product.category}</p>
              <div className="rating">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
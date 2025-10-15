// src/pages/Products/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/products')} className="back-button">
        ← Back to Products
      </button>
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <div className="rating">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <p className="description">{product.description}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
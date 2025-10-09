import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.emoji}
      </div>
      <h3 className="product-title">{product.title}</h3>
      <div className="product-price">
        {product.price}
        {product.originalPrice && (
          <span className="original-price">{product.originalPrice}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
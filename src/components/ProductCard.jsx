import React from 'react';
import './ProductCard.css';

function ProductCard({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;

import React from 'react';
import './Cart.css';

function Cart({ cartItems, updateQuantity }) {
  const handleIncrement = (productId) => {
    updateQuantity(productId, 1);
  };

  const handleDecrement = (productId) => {
    updateQuantity(productId, -1);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleDecrement(item.id)} className="qty-btn">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)} className="qty-btn">+</button>
                  </div>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="total-price">Total Price: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;

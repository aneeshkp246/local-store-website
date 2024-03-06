import React, { useState } from 'react';
import './Cart.css'; // Import CSS file for styling
import axios from 'axios';


export const proceedToCheckout = async (cart) => {
    try {
        const response = await axios.post('http://localhost:5000/api/send-email', { cart });
        console.log(response.data);
        alert('Email sent successfully!');
        alert("Order Sucessfully recieved")
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
    }
};


const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);


  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += quantity;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate grand total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <span className="item-info">{item.title} - &#8377;{item.price} per unit</span>
                  <span className="item-quantity">&nbsp;Quantity: {item.quantity}</span>
                </div>
                <div className="item-buttons">
                  <button className="quantity-button" onClick={() => updateQuantity(index, 1)}>+</button>
                  <button className="quantity-button" onClick={() => updateQuantity(index, -1)}>-</button>
                  <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="grand-total">
            Grand Total: &#8377;{grandTotal}
          </div>
          <button className="proceed-to-checkout-button" onClick={() => proceedToCheckout(cartItems)}>
            Proceed to Checkout
          </button> 
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

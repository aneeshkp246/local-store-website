import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Place.css'; 

const Place = ({ currentPlace, data }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // const proceedToCheckout = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/send-email', { cart });
  //     console.log(response.data);
  //     alert('Email sent successfully!');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Failed to send email. Please try again later.');
  //   }
  // };

  return (
    <div>
      <h1>Welcome to {currentPlace}!</h1>
      <div className="products">
        {data.length > 0 &&
          data.map((product) => (
            <div className="product-item" key={product._id}>
              <h2>{product.title}</h2>
              <img className="product-image" src={product.imageURL} alt={product.title} />
              <p className="product-price">Price: &#8377;{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          ))}
      </div>
      {/* {cart.length > 0 && (
        <button className="proceed-to-checkout-button" onClick={proceedToCheckout}>
          Proceed to Checkout
        </button>
      )} */}
    </div>
  );
};

export default Place;

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

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={filledStars + i}>&#9734;</span>);
    }

    return stars;
  };

  return (
    <div>
    <h1 className='heading-place'>Welcome to {currentPlace}!</h1>
    <div className="products">
      {data.length > 0 &&
        data.map((product) => (
          <div className="product-item" key={product._id}>
            <h2 className='product-title'>{product.title}</h2>
            <img className="product-image" src={`${product.imageURL}`} alt={product.title} />
            <p className="product-price">Price: &#8377;{product.price}</p>
            <div className="product-rating">
              Rating: {renderStars(product.rating)}
            </div>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Place;

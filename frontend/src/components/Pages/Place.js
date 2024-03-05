import React, { useState, useEffect } from 'react';

import './Place.css';

const Place = ({ currentPlace, data }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

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
              <p className="product-rating">Rating: {product.rating}</p>
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

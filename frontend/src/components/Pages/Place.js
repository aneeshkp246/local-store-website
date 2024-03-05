import React, { useState, useEffect } from 'react';

import './Place.css'; 




const Place = ({ currentPlace, data }) => {
    

  return (
    <div>
      <h1>Welcome to {currentPlace}!</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <div className="products">
        {data.length > 0 && data.map((product) => (
          <div className="product-item" key={product._id}>
            <h2>{product.title}</h2>
            <img className="product-image" src={product.imageURL} alt={product.title} />
            <p className="product-price">Price: &#8377;{product.price}</p>
            <p className="product-rating">Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Place;

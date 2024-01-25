import React from "react";

export const Explore = () => {
  function Stores(props) {
    return (
      <div>
        <img src={props.img} alt="store" />
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <h4>{props.price}</h4>
      </div>
    );
}
  return (
    <div>
      <h1>Here are the Local kirana Stores near your locations:</h1>
      <Stores
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
          name="Cyxus"
          distance="Non-Slip Fitness Leisure Running Sneakers"
        />
        <Stores
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
          name="Vitike"
          desc="Latest Men Sneakers -Black"
        />
        <Stores
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
          name="Aomei"
          desc="Men's Trend Casual Sports Shoe"
        />
    </div>
  );
};


import React from "react";
import "./Home.css"

export const Home = () => {
  return (
    <div className="landing">
      <div className="text">
        <h1 className="heading">Welcome to Local Store</h1>
        <p className="first-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className="explore"> <a href="/explore" className="explore-btn">Explore</a> </button>
    </div>
    </div>
  );
};
import React from "react";
import "./Home.css"

export const Home = () => {
  return (
    <>
    <div className="landing">
      <div className="text">
        <h1 className="heading">Welcome to Local Store</h1>
        <p className="first-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className="explore"> <a href="/near" className="explore-btn">Explore</a> </button>
    </div>
    </div>
    <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">ABOUT</h1>
    <p class="lead">
    The project is a web application designed to help users find nearby stores based on their location. It utilizes a combination of geolocation services and store data to provide users with a convenient way to discover stores in their vicinity. Users can input their current location, and the application will retrieve and display a list of nearby stores along with relevant information such as store name, address, distance, and possibly additional details like store hours or ratings. This project aims to enhance user experience by simplifying the process of finding nearby stores and promoting local businesses.
    </p>
  </div>
</div>
    </>
  );
};
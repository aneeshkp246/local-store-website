import React from "react";
import "./Home.css"

export const Home = () => {
  return (
    <>
    <div className="landing">
      <div className="text">
        <h1 className="heading">Welcome to Local Store Organizer!</h1> <br /> <br /> <br /> <br />

        <p className="first-para">Local provision stores in India play a crucial role as hubs of daily necessities, serving as convenient sources of essentials and fostering community bonds through personalized service and familiar faces. They are lifelines for countless households, ensuring accessibility to goods and sustaining the socio-economic fabric of neighborhoods across the country.</p>
    <button className="explore"> <a href="/nearby" className="explore-btn">Explore</a> </button>
    </div>
    </div>
    <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">About the Project</h1>
    <p class="lead">
    The project is a web application designed to help users find nearby stores based on their location. It utilizes a combination of geolocation services and store data to provide users with a convenient way to discover stores in their vicinity. Users can input their current location, and the application will retrieve and display a list of nearby stores along with relevant information such as store name, address, distance, and possibly additional details like store hours or ratings. This project aims to enhance user experience by simplifying the process of finding nearby stores and promoting local businesses.
    </p>
  </div>
</div>
    </>
  );
};
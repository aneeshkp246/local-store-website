import React, { useState, useEffect } from 'react';

const Nearby = () => {
  const [location, setLocation] = useState(null);
  const [backendData, setBackendData] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data); // Update state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts
  
  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {(typeof backendData.users==='undefined') ? (
        <p>Loading...</p>
      ):(
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
      ))
      )}
    </div>
  );
};

export default Nearby;

import React, { useEffect, useState } from 'react';
import { calculateDistance } from '../util';

export const NearbyRestaurants = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch user's current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Perform a nearby search after getting the user's location
          searchNearbyRestaurants({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    }
  }, []);

  const searchNearbyRestaurants = (location) => {
    // Create a PlacesService object
    const placesService = new window.google.maps.places.PlacesService(
      document.createElement('div')
    );

    // Define the search parameters
    const request = {
      location: new window.google.maps.LatLng(location.latitude, location.longitude),
      radius: 1000, // Search radius in meters
      type: 'restaurant', // Search for restaurants
    };

    // Perform the nearby search
    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Calculate distances and update state
        const restaurantsWithDistance = results.map((restaurant) => ({
          ...restaurant,
          distance: calculateDistance(
            location.latitude,
            location.longitude,
            restaurant.geometry.location.lat(),
            restaurant.geometry.location.lng()
          ),
        }));
        setRestaurants(restaurantsWithDistance);
      } else {
        console.error('Error fetching nearby restaurants:', status);
      }
    });
  };

  return (
    <div>
      <h2>Nearby Restaurants</h2>
      {userLocation ? (
        <div>
          <p>Your Current Location: {userLocation.latitude}, {userLocation.longitude}</p>
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant.place_id}>
                {restaurant.name} - Distance: {restaurant.distance.toFixed(2)} km
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};



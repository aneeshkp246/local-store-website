import React, { useState, useEffect, useRef } from 'react';
import Place from './Place';
import { fetchData } from './api';

const url = 'http://localhost:5000/api/products';
const Nearby = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const [currentPlace, setCurrentPlace] = useState("")

  useEffect(() => {
    let map;
    let infoWindow;
    let service;

    const initialize = () => {
      map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.8909341, lng: 77.5357154 },
        zoom: 15
      });

      infoWindow = new window.google.maps.InfoWindow();

      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current
      );
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        infoWindow.close();
        const place = autocomplete.getPlace();

        if (!place.geometry) {
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
        }

        createMarker(place);
      });
    };

    const createMarker = (place) => {
      const marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      window.google.maps.event.addListener(marker, 'click', () => {
        alert(`Do you want to buy something in ${place.name}?`);
        // window.open(place.photos[0].getUrl(), '_blank');
        setCurrentPlace( place.name)
        console.log(currentPlace)
      });

      const request = {
        location: place.geometry.location,
        radius: '500',
        type: ['home_goods_store', 'supermarket', 'store', 'department_store', 'convenience_store']
      };
      service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    };

    const callback = (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < 10; i++) {
          const place = results[i];
          createMarker(results[i]);
        }
      }
    };

    window.google.maps.event.addDomListener(window, 'load', initialize);

    return () => {
      window.google.maps.event.clearListeners(window, 'load');
    };
  }, []);

  const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchDataFromApi() {
        try {
          const fetchedData = await fetchData(url);
          setData(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      }
  
      fetchDataFromApi();
    }, []);

  return (
    <div>
      <input type="text" size={50} ref={inputRef} />
      <div ref={mapRef} style={{ height: '500px' }}></div>
      { currentPlace && <Place currentPlace={currentPlace} data={data}/>}
    </div>
  );
};

export default Nearby;

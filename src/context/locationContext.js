import { createContext, useState, useEffect } from 'react';

export const Location = createContext({
  lat: 0,
  long: 0,
});

const LocationProvider = ({ children }) => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            console.log(result.state);
          } else if (result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else if (result.state === 'denied') {
            alert('please enable location permission');
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert('Sorry Not available!');
    }

    function showPosition(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
  });

  const locationValue = {
    lat: lat,
    long: long,
  };

  return (
    <Location.Provider value={locationValue}>{children}</Location.Provider>
  );
};

export default LocationProvider;

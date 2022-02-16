import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Restaurants = createContext({
  allRestaurants: [],
});

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getAllRestaurants = async () => {
      const res = await axios.get(
        'https://achievexsolutions.in/etiano/api/all_restaurant'
      );

      const resData = await res.data;
      setRestaurants(resData.data);
    };

    getAllRestaurants();
  }, []);

  const restaurantCtx = {
    allRestaurants: restaurants,
  };

  return (
    <Restaurants.Provider value={restaurantCtx}>
      {children}
    </Restaurants.Provider>
  );
};

export default RestaurantsProvider;

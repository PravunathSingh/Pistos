import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ allRestaurants }) => {
  const restaurantsList = allRestaurants.map((restaurant) => {
    return (
      <RestaurantItem
        key={restaurant.restaurant_id}
        restaurantData={restaurant}
      />
    );
  });

  return (
    <div className='grid grid-cols-2 gap-12 md:grid-cols-3 place-content-center place-items-center'>
      {restaurantsList}
    </div>
  );
};

export default RestaurantList;

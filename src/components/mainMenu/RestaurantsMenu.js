import axios from 'axios';
import React, { useContext } from 'react';
import { Restaurants } from '../../context/restaurantsContext';
import RestaurantItem from './allRestaurants.js/RestaurantItem';

const RestaurantsMenu = () => {
  const allRestaurants = useContext(Restaurants);

  console.log(allRestaurants.allRestaurants);

  const restaurants = allRestaurants.allRestaurants.map((restaurant) => {
    return (
      <RestaurantItem
        key={restaurant.restaurant_id}
        restaurantData={restaurant}
      />
    );
  });

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <div className='flex flex-wrap items-center justify-center gap-6 mb-12 lg:justify-between md:mb-16'>
        <h2 className='text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl'>
          Restaurants Around The World
        </h2>

        <div className='flex flex-wrap justify-center gap-4 lg:justify-between'>
          <form>
            <input
              type='text'
              placeholder='Search Restaurants...'
              className='px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
            />
          </form>

          <button className='px-4 py-2 text-gray-200 transition-all duration-200 border-2 rounded-md cursor-pointer bg-primary lg:text-lg border-secondary'>
            Sort: Highest To Lowest (Rating)
          </button>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-12 md:grid-cols-3 place-content-center place-items-center'>
        {restaurants}
      </div>
    </div>
  );
};

export default RestaurantsMenu;

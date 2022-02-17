import axios from 'axios';
import React, { useContext, useState, useRef } from 'react';
import { Restaurants } from '../../context/restaurantsContext';
import RestaurantList from './allRestaurants.js/RestaurantList';

const RestaurantsMenu = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const restaurants = useContext(Restaurants);
  const allRestaurants = restaurants.allRestaurants;

  const searchRef = useRef();

  console.log(allRestaurants);

  allRestaurants.map((restaurant) => console.log(restaurant.restaurant_rating));

  const sortRestaurants = () => {
    setIsSorted(true);
  };

  const sortedRestaurants = allRestaurants.sort((a, b) => {
    if (isSorted) {
      return b.restaurant_rating - a.restaurant_rating;
    } else {
      return allRestaurants;
    }
  });

  const search = () => {
    console.log(searchRef.current.value);

    if (searchRef.current.value !== '') {
      const filteredRestaurants = sortedRestaurants.filter((restaurant) => {
        return Object.values(restaurant)
          .join(' ')
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase());
      });
      setSearchResults(filteredRestaurants);
    } else {
      setSearchResults(sortedRestaurants);
    }
  };

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
              ref={searchRef}
              onChange={search}
            />
          </form>

          <button
            className='px-4 py-2 text-gray-200 transition-all duration-200 border-2 rounded-md cursor-pointer bg-primary lg:text-lg border-secondary'
            onClick={sortRestaurants}
          >
            Sort: Highest To Lowest (Rating)
          </button>
        </div>
      </div>

      <RestaurantList
        allRestaurants={
          searchRef.current.value.length < 1 ? sortedRestaurants : searchResults
        }
      />
    </div>
  );
};

export default RestaurantsMenu;

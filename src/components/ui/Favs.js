import React from 'react';

const Favs = ({ img, name, category, restaurantName }) => {
  return (
    <div className='mb-8 md:mb-0'>
      <img src={img} alt={`${name}`} />
      <h4 className='my-3 text-xl font-medium text-center text-gray-200 md:text-2xl md:my-8'>
        {name}
      </h4>
      <h6 className='mb-4 text-center text-gray-300 md:text-xl md:mb-10'>
        {category}
      </h6>
      <h3 className='text-xl font-medium text-center text-cta md:text-2xl'>
        {restaurantName}
      </h3>
    </div>
  );
};

export default Favs;

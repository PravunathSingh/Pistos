import React from 'react';
import { NavLink } from 'react-router-dom';

const NewsCard = ({ img, title, body }) => {
  return (
    <div>
      <div className='max-w-max mx-auto'>
        <img src={img} alt='' className='rounded-lg mb-4 md:mb-6' />
      </div>
      <h4 className='mb-4 md:mb-6 font-medium text-xl md:text-2xl text-gray-200'>
        {title}
      </h4>
      <p className='mb-4 md:mb-6 text-gray-400 text-sm md:text-base'>{body}</p>
      <NavLink
        to='/#'
        className='text-sm max-w-max md:text-base text-brand-text hover:text-border transition-all duration-200'
      >
        Read More
      </NavLink>
    </div>
  );
};

export default NewsCard;

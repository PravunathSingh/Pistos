import React, { useState } from 'react';
import pizza from '../../assests/pizza.jpeg';

const CartItem = ({ item }) => {
  // const [numItems, setNumItems] = useState(item.noOfItems);

  // console.log(item.noOfItems);

  return (
    <section>
      <div className='flex justify-between gap-8 mb-6 mt-14 md:mb-10 lg:mb-14'>
        <div className='grid gap-6 sm:flex'>
          <div>
            <img src={pizza} alt='' className='' />
          </div>
          <div className='flex flex-col justify-between'>
            <h6 className='mb-3 text-xl font-medium text-gray-100 md:text-2xl lg:text-3xl '>
              {item.itemName}
            </h6>
            <div className='flex items-center gap-4 mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 h-7'
                viewBox='0 0 20 20'
                fill='#FC6011'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>{' '}
              <span className='font-normal text-brand-text lg:text-lg'>
                {item.stars}{' '}
                <span className='text-gray-400'>{`(${item.ratingsCount} ratings)`}</span>
              </span>
            </div>
            <div className='flex justify-between font-normal text-gray-400 lg:text-lg'>
              <p>{item.dishType}</p>
              <p>{item.cuisine}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h6 className='text-lg font-medium text-gray-100 lg:text-2xl'>
            Rs <span className='text-brand-text'>{item.price}</span>
          </h6>
          {/* {numItems} <button>+</button> */}
          <button className='text-gray-100 transition-all duration-150 lg:text-lg hover:text-brand-text'>
            Remove Item
          </button>
        </div>
      </div>
      <hr className='border-0.2 border-cta opacity-10' />
    </section>
  );
};

export default CartItem;

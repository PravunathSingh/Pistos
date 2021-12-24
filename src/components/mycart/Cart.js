// TODOS:
// 1. Add functionality to the proceed to checkout and clear cart button.

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
import sandwich from '../../assests/sandwich.png';
import pie from '../../assests/pie.png';
import EmptyCart from './EmptyCart';

const cartData = [
  {
    id: uuidv4(),
    itemName: 'Pizza Corner',
    stars: 3.7,
    ratingsCount: 124,
    dishType: 'Pizza',
    cuisine: 'Continental',
    price: '209',
    noOfItems: 1,
  },
  {
    id: uuidv4(),
    itemName: 'Pizza Corner',
    stars: 3.7,
    ratingsCount: 124,
    dishType: 'Pizza',
    cuisine: 'Continental',
    price: '209',
    noOfItems: 1,
  },
  {
    id: uuidv4(),
    itemName: 'Pizza Corner',
    stars: 3.7,
    ratingsCount: 124,
    dishType: 'Pizza',
    cuisine: 'Continental',
    price: '209',
    noOfItems: 1,
  },
  {
    id: uuidv4(),
    itemName: 'Pizza Corner',
    stars: 3.7,
    ratingsCount: 124,
    dishType: 'Pizza',
    cuisine: 'Continental',
    price: '209',
    noOfItems: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(cartData);

  const cartItems = cart.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  if (cart.length === 0) {
    return <EmptyCart />;
  } else {
    cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  }

  return (
    <div className='container font-rubik sm:my-16 md:md-24 lg:my-80'>
      {/* {!cart.length && <EmptyCart />} */}
      <div className='flex items-center justify-between mb-8 md:mb-16 lg:mb-24'>
        <h6 className='text-lg font-medium text-gray-300 md:text-2xl'>
          No of Items: <span className='text-brand-text'>{cart.length}</span>
        </h6>

        <div>
          <button className='px-6 py-2 text-lg font-medium text-gray-200 transition-all duration-300 border rounded-lg md:px-10 p md:py-3 md:text-xl border-brand-text hover:-translate-y-2'>
            Clear Cart
          </button>
        </div>
      </div>

      {cartItems}

      <div className='max-w-full mx-auto my-12 md:ml-auto md:mt-10 lg:mt-16 md:max-w-max'>
        <button className='w-full px-8 py-3 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text md:w-auto bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
          Proceed To Checkout
        </button>
      </div>

      <div className='relative'>
        <img
          src={sandwich}
          alt='sandwich'
          className='absolute right-0 z-0 hidden lg:block'
        />
        <img src={pie} alt='pie' className='absolute hidden -top-32 lg:block' />
      </div>
    </div>
  );
};

export default Cart;

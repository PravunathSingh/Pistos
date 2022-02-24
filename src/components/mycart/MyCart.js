// TODOS:
// 1. Add functionality to the proceed to checkout and clear cart button.

import React, { useContext, useState } from 'react';
import { Cart } from '../../context/cartContext';
import CartItem from './CartItem';
import sandwich from '../../assests/sandwich.png';
import pie from '../../assests/pie.png';
import EmptyCart from './EmptyCart';
import { Auth } from '../../context/authContext';
import NotLoggedInCart from './NotLoggedInCart';

const MyCart = () => {
  const cartCtx = useContext(Cart);
  const cartItems = cartCtx.cart;
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  console.log(cartItems);

  // const cart = cart.map((item) => {
  //   return <CartItem key={item.id} item={item} />;
  // });

  // if (cart.length === 0) {
  //   return <EmptyCart />;
  // } else {
  //   cart.map((item) => {
  //     return <CartItem key={item.id} item={item} />;
  //   });
  // }

  const cartList = cartItems.map((item) => {
    return <CartItem key={item.cart_id} item={item} />;
  });

  return (
    <>
      {isLoggedIn && (
        <div className='container font-rubik sm:my-16 md:md-24 lg:my-80'>
          <div className='flex items-center justify-between mb-8 md:mb-16 lg:mb-24'>
            <h6 className='text-lg font-medium text-gray-300 md:text-2xl'>
              No of Items:{' '}
              <span className='text-brand-text'>{cartItems.length}</span>
            </h6>
          </div>

          {cartList}

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
            <img
              src={pie}
              alt='pie'
              className='absolute hidden -top-32 lg:block'
            />
          </div>
        </div>
      )}

      {!isLoggedIn && <NotLoggedInCart />}
    </>
  );
};

export default MyCart;

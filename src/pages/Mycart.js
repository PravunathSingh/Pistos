// Cart Header is the component which has the heading of the page and the two images.
// Cart component contains the actual cart list and the cart items.

// TODOS:
// 3. Add increment / decrement item buttons

import React from 'react';
import Cart from '../components/mycart/Cart';
import CartHeader from '../components/mycart/CartHeader';

const Mycart = () => {
  return (
    <div>
      <CartHeader />
      <Cart />
    </div>
  );
};

export default Mycart;

// Cart Header is the component which has the heading of the page and the two images.
// Cart component contains the actual cart list and the cart items.

// TODOS:
// 3. Add increment / decrement item buttons

import React from 'react';
import CartHeader from '../components/mycart/CartHeader';
import Footer from '../components/ui/Footer';
// import Navbar from '../components/ui/Navbar';
import MyCart from '../components/mycart/MyCart';

const MycartPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CartHeader />
      <MyCart />
      <Footer />
    </div>
  );
};

export default MycartPage;

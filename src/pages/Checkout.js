import React from 'react';
import CheckoutBody from '../components/checkout/CheckoutBody';
import CheckoutHeader from '../components/checkout/CheckoutHeader';
import Footer from '../components/ui/Footer';

const Checkout = () => {
  return (
    <div className='font-rubik'>
      <CheckoutHeader />
      <CheckoutBody />
      <Footer />
    </div>
  );
};

export default Checkout;

import React from 'react';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import MyWishlist from '../components/wishlist/MyWishlist';
import WishListHeader from '../components/wishlist/WishListHeader';

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <WishListHeader />
      <MyWishlist />
      <Footer />
    </div>
  );
};

export default Wishlist;

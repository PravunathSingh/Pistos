import React from 'react';
import ExpertChoice from '../components/mainMenu/ExpertChoice';
import Locations from '../components/mainMenu/Locations';
import RestaurantsMenu from '../components/mainMenu/RestaurantsMenu';
import Footer from '../components/ui/Footer';
// import Navbar from '../components/ui/Navbar';

const Menu = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Locations />
      <ExpertChoice />
      <RestaurantsMenu />
      <Footer />
    </div>
  );
};

export default Menu;

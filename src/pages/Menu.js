import React from 'react';
import ExpertChoice from '../components/mainMenu/ExpertChoice';
import Locations from '../components/mainMenu/Locations';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Locations />
      <ExpertChoice />
      <Footer />
    </div>
  );
};

export default Menu;

import React from 'react';
import AboutUs from '../components/home/AboutUs';
import AppLinks from '../components/home/AppLinks';
import Hero from '../components/home/Hero';
import MenuSection from '../components/home/MenuSection';
import News from '../components/home/News';
import Reason from '../components/home/Reason';
import Subscription from '../components/home/Subscription';
import Tradition from '../components/home/Tradition';
import Footer from '../components/ui/Footer';
// import Navbar from '../components/ui/Navbar';

const Home = () => {
  return (
    <div className='font-rubik'>
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <Reason />
      <MenuSection />
      <Tradition />
      <AppLinks />
      <News />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

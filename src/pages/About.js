import React from 'react';
import AboutBody from '../components/about/AboutBody';
import AboutHero from '../components/about/AboutHero';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutBody />
      <Footer />
    </div>
  );
};

export default About;

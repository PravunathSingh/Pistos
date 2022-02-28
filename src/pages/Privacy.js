import React from 'react';
import PrivacyBody from '../components/privacy/PrivacyBody';
import PrivacyHeader from '../components/privacy/PrivacyHeader';
import Footer from '../components/ui/Footer';
// import Navbar from '../components/ui/Navbar';

const Privacy = () => {
  return (
    <>
      {/* <Navbar /> */}
      <PrivacyHeader />
      <PrivacyBody />
      <Footer />
    </>
  );
};

export default Privacy;

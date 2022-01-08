import React from 'react';
import ProfileDetails from '../components/myProfile/ProfileDetails';
import ProfileTabs from '../components/myProfile/ProfileTabs';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const MyProfile = () => {
  return (
    <div>
      <Navbar />
      <div className='container my-12 sm:my-20 md:my-28 lg:my-40'>
        <div className='grid items-center place-content-between lg:grid-cols-5 gap-12'>
          <div className='lg:col-span-1'>
            <ProfileTabs />
          </div>
          <div className='lg:col-span-4'>
            <ProfileDetails />
          </div>
        </div>
        {/* <div className=''>
        <ProfileDetails />
      </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;

import React from 'react';
import { NavLink } from 'react-router-dom';
import profileLarge from '../../assests/profileLarge.png';

const ProfileDetails = () => {
  return (
    <div className='font-rubik'>
      <div className='flex  gap-6 items-center justify-start flex-wrap'>
        <div className='rounded-full overflow-hidden'>
          <img src={profileLarge} alt='' className='object-center w-28 h-28' />
        </div>
        <div>
          <h6 className='text-gray-100 font-medium text-xl md:text-3xl mb-3 md:mb-5'>
            Hi There User !
          </h6>
          <NavLink
            to='/signin'
            className='text-gray-400 hover:text-brand-text transition-all duration-200 md:text-lg'
          >
            Sign Out
          </NavLink>
        </div>
      </div>

      <div className='my-8 md:my-14'>
        <div className='grid mb-10 sm:grid-cols-2 sm:gap-4'>
          <h5 className='font-medium text-2xl md:text-3xl text-brand-text mb-4 md:mb-8'>
            Profile Details
          </h5>

          <p className='text-sm max-w-max md:text-base cursor-pointer text-gray-300 hover:text-brand-text transition-all duration-200'>
            <i className='fa fa-pencil'></i> Edit Profile
          </p>
        </div>

        <div className='grid place-content-between sm:grid-cols-2 gap-8'>
          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg md:text-xl text-gray-100'>Name</h6>
            <p className='text-gray-400 md:text-lg'>Pravunath Singh</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg md:text-xl text-gray-100 max-w-max'>
              Email
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>
              pravunathsingh@gmail.com
            </p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg md:text-xl text-gray-100'>Phone</h6>
            <p className='text-gray-400 md:text-lg'>(+91) 8777655512</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg md:text-xl text-gray-100 max-w-max'>
              Password
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>*********</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg md:text-xl text-gray-100'>Address</h6>
            <p className='text-gray-400 md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam iste praesentium.
            </p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg md:text-xl text-gray-100 max-w-max'>
              PIN Code
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>712123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

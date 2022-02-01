import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import profileLarge from '../../assests/profileLarge.png';
import { Auth } from '../../context/authContext';

const ProfileDetails = () => {
  const authCtx = useContext(Auth);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className='font-rubik'>
      <div className='flex flex-wrap items-center justify-start gap-6'>
        <div className='overflow-hidden rounded-full'>
          <img src={profileLarge} alt='' className='object-center w-28 h-28' />
        </div>
        <div>
          <h6 className='mb-3 text-xl font-medium text-gray-100 md:text-3xl md:mb-5'>
            Hi There User !
          </h6>
          <NavLink
            to='/signin'
            className='text-gray-400 transition-all duration-200 hover:text-brand-text md:text-lg'
            onClick={logoutHandler}
          >
            Sign Out
          </NavLink>
        </div>
      </div>

      <div className='my-8 md:my-14'>
        <div className='grid mb-10 sm:grid-cols-2 sm:gap-4'>
          <h5 className='mb-4 text-2xl font-medium md:text-3xl text-brand-text md:mb-8'>
            Profile Details
          </h5>

          <p className='text-sm text-gray-300 transition-all duration-200 cursor-pointer max-w-max md:text-base hover:text-brand-text'>
            <i className='fa fa-pencil'></i> Edit Profile
          </p>
        </div>

        <div className='grid gap-8 place-content-between sm:grid-cols-2'>
          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl'>Name</h6>
            <p className='text-gray-400 md:text-lg'>Pravunath Singh</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl max-w-max'>
              Email
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>
              pravunathsingh@gmail.com
            </p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl'>Phone</h6>
            <p className='text-gray-400 md:text-lg'>(+91) 8777655512</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl max-w-max'>
              Password
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>*********</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl'>Address</h6>
            <p className='text-gray-400 md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quibusdam iste praesentium.
            </p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl max-w-max'>
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

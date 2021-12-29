/*
1. Add state and handle form submission.
2. Add form validation.
*/

import React from 'react';
import Footer from '../components/ui/Footer';
import taco from '../assests/taco.png';
import burger from '../assests/burger.png';
import omlet from '../assests/omlet.png';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='font-rubik'>
      <div className='py-8 relative lg:bg-no-repeat lg:bg-cover lg:bg-signup md:py-12 lg:py-16'>
        <img src={taco} alt='' className='absolute lg:hidden w-48 max-h-48' />
        <img
          src={burger}
          alt=''
          className='absolute top-60 right-10 lg:hidden w-48 max-h-48'
        />
        <img
          src={omlet}
          alt=''
          className='absolute top-1/2 left-20 lg:hidden w-48 max-h-48'
        />
        <div className='lg:absolute top-0 left-0 w-full h-full opacity-40 bg-primary'></div>
        <div className='container relative flex items-center justify-center lg:justify-end '>
          <form>
            <h4 className='mb-6 text-2xl font-semibold text-center text-gray-100 md:mb-10 lg:mb-14 md:text-4xl'>
              Sign Up
            </h4>
            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Name
                </label>
              </div>
              <input
                type='text'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none  md:text-xl focus:bg-transparent'
                required
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Email
                </label>
              </div>
              <input
                type='email'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Password
                </label>
              </div>
              <input
                type='password'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Address
                </label>
              </div>

              <textarea
                name='address'
                cols='20'
                rows='2'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
              ></textarea>
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  PIN
                </label>
              </div>
              <input
                type='number'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
              />
            </div>

            <button className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Signup
            </button>
            <p className='font-normal text-gray-100 md:text-lg'>
              Already Have An Account ?{' '}
              <NavLink to='/signin' className='text-brand-text'>
                Sign In
              </NavLink>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;

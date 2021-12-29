/*
1. Add state and handle form submission.
2. Add form validation.
3. Add third party authentication using facebook and google
*/

import React from 'react';
import Footer from '../components/ui/Footer';
import taco from '../assests/taco.png';
import burger from '../assests/burger.png';
import omlet from '../assests/omlet.png';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='font-rubik'>
      <div className='py-8 relative lg:bg-no-repeat lg:bg-cover lg:bg-login md:py-12 lg:py-20'>
        <img src={taco} alt='' className='absolute lg:hidden w-48 max-h-48' />
        <img
          src={burger}
          alt=''
          className='absolute top-40 right-10 lg:hidden w-48 max-h-48'
        />
        <img
          src={omlet}
          alt=''
          className='absolute top-1/2 left-10 lg:hidden w-48 max-h-48'
        />
        <div className='lg:absolute top-0 left-0 w-full h-full opacity-40 bg-primary'></div>
        <div className='container relative flex items-center justify-center lg:justify-start'>
          <div className='flex flex-col'>
            <div>
              <form>
                <h4 className='mb-6 text-2xl font-semibold text-center text-gray-100 md:mb-10 lg:mb-14 md:text-4xl'>
                  Sign In
                </h4>

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
                  <p className='text-sm mt-3 cursor-pointer hover:text-gray-400 transition-all duration-200 text-gray-500'>
                    Forgot Password
                  </p>
                </div>

                <button className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
                  Signin
                </button>

                <p className='text-gray-100 font-medium text-lg md:text-xl lg:text-2xl text-center mb-7 md:mb-12'>
                  OR
                </p>
              </form>
            </div>

            <div>
              <div>
                <button className='w-full px-8 py-2 text-gray-100 transition-all duration-300 rounded-lg mb-5 md:mb-9 hover:text bg-fb-blue md:text-lg hover:bg-fb-blue-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-fb-blue-dark'>
                  <i className='fab fa-facebook mr-2'></i> Signin with Facebook
                </button>
              </div>

              <div>
                <button className='w-full px-8 py-2 text-gray-100 transition-all duration-300 rounded-lg mb-5 md:mb-9 hover:text bg-google-red md:text-lg hover:bg-google-red-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-google-red-dark'>
                  <i className='fab fa-google mr-2'></i> Signin with Google
                </button>
              </div>

              <p className='font-normal text-gray-100 md:text-lg'>
                Don't Have An Account ?{' '}
                <NavLink to='/signup' className='text-brand-text'>
                  Sign Up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;

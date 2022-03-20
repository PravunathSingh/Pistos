import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [userEmail, setUserEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setUserEmail('');
  };

  return (
    <div className='z-50 py-16 bg-primary'>
      <div className='container font-rubik'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 place-content-center'>
          <div className='my-8'>
            <p className='mb-5 text-lg font-medium text-center text-gray-100 lg:text-xl md:text-left md:mb-8'>
              Don't miss to subscribe to our new feeds, kindly fill the form
              below
            </p>
            <form>
              <input
                type='text'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className='w-full px-4 py-2 mb-3 text-gray-900 bg-gray-200 rounded-lg outline-none md:text-lg md:mb-5 focus:ring-2 ring-offset-4 ring-cta-dark'
                placeholder='Enter Email Address'
              />
              <button
                className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text lg:w-auto bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
                onSubmit={submitHandler}
              >
                Submit
              </button>
            </form>
          </div>

          <div className='my-8'>
            <h6 className='mb-5 text-lg font-medium text-center text-gray-100 md:text-xl md:mb-10'>
              Platform
            </h6>
            <ul>
              <Link to='/genie'>
                <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  Genie
                </li>
              </Link>
              <Link to='/wishlist'>
                <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  Wishlist
                </li>
              </Link>
              <Link to='/privacyPolicy'>
                <li className='text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text'>
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>

          <div className='my-8'>
            <h6 className='mb-5 text-lg font-medium text-center text-gray-100 md:text-xl md:mb-10'>
              Links
            </h6>
            <ul>
              <Link to='/about'>
                <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  About Us
                </li>
              </Link>
              <Link to='/news'>
                <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  News
                </li>
              </Link>
              <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                Terms of Use
              </li>
            </ul>
          </div>

          <div className='my-8'>
            <h6 className='mb-5 text-lg font-medium text-center text-gray-100 md:text-xl md:mb-10'>
              Contact
            </h6>
            <ul>
              <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                <i className='fa fa-phone'> : </i> +915555555555
              </li>
              <li className='mb-3 text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                <i className='fa fa-envelope'> : </i> info@restaurant.com
              </li>
              <li className='text-center text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text'>
                <i className='fas fa-map-marker'> : </i> Lorem ipsum dolor sit
                amet consectetur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import Footer from '../components/ui/Footer';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='font-rubik'>
      <div className='py-8 bg-no-repeat bg-cover bg-signup md:py-12 lg:py-16'>
        {/* <div className='absolute top-0 left-0 w-full h-full opacity-50 bg-primary'></div> */}
        <div className='container flex items-center justify-end '>
          <form>
            <h4 className='mb-6 text-2xl font-semibold text-center text-gray-100 md:mb-10 lg:mb-14 md:text-4xl'>
              Sign Up
            </h4>
            <div>
              <div className='mb-3 md:mb-5'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Name
                </label>
              </div>
              <input
                type='text'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none mb-7 md:mb-12 md:text-xl focus:bg-transparent'
                required
              />
            </div>

            <div>
              <div className='mb-3 md:mb-5'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Email
                </label>
              </div>
              <input
                type='email'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none mb-7 md:mb-12 md:text-xl'
                required
              />
            </div>

            <div>
              <div className='mb-3 md:mb-5'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Password
                </label>
              </div>
              <input
                type='password'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none mb-7 md:mb-12 md:text-xl'
                required
              />
            </div>

            <div>
              <div className='mb-3 md:mb-5'>
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
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none mb-7 md:mb-12 md:text-xl'
                required
              ></textarea>
            </div>

            <div>
              <div className='mb-3 md:mb-5'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  PIN
                </label>
              </div>
              <input
                type='number'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none mb-7 md:mb-12 md:text-xl'
                required
              />
            </div>

            <button className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Signup
            </button>
            <p className='text-lg font-medium text-gray-100 md:text-xl'>
              Already Have An Account ?{' '}
              <NavLink to='/login' className='text-brand-text'>
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

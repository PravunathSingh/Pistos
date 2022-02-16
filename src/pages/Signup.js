/*
1. Add state and handle form submission.
2. Add form validation.
*/

import React, { useRef } from 'react';
import Footer from '../components/ui/Footer';
import taco from '../assests/taco.png';
import burger from '../assests/burger.png';
import omlet from '../assests/omlet.png';
import { NavLink } from 'react-router-dom';
import AuthNav from '../components/ui/AuthNav';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;

    console.log({
      name,
      email,
      phone,
      password,
    });

    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    phoneRef.current.value = '';
  };

  return (
    <div className='font-rubik'>
      <AuthNav className='relative' />
      <div className='relative py-8 lg:bg-no-repeat lg:bg-center lg:bg-signup md:py-12 lg:py-16'>
        <img src={taco} alt='' className='absolute w-48 lg:hidden max-h-48' />
        <img
          src={burger}
          alt=''
          className='absolute w-48 top-60 right-10 lg:hidden max-h-48'
        />
        <img
          src={omlet}
          alt=''
          className='absolute w-48 top-1/2 left-20 lg:hidden max-h-48'
        />
        {/* <div className='top-0 left-0 w-full h-full lg:absolute opacity-40 bg-primary'></div> */}
        <div className='container relative flex items-center justify-center lg:justify-end '>
          <form onSubmit={register}>
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
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl focus:bg-transparent'
                required
                ref={nameRef}
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
                ref={emailRef}
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Phone
                </label>
              </div>
              <input
                type='number'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
                ref={phoneRef}
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
                ref={passwordRef}
              />
            </div>

            <button
              type='submit'
              className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
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

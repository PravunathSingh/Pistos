import React from 'react';
import { NavLink } from 'react-router-dom';
import hero from '../../assests/hero.png';

const Hero = () => {
  return (
    <div className='mt-20 md:mt-28 container'>
      <div className='grid md:grid-cols-2 gap-8 place-content-center place-items-center'>
        <div className='order-2 md:order-1 md:container'>
          <h1 className='text-4xl text-center md:text-left lg:text-5xl font-semibold leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-100 mb-6 md:mb-9 lg:mb-12'>
            Lorem ipsum dolor <span className='text-brand-text'>sit amet.</span>
          </h1>

          <p className='md:text-lg font-light text-center md:text-left text-gray-300 leading-relaxed md:leading-relaxed mb-8 md:mb-12 lg:mb-26'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            asperiores natus dicta at libero.
          </p>

          <div className='z-50'>
            <NavLink to='/signin'>
              <button className='px-6 w-full md:w-auto mb-4 md:mb-0 md:mr-8 py-2 font-medium md:text-lg rounded-md text-gray-900 bg-cta-dark hover:bg-cta hover:shadow-md hover:-translate-y-2 transition-all duration-200'>
                Get Started
              </button>
            </NavLink>

            <NavLink to='/menu'>
              <button className='px-6 py-2 w-full md:w-auto font-medium md:text-lg text-gray-100 rounded-md border-2 border-brand-text hover:bg-brand-text transition-all duration-200'>
                Explore Our Menu
              </button>
            </NavLink>
          </div>
        </div>

        <div className='order-1 md:order-2'>
          <img src={hero} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

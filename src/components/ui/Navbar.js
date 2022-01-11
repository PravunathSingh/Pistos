import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  const showMobNav = () => {
    setNavToggle((value) => !value);
  };

  const setNewLocation = () => {
    setDropdownToggler((value) => !value);
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 opacity-100 shadow-lg bg-secondary'>
      <nav className='shadow-lg bg-secondary font-rubik'>
        <div className='container py-3 md:py-4 flex flex-wrap justify-between items-center'>
          <NavLink
            to='/'
            exact='true'
            className='font-semibold text-3xl md:text-4xl text-gray-100'
          >
            Logo
          </NavLink>

          <div className='hidden sm:block'>
            <h6
              className='cursor-pointer text-gray-200 md:text-lg py-2'
              onClick={setNewLocation}
            >
              Lichubagan More, Bandel, 712123{' '}
              <span>
                <i className='fas fa-chevron-down text-brand-text'></i>
              </span>
            </h6>

            {dropdownToggler ? (
              <div className='rounded-md px-6 py-3 bg-primary shadow-lg cursor-pointer'>
                <h6 className='md:text-lg text-gray-200 hover:text-brand-text transition-all duration-200'>
                  <i className='fa fa-map-marker'></i> Set New Location
                </h6>
              </div>
            ) : (
              ''
            )}
          </div>

          <div className='lg:hidden'>
            <i
              className='fa fa-bars fa-2x text-gray-200 hover:text-brand-text transition-all duration-200'
              onClick={showMobNav}
            ></i>
          </div>

          <div className='hidden lg:block'>
            <ul className='list-none hidden lg:flex'>
              <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
                <NavLink to='/about'>About Us</NavLink>
              </li>
              <li className='py-2 ml-6 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
                <NavLink to='/menu'>Menu</NavLink>
              </li>
              <li className='py-2 ml-6 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
                <NavLink to='/genie'>Genie</NavLink>
              </li>
              <li className='py-2 ml-6 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
                <NavLink to='/profile'>My Profile</NavLink>
              </li>
              <li className='py-2 ml-6 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
                <NavLink to='/signup'>Sign Up</NavLink>
              </li>
              <li className='py-2 ml-6 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
                <NavLink to='/cart'>
                  <button>
                    <i className='fa fa-shopping-cart'></i>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            'container transition-all duration-300 ' +
            (navToggle
              ? ' translate-y-0 py-4 opacity-100 h-full'
              : ' -translate-y-96 opacity-0 h-0')
          }
        >
          <ul className='list-none grid grid-cols-3 place-items-center gap-6'>
            <li className='col-span-3 sm:hidden'>
              <div>
                <h6
                  className='cursor-pointer text-gray-200 md:text-lg py-2'
                  onClick={setNewLocation}
                >
                  Lichubagan More, Bandel, 712123{' '}
                  <span>
                    <i className='fas fa-chevron-down text-brand-text'></i>
                  </span>
                </h6>

                {dropdownToggler ? (
                  <div className='rounded-md px-6 py-3 bg-primary shadow-lg cursor-pointer'>
                    <h6 className='md:text-lg text-gray-200 hover:text-brand-text transition-all duration-200'>
                      <i className='fa fa-map-marker'></i> Set New Location
                    </h6>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </li>
            <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
              <NavLink to='/genie'>Genie</NavLink>
            </li>
            <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
              <NavLink to='/profile'>My Profile</NavLink>
            </li>
            <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
              <NavLink to='/signup'>Sign Up</NavLink>
            </li>
            <li className='py-2 md:text-lg text-gray-300 hover:text-brand-text transition-all duration-200'>
              <NavLink to='/cart'>
                <button>
                  <i className='fa fa-shopping-cart'></i>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

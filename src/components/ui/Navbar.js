import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from '../../context/authContext';
import { Location } from '../../context/locationContext';

const Navbar = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;
  const locationCtx = useContext(Location);

  const showMobNav = () => {
    setNavToggle((value) => !value);
  };

  const setNewLocation = () => {
    setDropdownToggler((value) => !value);
  };

  return (
    <div className='fixed top-0 left-0 z-50 w-full shadow-lg opacity-100 bg-secondary'>
      <nav className='shadow-lg bg-secondary font-rubik'>
        <div className='container flex flex-wrap items-center justify-between py-3 md:py-4'>
          <NavLink
            to='/'
            exact='true'
            className='text-3xl font-semibold text-gray-100 md:text-4xl'
          >
            Logo
          </NavLink>

          <div className='hidden sm:block'>
            <h6
              className='py-2 text-gray-200 cursor-pointer md:text-lg'
              onClick={setNewLocation}
            >
              {locationCtx.lat !== 0 && locationCtx.long !== 0
                ? `${locationCtx.lat}, ${locationCtx.long}`
                : 'Set Location...'}
              <span>
                <i className='fas fa-chevron-down text-brand-text'></i>
              </span>
            </h6>

            {dropdownToggler ? (
              <div className='px-6 py-3 rounded-md shadow-lg cursor-pointer bg-primary'>
                <h6 className='text-gray-200 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <i className='fa fa-map-marker'></i> Set New Location
                </h6>
              </div>
            ) : (
              ''
            )}
          </div>

          <div className='lg:hidden'>
            <i
              className='text-gray-200 transition-all duration-200 fa fa-bars fa-2x hover:text-brand-text'
              onClick={showMobNav}
            ></i>
          </div>

          <div className='hidden lg:block'>
            <ul className='hidden list-none lg:flex'>
              <li className='py-2 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-brand-text'
                      : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink
                  to='/menu'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-brand-text'
                      : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink
                  to='/genie'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-brand-text'
                      : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                  }
                >
                  Genie
                </NavLink>
              </li>
              {isLoggedIn && (
                <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/profile'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    My Profile
                  </NavLink>
                </li>
              )}

              {!isLoggedIn && (
                <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/signup'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
              )}
              <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink
                  to='/cart'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-brand-text'
                      : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                  }
                >
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
          <ul className='grid grid-cols-3 gap-6 list-none place-items-center'>
            <li className='col-span-3 sm:hidden'>
              <div>
                <h6
                  className='py-2 text-gray-200 cursor-pointer md:text-lg'
                  onClick={setNewLocation}
                >
                  {locationCtx.lat !== 0 && locationCtx.long !== 0
                    ? `${locationCtx.lat}, ${locationCtx.long}`
                    : 'Set Location...'}
                  <span>
                    <i className='fas fa-chevron-down text-brand-text'></i>
                  </span>
                </h6>

                {dropdownToggler ? (
                  <div className='px-6 py-3 rounded-md shadow-lg cursor-pointer bg-primary'>
                    <h6 className='text-gray-200 transition-all duration-200 md:text-lg hover:text-brand-text'>
                      <i className='fa fa-map-marker'></i> Set New Location
                    </h6>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </li>
            <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
              <NavLink to='/genie'>Genie</NavLink>
            </li>
            {isLoggedIn && (
              <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink to='/profile'>My Profile</NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink to='/signup'>Sign Up</NavLink>
              </li>
            )}
            <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
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

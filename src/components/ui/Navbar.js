import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Auth } from '../../context/authContext';
import { Location } from '../../context/locationContext';

const Navbar = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [address, setAddress] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;
  const locationCtx = useContext(Location);

  useEffect(() => {
    const getAddress = async () => {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationCtx.long},${locationCtx.lat}.json?access_token=pk.eyJ1IjoicG5zaW5naCIsImEiOiJjbDA2Zm9udWMwZDBzM2VyMnJvcTVnbWtxIn0.z4soi_Ue9zL8XoPVvgIAvQ`
      );

      const resData = res.data.features[1];
      setAddress(resData);
      console.log(address);
    };

    getAddress();
  }, [locationCtx.lat, locationCtx.long]);

  const showMobNav = () => {
    setNavToggle((value) => !value);
  };

  const setNewLocation = () => {
    setDropdownToggler((value) => !value);
  };

  console.log(showModal);

  return (
    <>
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
                {locationCtx.lat !== null && locationCtx.long !== null
                  ? `${address.place_name}`
                  : 'Set Location...'}
                <span>
                  <i className='fas fa-chevron-down text-brand-text'></i>
                </span>
              </h6>

              {dropdownToggler ? (
                <div
                  className='px-6 py-3 rounded-md shadow-lg cursor-pointer bg-primary'
                  onClick={() => setShowModal(true)}
                >
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
                    {locationCtx.lat !== null && locationCtx.long !== null
                      ? `${address.place_name}`
                      : 'Set Location...'}
                    <span>
                      <i className='fas fa-chevron-down text-brand-text'></i>
                    </span>
                  </h6>

                  {dropdownToggler ? (
                    <div
                      className='px-6 py-3 rounded-md shadow-lg cursor-pointer bg-primary'
                      onClick={() => setShowModal(true)}
                    >
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

      {showModal ? (
        <>
          <div className='container fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
            <div className='relative w-auto max-w-3xl mx-auto my-40'>
              {/*content*/}
              <div className='relative flex flex-col w-full bg-gray-100 border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
                {/*header*/}
                {/*body*/}
                <div className='relative flex-auto p-9'>
                  <p className='my-4 text-lg leading-relaxed text-blueGray-500'>
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200'>
                  <button
                    className='px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-primary opacity-80'></div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;

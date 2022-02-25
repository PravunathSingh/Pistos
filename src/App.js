import React, { useContext, useEffect } from 'react';
import Mycart from './pages/MycartPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import TrackOrder from './pages/TrackOrder';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
// import ImgUpload from './components/misc/ImgUpload';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Genie from './pages/Genie';
import ScrollToTop from './components/misc/ScrollToTop';
import Menu from './pages/Menu';
import Error404 from './pages/Error404';
import { Auth } from './context/authContext';
import RestaurantProductsPage from './pages/RestaurantProductsPage';
import AllBlogs from './pages/AllBlogs';
import BlogDetailsPage from './pages/BlogDetailsPage';
import MycartPage from './pages/MycartPage';
import Wishlist from './pages/Wishlist';

const App = () => {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  useEffect(() => {
    // if ('geolocation' in navigator) {
    //   alert('Geolocation is available');
    // } else {
    //   alert('Geolocation is not available');
    // }

    // var geoSettings = {
    //   enableHighAccuracy: false,
    //   maximumAge: 30000,
    //   timeout: 20000,
    // };

    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            console.log(result.state);
          } else if (result.state === 'prompt') {
            console.log('prompt');
          } else if (result.state === 'denied') {
            alert('please enable location permission');
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert('Sorry Not available!');
    }
  });

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route
            path='/menu/restaurant/:id'
            element={<RestaurantProductsPage />}
          />
          <Route path='/genie' element={<Genie />} />
          <Route path='/cart' element={<MycartPage />} />
          <Route path='/wishlist' element={<Wishlist />} />
          {!isLoggedIn && <Route path='/signup' element={<Signup />} />}
          {!isLoggedIn && <Route path='/signin' element={<SignIn />} />}
          {isLoggedIn && <Route path='/profile' element={<MyProfile />} />}
          {!isLoggedIn && (
            <Route
              path='/profile'
              element={<Navigate replace={true} to='/' />}
            />
          )}

          <Route path='/privacyPolicy' element={<Privacy />} />
          <Route path='/news' element={<AllBlogs />} />
          <Route path='/news/newsDetails/:id' element={<BlogDetailsPage />} />
          <Route path='/profile/orders' element={<TrackOrder />} />

          {/* <Route path='/imgUpload' element={<ImgUpload />} /> */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;

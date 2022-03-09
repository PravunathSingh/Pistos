import React, { useContext } from 'react';
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
import Navbar from './components/ui/Navbar';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';

const App = () => {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          {isLoggedIn && <Route path='/about' element={<About />} />}
          <Route path='/menu' element={<Menu />} />
          <Route
            path='/menu/restaurant/:id'
            element={<RestaurantProductsPage />}
          />
          <Route path='/genie' element={<Genie />} />
          <Route path='/cart' element={<MycartPage />} />
          <Route path='/checkout' element={<Checkout />} />
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
          <Route path='/payment' element={<Payment />} />

          {/* <Route path='/imgUpload' element={<ImgUpload />} /> */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;

import React, { useContext } from 'react';
import Mycart from './pages/Mycart';
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
import ImgUpload from './components/misc/ImgUpload';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Genie from './pages/Genie';
import ScrollToTop from './components/misc/ScrollToTop';
import Menu from './pages/Menu';
import Error404 from './pages/Error404';
import { Auth } from './context/authContext';

const App = () => {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/genie' element={<Genie />} />
          <Route path='/cart' element={<Mycart />} />
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
          <Route path='/profile/orders' element={<TrackOrder />} />

          <Route path='/imgUpload' element={<ImgUpload />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;

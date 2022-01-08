import React from 'react';
import Mycart from './pages/Mycart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import TrackOrder from './pages/TrackOrder';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Mycart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/profile/orders' element={<TrackOrder />} />
      </Routes>
    </Router>
  );
};

export default App;

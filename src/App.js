import React from 'react';
import Mycart from './pages/Mycart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import TrackOrder from './components/myorders/TrackOrder';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/cart' element={<Mycart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/trackOrder' element={<TrackOrder />} />
      </Routes>
    </Router>
  );
};

export default App;

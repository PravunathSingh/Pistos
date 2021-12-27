import React from 'react';
import Mycart from './pages/Mycart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/cart' element={<Mycart />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

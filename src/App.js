import React from 'react';

import { Router, Routes, Route } from 'react-router-dom';

import LoginScreen from './pages/loginScreen';
import Charts from './pages/charts';

function App() {
  return (
    <Routes>
      <Route element={<LoginScreen/>} path="/" />
      <Route element={<Charts/>} path="/charts" />
    </Routes>
  );
}

export default App;

import React from 'react';

import { Routes, Route } from 'react-router-dom';

import LoginScreen from './pages/loginScreen';
import Charts from './pages/charts';
import DataTable from './pages/dataTable';

function App() {
  return (
    <Routes>
      <Route element={<LoginScreen/>} path="/" />
      <Route element={<Charts/>} path="/charts" />
      <Route element={<DataTable/>} path="/dataTable" />
    </Routes>
  );
}

export default App;

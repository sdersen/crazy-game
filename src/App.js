import React from 'react';
import './App.css';
import Home from './components/home';
import SinglePlanet from './components/SinglePlanet/singelPlanet';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":planet" element={<SinglePlanet />} />
      </Routes>
    </div>
  );
}

export default App;

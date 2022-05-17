import React from 'react';
import './App.css';
// import { Canvas } from '@react-three/fiber';
// import { Router } from '@gatsbyjs/reach-router';
// import { OrbitControls, Stars } from '@react-three/drei';

// import Sun from './components/Sun';
// import TextCard from './components/textCard';
// import Jupiter from './components/Jupiter/Jupiter';
// import Venus from './components/Venus/venus';
// import Mercury from './components/Mercury/mercury';
// import Earth from './components/Earth/Earth';
// import Neptune from './components/Neptune/neptune';
// import Mars from './components/Mars/Mars';
// import Uranus from './components/Uranus/Uranus';
// import SinglePlanet from './components/SinglePlanet/singelPlanet';
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

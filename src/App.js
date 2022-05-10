import React from 'react';
import './App.css';
// import { Canvas } from '@react-three/fiber';
import { Router } from '@gatsbyjs/reach-router';
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
import SinglePlanet from './components/SinglePlanet/singelPlanet';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <SinglePlanet path="/earth" />
      </Router>
    </div>
  );
}

export default App;

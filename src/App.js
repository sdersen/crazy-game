import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Sun from './components/Sun';

import { OrbitControls, Stars } from '@react-three/drei';
import TextCard from './components/textCard';
import Jupiter from './components/Jupiter/Jupiter';
import Venus from './components/Venus/venus';
import Mercury from './components/Mercury/mercury';
import Earth from './components/Earth/Earth';
import Neptune from './components/Neptune/neptune';
import Mars from './components/Mars/Mars';
import Uranus from './components/Uranus/Uranus';
import Saturn from './components/Saturn/staurn';

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Stars />
        <ambientLight intensity={0.2} />
        <Suspense>
          <Sun />
          <Mercury />
          <TextCard />
          <Earth />
          <Mars />
          <Saturn />
          <Jupiter />
          <Uranus />
          <Venus />
          <Neptune />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

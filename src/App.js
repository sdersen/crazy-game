import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Sun from './components/Sun';
import AnimatedSphereSmall from './components/Mercury/mercury';
import { OrbitControls, Stars } from '@react-three/drei';
import TextCard from './components/textCard';
import Jupiter from './components/Jupiter/Jupiter';
import Venus from './components/Venus/venus';
import Neptune from './components/Neptune/neptune';

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Stars />
        <ambientLight intensity={0.2} />
        <Suspense>
          <Sun />
          <AnimatedSphereSmall />
          <TextCard />
          <Jupiter />
          <Venus/>
          <Neptune/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

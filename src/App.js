import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import AnimatedSphere from './components/animatedSphere';
import AnimatedSphereSmall from './components/animatedSphereSmall';

import { OrbitControls, Stars } from '@react-three/drei';
import TextCard from './components/textCard';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense>
          <AnimatedSphere />
          <AnimatedSphereSmall />
          <TextCard/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

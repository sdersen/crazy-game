import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import AnimatedSphere from './components/animatedSphere';

import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
    <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense>
          <Box />
        </Suspense>
      </Canvas>

    </div>
  );
}

export default App;

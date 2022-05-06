import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import AnimatedSphere from './components/animatedSphere';
import AnimatedSphereSmall from './components/animatedSphereSmall';

import { OrbitControls, Stars } from '@react-three/drei';
import TextCard from './components/textCard';
//change for lint
function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Stars />
        {/* <pointLight color="white" intensity={1} position={[20, 20, 20]} distance={300}/> */}
        <ambientLight intensity={0.2} />
        {/* <directionalLight position={[-2, 5, 2]} intensity={1} /> */}
        <Suspense>
          <AnimatedSphere />
          <AnimatedSphereSmall />
          <TextCard />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

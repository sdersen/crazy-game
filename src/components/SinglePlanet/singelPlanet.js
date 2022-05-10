import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
 import TextCard from '../textCard';

function SinglePlanet() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <Suspense>
          <TextCard/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SinglePlanet;

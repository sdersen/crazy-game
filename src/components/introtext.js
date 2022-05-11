import React from 'react';
import { Html } from '@react-three/drei';

export default function IntroText() {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Html>
        <div style={{ backgroundColor: 'black' }}>
          <h1 style={{ color: 'white' }}>Welcome to the planitarium</h1>
          <h3 style={{ color: 'white' }}>Some text...</h3>
        </div>
      </Html>
      <meshPhysicalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

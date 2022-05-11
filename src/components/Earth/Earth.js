import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import EarthMass from './EarthMass';

export default function Earth(props) {
  const mesh = useRef();
  // 365 dagar runt solen

  useFrame((state, delta) => (mesh.current.rotation.y += 0.001));
  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <EarthMass />
    </mesh>
  );
}

import React, { useRef } from 'react';
import NeptuneMass from './neptuneMass';
import { useFrame } from '@react-three/fiber';

export default function Neptune(props) {
  const mesh = useRef();
  // 60000 dagar runt solen
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
      <NeptuneMass />
    </mesh>
  );
}

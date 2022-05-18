import React, { useRef } from 'react';
import NeptuneMass from './neptuneMass';
import { useFrame } from '@react-three/fiber';

export default function Neptune({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.001));

  return (
    <mesh
      onClick={handleClick}
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

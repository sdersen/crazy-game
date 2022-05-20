import React, { useRef } from 'react';
import MarsMass from './MarsMass';
import { useFrame } from '@react-three/fiber';

export default function Mars({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.0122));

  return (
    <mesh
      onClick={handleClick}
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1.2}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <MarsMass />
    </mesh>
  );
}

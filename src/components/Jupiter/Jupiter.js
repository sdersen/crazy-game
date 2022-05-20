import React, { useRef } from 'react';
import JupiterMass from './jupiterMass';
import { useFrame } from '@react-three/fiber';

export default function Jupiter({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.002));

  return (
    <mesh
      onClick={handleClick}
      ref={mesh}
      position={[10, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={3}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <JupiterMass />
    </mesh>
  );
}

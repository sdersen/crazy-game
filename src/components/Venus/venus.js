import React, { useRef } from 'react';
import JupiterMass from './venusMass';
import { useFrame } from '@react-three/fiber';

export default function Venus(props) {
  const mesh = useRef();
  // 224 dagar runt solen
  useFrame((state, delta) => (mesh.current.rotation.y += 0.1));

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <JupiterMass />
    </mesh>
  );
}

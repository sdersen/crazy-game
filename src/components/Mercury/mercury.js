import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import MercuryMass from './MercuryMass';

export default function Mercury({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.017));


  return (
    <mesh
      onClick={handleClick}
      ref={mesh}
      position={[5, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <MercuryMass />
    </mesh>
  );
}

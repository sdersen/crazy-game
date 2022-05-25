import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Texture from '../../assets/images/mars.webp';
import PlanetMass from '../PlanetMass/PlanetMass';

export default function Mars({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.00122));

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1.2}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        texture={Texture}
        rotation={0.01}
        position={[5, 0, 30]}
        scale={2.1}
      />
    </mesh>
  );
}

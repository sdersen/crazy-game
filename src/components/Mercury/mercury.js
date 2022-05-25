import React, { useRef } from 'react';
import Texture from '../../assets/images/mercury.webp';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';

export default function Mercury({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.0017));

  return (
    <mesh
      ref={mesh}
      position={[5, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        texture={Texture}
        rotation={0.01}
        position={[0, 0, 20]}
        scale={0.5}
      />
    </mesh>
  );
}

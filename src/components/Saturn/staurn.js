import React, { useRef } from 'react';
import Texture from '../../assets/images/saturn.webp';

import { useFrame } from '@react-three/fiber';
import SaturnMass from './saturnMass';
import SaturnRing from './saturnRing';
import PlanetMass from '../PlanetMass/PlanetMass';

export default function Mercury({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.003));

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 20]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <SaturnMass handleClick={handleClick} />
    </mesh>
  );
}

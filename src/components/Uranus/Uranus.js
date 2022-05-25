import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/uranus.webp';

export default function Uranus({ state, delta, handleClick }) {
  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += 0.005));

  return (
    <mesh
      onClick={handleClick}
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        texture={Texture}
        position={[0, 0, 150]}
        scale={2.5}
        rotation={0.01}
      />
    </mesh>
  );
}

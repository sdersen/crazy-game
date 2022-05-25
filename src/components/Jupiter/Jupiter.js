import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/jupiter.webp';

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
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        position={[0, 0, 18]}
        scale={2}
        rotation={0.01}
        texture={Texture}
      />
    </mesh>
  );
}

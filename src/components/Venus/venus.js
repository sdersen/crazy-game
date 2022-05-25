import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/venus.webp';

export default function Venus({ state, delta, handleClick }) {
  const mesh = useRef();
  // 224 dagar runt solen
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh
      onClick={handleClick}
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
        position={[0, 0, 20]}
        rotation={0.02}
        scale={1}
      />
    </mesh>
  );
}

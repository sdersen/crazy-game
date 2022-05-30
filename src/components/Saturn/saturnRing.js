import React from 'react';
import Texture from '../../assets/images/saturn_ring.webp';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function SaturnMass(props) {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh position={[0, 0, 0]} scale={1} rotation={[55, 0, 0]}>
      <ringGeometry attach='geometry' args={[1.6, 2.3, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

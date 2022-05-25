import React, { useRef } from 'react';
import Texture from '../../assets/images/saturn.webp';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Ring from './saturnRing';

export default function SaturnMass({ handleClick, state, delta }) {
  const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 0, 76]} scale={4} onClick={handleClick}>
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
      <Ring />
    </mesh>
  );
}

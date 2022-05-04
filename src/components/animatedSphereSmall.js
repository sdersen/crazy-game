import React from 'react';
import Texture from '../assets/images/mercury.webp';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
export default function AnimatedSphere() {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh position={[0, 0, 5]}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

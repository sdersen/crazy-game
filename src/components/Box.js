import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Texture from '../assets/images/OutdoorFloor3.jpg';

export default function App() {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

import React from 'react';
import { Sphere } from '@react-three/drei';
import Texture from '../assets/images/sun.webp';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function AnimatedSphere() {
  const colorMap = useLoader(TextureLoader, Texture);
  return (
    <Sphere visible args={[1, 200, 400]} scale={2}>
      <meshStandardMaterial map={colorMap} />
      <pointLight color="orange" intensity={4} distance={500}/>
      <ambientLight intensity={0.3} />
    </Sphere>
  );
}

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

      {/* <MeshDistortMaterial
     color="blue"
     attach="material"
     distort={0.3}
     speed={1.5}
     roughness={0}
     /> */}
    </Sphere>
  );
}

import React, { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import Texture from '../assets/images/sun.webp';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Sun(props) {
  const sphere = useRef();
  useFrame((state, delta) => (sphere.current.rotation.y += 0.0005));

  const colorMap = useLoader(TextureLoader, Texture);
  return (
    <Sphere ref={sphere} visible args={[1, 200, 400]} scale={7}>
      <meshStandardMaterial map={colorMap} />
      <pointLight color='orange' intensity={6} distance={1000} />
      <ambientLight intensity={0.4} />
    </Sphere>
  );
}

import React, {useRef} from 'react';
import { Sphere } from '@react-three/drei';
import Texture from '../assets/images/sun.webp';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function AnimatedSphere(props) {
  const sphere = useRef();
  useFrame((state, delta) => (sphere.current.rotation.y += 0.005));

  const colorMap = useLoader(TextureLoader, Texture);
  return (
    <Sphere ref={sphere} visible args={[1, 200, 400]} scale={2}>
      <meshStandardMaterial map={colorMap} />
      <pointLight color="orange" intensity={4} distance={500}/>
      <ambientLight intensity={0.3} />
    </Sphere>
  );
}

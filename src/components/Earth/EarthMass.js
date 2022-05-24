import React, { useRef } from 'react';
import Texture from '../../assets/images/earth.jpeg';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function EarthMass(props) {
  const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 0, 25]} scale={1.2}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

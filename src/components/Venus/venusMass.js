import React, { useRef } from 'react';
import Texture from '../../assets/images/venus.webp';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function VenusMass(props) {
  const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.02));

  return (
    <mesh ref={mesh} position={[10, 0, 20]} scale={1}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

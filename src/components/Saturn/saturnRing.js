import React, { useRef } from 'react';
import Texture from '../../assets/images/saturn_ring.webp';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function SaturnMass(props) {
  const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  //useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1} rotation={[55, 0, 0]}>
      <ringGeometry attach="geometry" args={[1.3, 2.3, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

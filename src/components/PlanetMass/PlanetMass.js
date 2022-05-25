import React, { useRef } from 'react';
//import Texture from '../../assets/images/earth.jpeg';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function PlanetMass({
  texture,
  rotation,
  position,
  scale,
  handleClick,
}) {
  const colorMap = useLoader(TextureLoader, texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += rotation));
  // position = [0, 0, 25]
  //scale 1.2
  return (
    <mesh ref={mesh} position={position} scale={scale} onClick={handleClick}>
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

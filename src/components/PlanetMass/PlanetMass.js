import React, { useRef } from 'react';
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

  return (
    <mesh ref={mesh} position={position} scale={scale} onClick={handleClick}>
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

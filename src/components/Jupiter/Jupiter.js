import React, { useRef } from 'react';
import JupiterMass from './jupiterMass';

import { useFrame } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Jupiter(props) {
  // const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 0, 0]} visible args={[1, 200, 400]} scale={1}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <JupiterMass/>
    </mesh>

  );
}

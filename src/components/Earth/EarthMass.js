import React, { useRef } from 'react';
import Texture from '../../assets/images/earth.jpeg';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Html } from '@react-three/drei';

export default function EarthMass(props) {
  const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 0, 13]} scale={1}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <meshStandardMaterial map={colorMap} />
      {/* <Html>
        <div>
          <h1 style={{ color: 'white' }}>hel</h1>
          <p style={{ color: 'white' }}>text</p>
        </div>
      </Html> */}
    </mesh>
  );
}

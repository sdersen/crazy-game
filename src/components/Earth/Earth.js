import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import EarthMass from './EarthMass';

export default function Earth({ parentToChild }) {
  const [orbit, setOrbit] = useState(0.001);

  const getOrbit = async () => {
    const response = await fetch(
      'https://api.le-systeme-solaire.net/rest/bodies/terre'
    );
    const data = await response.json();

    setOrbit(data.sideralOrbit / 100000);
  };

  useEffect(() => {
    parentToChild ? getOrbit() : setOrbit(0.001);
  }, [parentToChild]);

  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += orbit));
  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <EarthMass />
    </mesh>
  );
}

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import EarthMass from './EarthMass';

export default function Earth() {
  const [orbit, setOrbit] = useState(0.001);
  const getOrbit = async () => {
    const response = await fetch(
      'https://api.le-systeme-solaire.net/rest/bodies/terre'
    );
    const data = await response.json();
    console.log(data);
    setOrbit(data.sideralOrbit / 100000);
  };

  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += orbit));

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={1}
      onClick={() => getOrbit()}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <EarthMass />
    </mesh>
  );
}

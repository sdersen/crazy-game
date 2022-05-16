import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import EarthMass from './EarthMass';
import Sun from '../Sun';

export default function Earth() {
  const [orbit, setOrbit] = useState(0.001);
  const getOrbit = async () => {
    const response = await fetch(
      'https://api.le-systeme-solaire.net/rest/bodies/'
    );
    const data = await response.json();
    console.log(data.bodies);
    setOrbit(data.bodies[199].sideralOrbit);
  };

  // useEffect(() => {
  //   function getActivity() {}
  //   getActivity();
  // }, []);
  const mesh = useRef();
  // 4332 dagar runt solen
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

import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import SaturnMass from './saturnMass';
import { getOrbit } from '../functions';

export default function Mercury({ state, delta, handleClick, parentToChild }) {
  const [orbit, setOrbit] = useState(0.003);

  useEffect(() => {
    (async () => {
      parentToChild ? setOrbit(await getOrbit('saturn')) : setOrbit(0.003);
    })();
  }, [parentToChild]);

  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += orbit));

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 20]}
      visible
      args={[1, 200, 400]}
      scale={1}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <SaturnMass handleClick={handleClick} />
    </mesh>
  );
}

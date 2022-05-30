import React, { useEffect, useRef, useState } from 'react';
import Texture from '../../assets/images/mercury.webp';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import { getOrbit } from '../functions';

export default function Mercury({ state, delta, handleClick, parentToChild }) {
  const [orbit, setOrbit] = useState(0.0017);

  useEffect(() => {
    (async () => {
      parentToChild ? setOrbit(await getOrbit('mercury')) : setOrbit(0.0017);
    })();
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
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        texture={Texture}
        rotation={0.01}
        position={[0, 0, 13]}
        scale={2.5}
      />
    </mesh>
  );
}

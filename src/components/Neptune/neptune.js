import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/neptune.webp';
import { getOrbit } from '../functions';

export default function Neptune({ state, delta, handleClick, parentToChild }) {
  const [orbit, setOrbit] = useState(0.0007);

  useEffect(() => {
    (async () => {
      parentToChild ? setOrbit(await getOrbit('neptune')) : setOrbit(0.0007);
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
        position={[0, 0, 130]}
        scale={2.1}
      />
    </mesh>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Texture from '../../assets/images/mars.webp';
import PlanetMass from '../PlanetMass/PlanetMass';
import { getOrbit } from '../functions';

export default function Mars({ state, delta, handleClick, parentToChild }) {
  const [orbit, setOrbit] = useState(0.00122);

  useEffect(() => {
    (async () => {
      parentToChild ? setOrbit(await getOrbit('mars')) : setOrbit(0.00122);
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
      scale={1.2}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        texture={Texture}
        rotation={0.01}
        position={[5, 0, 30]}
        scale={2.1}
      />
    </mesh>
  );
}

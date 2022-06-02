import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/earth.webp';
import { getOrbit } from '../functions';

export default function Earth({ parentToChild, handleClick, state, delta }) {
  const [orbit, setOrbit] = useState(0.001);

  useEffect(() => {
    (async () => {
      parentToChild ? setOrbit(await getOrbit('terre')) : setOrbit(0.001);
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
        scale={2}
        position={[0, 0, 25]}
        rotation={0.01}
      />
    </mesh>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/uranus.webp';
import { getOrbit } from '../functions';

export default function Uranus({ state, delta, handleClick, parentToChild }) {
  const [orbit, setOrbit] = useState(0.0005);

  useEffect(() => {
    (async () => {
      parentToChild ? setOrbit(await getOrbit('terre')) : setOrbit(0.0005);
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
        position={[0, 0, 110]}
        scale={3}
        rotation={0.01}
      />
    </mesh>
  );
}

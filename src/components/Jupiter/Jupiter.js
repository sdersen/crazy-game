import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/jupiter.webp';
import { getOrbit } from '../functions';

export default function Jupiter({ state, delta, handleClick, parentToChild }) {
  const [jupiterOrbit, setJupiterOrbit] = useState(0.01);

  useEffect(() => {
    (async () => {
      parentToChild ? setJupiterOrbit(await getOrbit('jupiter')) : setJupiterOrbit(0.001);
    })();
  }, [parentToChild]);

  const mesh = useRef();

  useFrame((state, delta) => (mesh.current.rotation.y += jupiterOrbit));

  return (
    <mesh
      onClick={handleClick}
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={3}
    >
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <PlanetMass
        handleClick={handleClick}
        position={[0, 0, 18]}
        scale={2}
        rotation={0.01}
        texture={Texture}
      />
    </mesh>
  );
}

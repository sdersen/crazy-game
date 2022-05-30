import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import PlanetMass from '../PlanetMass/PlanetMass';
import Texture from '../../assets/images/earth.jpeg';
import { getOrbit } from '../functions';

export default function Earth({ parentToChild, handleClick, state, delta }) {
  const [orbit, setOrbit] = useState(0.01);

  // const getOrbit = async () => {
  //   const response = await fetch(
  //     'https://api.le-systeme-solaire.net/rest/bodies/terre'
  //   );
  //   const data = await response.json();

  //   setOrbit(data.sideralOrbit / 100000);
  // };
  //console.log(getOrbit('terre'));

  useEffect(() => {
    (async () => {
      if (parentToChild) {
        const data = await getOrbit('terre');
        setOrbit(data);
      } else {
        setOrbit(0.001);
      }
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

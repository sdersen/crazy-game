import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
 import TextCard from '../textCard';

function SinglePlanet(props) {

  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${props.slug}`)
      .then((response) => response.json())
      .then((planet) => setPlanet(planet));
  }, [props.slug]);

  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.7} />
        <Suspense>
          <TextCard
          name={planet.englishName}
          text={planet.bodyType}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SinglePlanet;

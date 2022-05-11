import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import TextCard from '../textCard';
import { useParams } from 'react-router-dom';

function SinglePlanet(props) {
  const [planet, setPlanet] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${params.planet}`)
      .then((response) => response.json())
      .then((planet) => setPlanet(planet));
  }, [params.planet]);

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
          gravity={planet.gravity}
          orbit={planet.sideralOrbit}
          hours={planet.sideralRotation}/>

        </Suspense>
      </Canvas>
    </div>
  );
}

export default SinglePlanet;

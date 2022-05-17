import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Button from './Button/button';
import Sun from './Sun';
import Jupiter from './Jupiter/Jupiter';
import Venus from './Venus/venus';
import Mercury from './Mercury/Mercury';
import Earth from './Earth/Earth';
import Neptune from './Neptune/neptune';
import Mars from './Mars/Mars';
import Uranus from './Uranus/Uranus';
import Saturn from './Saturn/staurn';

import { useNavigate } from '@gatsbyjs/reach-router';

function Home() {
  let [trueOrbit, setTrueOrbit] = useState(false);
  function parentToChild() {
    setTrueOrbit(true);
    console.log('gggg');
  }
  //hej
  let navigate = useNavigate();
  function nav(planet) {
    navigate(planet);
  }

  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Stars />
        <ambientLight intensity={0.2} />
        <Button handleClick={parentToChild} />
        <Suspense>
          <Sun />

          <Mercury handleClick={() => nav('/mercury')} />
          <Earth parentToChild={trueOrbit} handleClick={() => nav('/terre')} />
          <Mars handleClick={() => nav('/mars')} />
          <Jupiter handleClick={() => nav('/jupiter')} />
          <Uranus handleClick={() => nav('/uranus')} />
          <Saturn handleClick={() => nav('/saturn')} />
          <Venus handleClick={() => nav('/venus')} />
          <Neptune handleClick={() => nav('/netptune')} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;

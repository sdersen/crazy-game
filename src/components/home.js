import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import Sun from './Sun';
import Jupiter from './Jupiter/Jupiter';
import Venus from './Venus/venus';
import Mercury from './Mercury/mercury';
import Earth from './Earth/Earth';
import Neptune from './Neptune/neptune';
import Mars from './Mars/Mars';
import Uranus from './Uranus/Uranus';
import Saturn from './Saturn/staurn';
import Introtext from './introtext';

import { useNavigate } from 'react-router-dom';

function Home(props) {
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
        <Suspense>
          <Introtext />
          <Sun />
          <Mercury handleClick={() => nav('/jupiter')} />
          <Earth handleClick={() => nav('/terre')} />
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

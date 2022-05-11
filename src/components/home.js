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
import { useNavigate } from 'react-router-dom';
import IntroMusic from "../assets/audio/cosmic-glow.mp3"

function Home(props) {
  let navigate = useNavigate();

  let audio = new Audio(IntroMusic);
  audio.play();

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
          <Sun />
          <Mercury />
          <Earth />
          <Mars />
          <Jupiter handleClick={() => nav('/jupiter')} />
          <Uranus />
          <Venus />
          <Neptune />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;

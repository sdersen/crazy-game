import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillPauseCircle } from 'react-icons/ai';

import Sun from './Sun';
import Jupiter from './Jupiter/Jupiter';
import Venus from './Venus/venus';
import Mercury from './Mercury/mercury';
import Earth from './Earth/Earth';
import Neptune from './Neptune/neptune';
import Mars from './Mars/Mars';
import Uranus from './Uranus/Uranus';
import { useNavigate } from 'react-router-dom';
import IntroMusic from '../assets/audio/cosmic-glow.mp3';

function Home(props) {
  let audio = new Audio(IntroMusic);

  let navigate = useNavigate();
  function nav(planet) {
    navigate(planet);
  }
  const mystyle = {
    position: 'absolute',
    top: '-300px',
    left: '-30px',
  };

  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <Stars />
        <ambientLight intensity={0.2} />
        <Html style={mystyle}>
          <div style={{ display: 'flex' }}>
            <AiFillPlayCircle
              onClick={() => audio.play()}
              size="40px"
              fill="white"
            />
            <AiFillPauseCircle
              onClick={() => audio.pause()}
              size="40px"
              fill="white"
            />
          </div>
        </Html>
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

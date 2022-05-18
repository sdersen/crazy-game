import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillPauseCircle } from 'react-icons/ai';

import Button from './Button/button';
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
import IntroMusic from '../assets/audio/cosmic-glow.mp3';

function Home() {
  let audio = new Audio(IntroMusic);

  let [trueOrbit, setTrueOrbit] = useState(false);
  function parentToChild() {
    trueOrbit ? setTrueOrbit(false) : setTrueOrbit(true);
  }
  let navigate = useNavigate();
  function nav(planet) {
    navigate(planet);
  }
  const mystyle = {
    position: 'absolute',
    top: '-300px',
    left: '-30px',
  };
  const textBoxStyle = {
    position: 'absolute',
    top: '-100px',
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
        <Introtext style={textBoxStyle} />
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

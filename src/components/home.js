import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { GiSpeaker } from 'react-icons/gi';
import { GiSpeakerOff } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Button2 from './Button/buttonTwo';
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
import IntroMusic from '../assets/audio/cosmic-glow.mp3';
import { mystyle, hidden, visible, visibleAbsolute, textBoxStyle } from '../components/styles';

function Home() {
  const audio = useRef(new Audio(IntroMusic));

  const [trueOrbit, setTrueOrbit] = useState(false);
  const [play, setPlay] = useState(false);

  function parentToChild() {
    trueOrbit ? setTrueOrbit(false) : setTrueOrbit(true);
  }

  let navigate = useNavigate();
  function nav(planet) {
    navigate(planet);
  }

  return (
    <div className='App'>
      <Canvas camera={{ fov: 75, position: [-10, 45, 20] }}>
        <OrbitControls enableZoom={true} />
        <Stars />
        <ambientLight intensity={0.2} />
        <Html style={mystyle}>
          <div>
            <GiSpeakerOff
              onClick={() => {
                audio.current.play();
                setPlay(true);
              }}
              size='30px'
              fill='white'
              style={play ? hidden : visible}
            />
            <GiSpeaker
              onClick={() => {
                audio.current.pause();
                setPlay(false);
              }}
              size='30px'
              fill='white'
              style={play ? visibleAbsolute : hidden}
            />
          </div>
          <Button2
            handleClick={parentToChild}
            text={trueOrbit ? 'User friendly orbits' : 'True orbits'}
          ></Button2>
        </Html>
        <Introtext style={textBoxStyle} />
        <Suspense>
          <Sun />
          <Mercury parentToChild={trueOrbit} handleClick={() => nav('/mercury')} />
          <Venus parentToChild={trueOrbit} handleClick={() => nav('/venus')} />
          <Earth parentToChild={trueOrbit} handleClick={() => nav('/terre')} />
          <Mars parentToChild={trueOrbit} handleClick={() => nav('/mars')} />
          <Jupiter parentToChild={trueOrbit} handleClick={() => nav('/jupiter')} />
          <Saturn parentToChild={trueOrbit} handleClick={() => nav('/saturn')} />
          <Uranus parentToChild={trueOrbit} handleClick={() => nav('/uranus')} />
          <Neptune parentToChild={trueOrbit} handleClick={() => nav('/neptune')} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { divStyle } from '../components/styles';

export default function IntroText() {
  const [active, setActive] = useState(() => {
    const saved = sessionStorage.getItem('seenIntroText');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  sessionStorage.setItem('seenIntroText', JSON.stringify(active));

  return (
    <mesh position={[0, 0, 0]}>
      {!active && (
        <Html>
          <div style={divStyle}>
            <AiOutlineCloseCircle
              size='40px'
              fill='white'
              onClick={() => setActive(true)}
            />
            <h1 style={{ color: 'white' }}>The Amazing Planitarium</h1>
            <h4 style={{ color: 'white' }}>
              Experience our solar system in 3D and see the planets on their
              real orbits around the sun.
            </h4>
            <h4 style={{ color: 'white' }}>
              Navigate using your mouse and zoom. Click on each planet for more
              info.
            </h4>
          </div>
        </Html>
      )}
    </mesh>
  );
}

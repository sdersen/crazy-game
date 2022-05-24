import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function IntroText() {
  const [active, setActive] = useState(() => {
    const saved = sessionStorage.getItem('seenIntroText');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  sessionStorage.setItem('seenIntroText', JSON.stringify(active));

  const divStyle = {
    padding: '50px',
    width: '300px',
    borderRadius: '20px',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    marginTop: '-220px',
    marginLeft: '-200px',
  };

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {!active && (
        <Html>
          <div style={divStyle}>
            <AiOutlineCloseCircle
              size="40px"
              fill="white"
              onClick={() => setActive(true)}
            />
            <h1 style={{ color: 'white' }}>The amazing planitarium</h1>
            <h4 style={{ color: 'white' }}>
              Here you can visit our solar system in 3D, see the planets on ther
              real orbits around the sun. And click on each planet for mire
              info.
            </h4>
            <h4 style={{ color: 'white' }}>
              Navigate using your mouse and zoom
            </h4>
          </div>
        </Html>
      )}
    </mesh>
  );
}

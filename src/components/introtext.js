import React, { useState } from 'react';
import { Html } from '@react-three/drei';

export default function IntroText() {
  const [active, setActive] = useState(false);

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {!active && (
        <Html>
          <div style={{ backgroundColor: 'black' }}>
            <h1 style={{ color: 'white' }}>Welcome to the planitarium</h1>
            <h3 style={{ color: 'white' }}>Some text...</h3>
            <button onClick={() => setActive(true)}>Ok got it!</button>
          </div>
        </Html>
      )}
    </mesh>
  );
}

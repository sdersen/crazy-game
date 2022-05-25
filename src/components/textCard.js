import React from 'react';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Html } from '@react-three/drei';

extend({ TextGeometry });

export default function TextCard({ name, text, gravity, orbit, hours }) {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Html style={{ top: '-200px', left: '-110px', width: '160px' }}>
        <div>
          <h1 style={{ color: 'white' }}>{name}</h1>
          <h3 style={{ color: 'white' }}>Body type:</h3>
          <p style={{ color: 'white' }}> {text}</p>
          <h3 style={{ color: 'white' }}>Gravity:</h3>
          <p style={{ color: 'white' }}> {gravity}m.s-2</p>
          <h3 style={{ color: 'white' }}>Orbit around sun:</h3>
          <p style={{ color: 'white' }}>{orbit} earth days</p>
          <h3 style={{ color: 'white' }}>Hours per day:</h3>
          <p style={{ color: 'white' }}>{hours} h</p>
        </div>
      </Html>
      <meshPhysicalMaterial attach='material' color={'white'} />
    </mesh>
  );
}

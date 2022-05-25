import React from 'react';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
//import roboto from '../assets/fonts/Roboto Medium_Regular.json';
import { Html } from '@react-three/drei';

extend({ TextGeometry });

export default function TextCard({ name, text, gravity, orbit, hours }) {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Html style={{ top: '-200px' }}>
        <div>
          <h1 style={{ color: 'white' }}>{name}</h1>
          <h3 style={{ color: 'white' }}>Body type:</h3>
          <p style={{ color: 'white' }}> {text}</p>
          <h3 style={{ color: 'white' }}>Gravity:</h3>
          <p style={{ color: 'white' }}> {gravity}m.s-2</p>
          <h3 style={{ color: 'white' }}>Orbit around sun:</h3>
          <p style={{ color: 'white' }}>{orbit} earth days</p>
          <h3 style={{ color: 'white' }}>Hours in a day:</h3>
          <p style={{ color: 'white' }}>{hours} h</p>
        </div>
      </Html>
      <meshPhysicalMaterial attach='material' color={'white'} />
    </mesh>
  );
}

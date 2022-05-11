import React from 'react';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
//import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
//import roboto from '../assets/fonts/Roboto Medium_Regular.json';
import { Html } from '@react-three/drei';

extend({ TextGeometry });

export default function TextCard({name, text}) {

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* <textGeometry
        attach="geometry"
        args={['test', { font, size: 1, height: 0.4 }]}
      /> */}
      <Html>
        <div>
          <h1 style={{ color: 'white' }}>{name}</h1>
          <p style={{ color: 'white' }}>{text}</p>
        </div>
      </Html>
      <meshPhysicalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

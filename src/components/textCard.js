import React from 'react';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import roboto from '../assets/fonts/Roboto Medium_Regular.json';

extend({ TextGeometry });

export default function TextCard() {
  const font = new FontLoader().parse(roboto);
  return (
    <mesh position={[-4, 0, 6]} rotation={[0, 4.7, 0]}>
      <textGeometry
        attach="geometry"
        args={['test', { font, size: 3, height: 0.4 }]}
      />
      <meshPhysicalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

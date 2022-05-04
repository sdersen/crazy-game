import React from 'react';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import roboto from '../assets/fonts/Roboto Medium_Regular.json';

extend({ TextGeometry });

export default function TextCard() {
  const font = new FontLoader().parse(roboto);
  return (
    <mesh position={[0, 0, 7]}>
      <textGeometry args={['test', { font, size: 1, height: 0.2 }]} />
      <meshPhysicalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

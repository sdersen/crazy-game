import React, { useRef } from 'react';
import JupiterMass from './jupiterMass';
import { useFrame } from '@react-three/fiber';
import { navigate } from '@gatsbyjs/reach-router';

export default function Jupiter(props) {
  const mesh = useRef();
  // 4332 dagar runt solen
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh
      onClick={(event) => navigate('/jupiter')}
      ref={mesh}
      position={[0, 0, 0]}
      visible
      args={[1, 200, 400]}
      scale={2}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
      <JupiterMass />
    </mesh>
  );
}

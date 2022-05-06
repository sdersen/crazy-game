import React, { useRef } from 'react';
import Texture from '../assets/images/mercury.webp';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Orbit from './Orbit';


export default function AnimatedSphereSmall(props) {

  const colorMap = useLoader(TextureLoader, Texture);
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.005));

  return (
    <>
      <mesh position={[0, 0, 5]}>
        <sphereBufferGeometry attach="geometry" args={[1, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <Orbit xRadius={5} zRadius={5} />
    </>
    // <Sphere visible args={[1, 100, 200]} scale={2} position={[100, 2]}>
    //   <meshStandardMaterial map={colorMap} />

    /* <MeshDistortMaterial
     color="blue"
     attach="material"
     distort={0.3}
     speed={1.5}
     roughness={0}
     /> */
    //    </Sphere>
  );
}

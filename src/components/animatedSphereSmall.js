import React from 'react';
// import { Sphere } from '@react-three/drei';
 import Texture from '../assets/images/OutdoorFloor3.jpg';
 import { useLoader } from '@react-three/fiber';
 import { TextureLoader } from 'three/src/loaders/TextureLoader';
export default function AnimatedSphere() {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh position={[0, 0, 5]}>
      <sphereBufferGeometry attach="geometry" args={[1, 100, 100]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>

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

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Button({ handleClick }) {
  const ref = useRef();

  const [hovered, hover] = useState(false);

  return (
    <mesh
      position={[1.2, 10, 0]}
      // {...props}
      // ref={ref}
      onClick={handleClick}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[10, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

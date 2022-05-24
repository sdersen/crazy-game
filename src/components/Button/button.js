export default function Button({ handleClick }) {
  return (
    <mesh position={[1.2, 10, 0]} onClick={handleClick}>
      <boxGeometry args={[10, 1, 1]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  );
}

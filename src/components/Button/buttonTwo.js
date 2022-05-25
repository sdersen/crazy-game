const btnStyle = {
  width: '150px',
  backgroundColor: 'transparent',
  color: 'white',
  border: 'solid 2px white',
  borderRadius: '10px',
  marginLeft: '20px',
};

export default function Button({ handleClick, text }) {
  return (
    <button style={btnStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

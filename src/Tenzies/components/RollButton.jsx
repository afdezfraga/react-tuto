

const RollButton = ({ onClick, isGameOver, ref }) => {
  return (
    <button ref={ref} className='roll-dice' onClick={onClick}>{isGameOver ? "Restart" : "Roll"}</button>
  );
}

export default RollButton;
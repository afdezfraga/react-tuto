
const Die = ({ value, isFrozen, isGameOver, onClick}) => {

  const ariaLabel = (value ? `Die with value ${value}` : "Die with no value").concat(isFrozen ? " held" : " not held")

  const styles = {
    backgroundColor: isGameOver ? "gold" : isFrozen ? "lightgrey" : "white"
  }
  return (
    <button  onClick={onClick} style={styles} disabled={isGameOver} aria-label={ariaLabel} aria-pressed={isFrozen}>
      {value
        ? <span role="img" aria-label="die">{value}</span>
        : <span role="img" aria-label="die">🎲</span>
      }
    </button>
  );
}

export default Die;
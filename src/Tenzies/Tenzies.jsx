import Die from './components/Die'
import RollButton from './components/RollButton'
import Title from './components/Title'
import Description from './components/Description'
import Confetti from 'react-confetti'
import './Tenzies.css'
import { useState, useRef, useEffect } from 'react'

const Tenzies = () => {

  function generateInitialDiceInfo() {
    return Array.from({ length: 10 }, () => ({ value: 0, isFrozen: false }))
  }

  // Init to ten dice with value of 0
  const [diceInfo, setDiceInfo] = useState(() => generateInitialDiceInfo())
  const [isGameOver, setIsGameOver] = useState(false)
  const resetButton = useRef(null)

  useEffect(() => {
    if (isGameOver) {
      resetButton.current.focus()
    }
  }
  , [isGameOver])

  useEffect(() => {
    resetButton.current.focus()
  }, [diceInfo])

  function generateDieValue() {
    return Math.floor(Math.random() * 6) + 1
  }

  function rollDice() {
    setDiceInfo(diceInfo.map(info => info.isFrozen ? info : { ...info, value: generateDieValue()}))
  }

  function checkForGameOver(newDiceInfo) {
    return (newDiceInfo.every(info => info.isFrozen) && (newDiceInfo[0].value !== 0) && newDiceInfo.every(info => info.value === newDiceInfo[0].value))
  }

  function applyGameOver() {
    setIsGameOver(true)
    // Throw confetti

  }

  function toggleDieFreezeGenerator(index) {
    return () => {
      const newDiceInfo = diceInfo.map((info, i) => i === index ? { ...info, isFrozen: !info.isFrozen } : info)
      setDiceInfo(newDiceInfo)
      if (checkForGameOver(newDiceInfo)) {
        setIsGameOver(true)

      }
    }
  }

  function resetGame() {
    setDiceInfo(generateInitialDiceInfo())
    setIsGameOver(false)
  }

  return (
    <main>
      {isGameOver && <Confetti />}
      <Title title={"Tenzies"}/>
      <Description description={"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}/>
      <div className="dice-container">
        {diceInfo.map((info, index) => (
          <Die key={index} value={info.value} isFrozen={info.isFrozen} isGameOver={isGameOver} onClick={toggleDieFreezeGenerator(index)}/>
        ))}
      </div>
      <RollButton ref={resetButton} onClick={isGameOver ? resetGame : rollDice} isGameOver={isGameOver}/>
    </main>
  )
}

export default Tenzies

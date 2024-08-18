import './App.css'
import Card from './components/Card'
import Logic from './components/Logic'
import { useState } from 'react'

function App() {
  const [result, setResult] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

  const choices = [
    { name: 'Rock', image: '/rock.jpg' },
    { name: 'Paper', image: '/paper.jpg' },
    { name: 'Scissors', image: '/scissor.jpg' }
  ]

  const handleUserChoice = (choice) => {
    const gameResult = Logic(choice.name)
    setResult(gameResult.result)
    setComputerChoice(gameResult.computerChoice)
  }

  return (
    <>
      <header className="header">
        <h1>Rock Paper Scissors</h1>
      </header>
      <div className="app">
        {choices.map((choice) => (
          <Card
            key={choice.name}
            name={choice.name}
            image={choice.image}
            onClick={() => handleUserChoice(choice)}
          />
        ))}
        {result && (
          <div className="result">
            <p>{`Computer chose: ${computerChoice}`}</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App

const Logic = (userChoice) => {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  const computerChoice = choices[randomIndex]

  let result

  if (userChoice === computerChoice) {
    result = "It's a tie!"
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result = 'You win!'
  } else {
    result = 'You lose!'
  }

  return { result, computerChoice }
}

export default Logic

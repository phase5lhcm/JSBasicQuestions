// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched

// note that the window object does not exist on nodejs so prompt won't work in this environment
const takeAGuess = () =>{
  const randomNum = Math.floor(Math.random() * 11); // Returns a random integer from 0 to 10
  const userInput = window.prompt('Guess a number');
  return userInput === randomNum ? window.prompt('Good Work') : window.prompt('Not matched');
}

console.log(takeAGuess());
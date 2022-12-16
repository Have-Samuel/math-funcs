const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false; // Stops any other game from starting

function getPlayerChoice() { // Player choice
  const selection = prompt(`${ROCK}, ${PAPER},${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK
    && selection !== PAPER
    && selection !== SCISSORS
  ) {
    alert(`Invalid input!, ${DEFAULT_USER_CHOICE} was selected for you.`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

function getComputerChoice() { // computer choice
  const randonValue = Math.random();
  if (randonValue < 0.34) {
    return ROCK;
  } else if (randonValue < 0.64) {
    return PAPER;
  } else SCISSORS;
}

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER
    || cChoice === PAPER && pChoice === SCISSORS
    || cChoice === SCISSORS && pChoice === ROCK) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('The Game starts!...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false; // Stops any other game from starting

function getPlayerChoice() {
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

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('The Game starts!...');
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
});

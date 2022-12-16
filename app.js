const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('The Game starts!...');
}

// const greet = {
//   greet: function what() {
//     console.log('Hello There!');
//   }
// };

// console.dir(startGame);

// greet.greet();

startGameBtn.addEventListener('click', startGame);
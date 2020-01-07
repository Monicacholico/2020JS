const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};


const getComputerChoice =() => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if ( randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const add = (a, b) => a + b;
const add2 = function (a,b){
    return a + b;
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    cChoice === pChoice 
    ? RESULT_DRAW 
    : (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
    // if(cChoice === pChoice){
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER || 
    //     cChoice === PAPER&& pChoice === SCISSORS ||
    //     cChoice === SCISSORS && cChoice === ROCK ){
    //        return RESULT_PLAYER_WINS;     
    //      } else {
    //          return RESULT_COMPUTER_WINS;
    //      }


startGameBtn.addEventListener('click', function() {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
//   const winner = getWinner(computerChoice, playerChoice);
  let winner;
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice);
  } else {
      winner = getWinner(computerChoice, playerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice} therefore you `
  if (winner == RESULT_DRAW) {
        message = message + 'had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

// not related to game

const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }

    let sum = 0;
    for(const num of numbers){
        sum += validateNumber(num);
    }
    resultHandler(sum);
}

const substractUp = function(...numbers){
    let sum = 0;
    for(const num of numbers){
        sum -= num;
    }
    return sum;
}

const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result);
}

sumUp(showResult, 1, 5, 'fdsa', 10 -3, 6, 10);
sumUp(showResult, 1, 5, 10 -3, 6, 10, 25, 88);
console.log(substractUp(1, 5, 10 -3, 6, 10, 20));
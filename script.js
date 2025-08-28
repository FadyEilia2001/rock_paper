//console and prompt game!

// score variables
let humanScore = 0;
let computerScore = 0;

//generate a random number between 1 and 3 to get computer choice
function getComputerChoice() {
  let choice = Math.random() * (3 - 1) + 1;
  return Math.round(choice);
}
// get the human choice and change it from text to number - this function returns the user score a number between 1 and 3
function getHumanChoice() {
  let humanChoice = prompt("Select Rock/Paper.Scissors").toLowerCase();
  if (humanChoice == "rock") {
    humanChoice = 2;
  } else if (humanChoice == "paper") {
    humanChoice = 1;
  } else if (humanChoice == "scissors") {
    humanChoice = 3;
  }
  return humanChoice;
}

// paper = 1
// rock = 2
// scissors = 3

// 1 > 2
// 2 > 3
// 3 > 1

//Play a round and update score based on winner
function playRound(humanChoice, computerChoice) {
  if (humanChoice == 1 && computerChoice == 2) {
    humanScore += 1;
  } else if (humanChoice == 2 && computerChoice == 3) {
    humanScore += 1;
  } else if (humanChoice == 3 && computerChoice == 1) {
    humanScore += 1;
  } else if (computerChoice == 1 && humanChoice == 2) {
    computerScore += 1;
  } else if (computerChoice == 2 && humanChoice == 3) {
    computerScore += 1;
  } else if (computerChoice == 3 && humanChoice == 1) {
    computerScore += 1;
  }
}

//play five rounds
function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`human selection ${humanSelection}`);
    console.log(`computer selection ${computerSelection}`);
  }
}

playGame();

console.log(`human score ${humanScore}`);
console.log(`computer score ${computerScore}`);

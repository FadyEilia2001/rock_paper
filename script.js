// score variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random() * (3 - 1) + 1;
  return Math.round(choice);
}
// get the human choice
function getHumanChoice() {
  // let userChoice = prompt("Please select a number paper, rock, or scissors");
  // return userChoice;
}

//Play a round will require reset and update score
function playRound(humanScore, playerScore) {
  let userChoice = getHumanChoice().toLowerCase();

  console.log(userNumericChoice);
}

//declare scores
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let choices = ["rock", "paper", "scissors"];
let humanChoice = "";
let computerChoice = "";
let winner = "";

//listen to humanChoice us bubble?
const buttonsContainer = document.getElementById("#buttonsContainer");
const userScoreContainer = document.querySelector("#userScore");
const computerScoreContainer = document.querySelector("#computerScore");
const computerChoiceElement = document.querySelector("#computer-choice");
const startGameButton = document.querySelector("#startGame");
const tieCountSpan = document.querySelector("#tieCountSpan");

function startGame() {
  humanScore = 0;
  computerScore = 0;
  tieScore = 0;
  choices = ["rock", "paper", "scissors"];
  humanChoice = "";
  computerChoice = "";
  winner = "";
  let allButtons = buttonsContainer.querySelectorAll("button");

  for (let oneButton of allButtons) {
    oneButton.disabled = false;

    userScoreContainer.textContent = "";
    computerScoreContainer.textContent = "";
    tieCountSpan.textContent = "";
  }
}

startGameButton.addEventListener("click", (e) => {
  startGame();
});

buttonsContainer.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  humanChoice = e.target.textContent.toLowerCase();
  getComputerChoice();
  //   console.log(`computer choice = ${computerChoice}`);
  //   console.log(`human choice = ${humanChoice}`);
  playRound();
  //   console.log(`human score = ${humanScore} computer score = ${computerScore}`);
  //   console.log(`ties = ${tieScore}`);
  updateScores(humanScore, computerScore);
  updateChoiceSection();
  checkForWinner();
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
}

function playRound() {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    winner = "You won";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    winner = "You lost";
  } else {
    tieScore++;
    winner = "You tied";
  }
}

function updateScores(userScore, computerScore) {
  userScoreContainer.textContent = userScore;
  computerScoreContainer.textContent = computerScore;
  tieCountSpan.textContent = tieScore;
}

function updateChoiceSection() {
  computerChoiceElement.textContent = `You chose ${humanChoice} ... and ... Computer choice is ${computerChoice} ... ${winner}`;
}

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    computerChoiceElement.textContent =
      humanScore === 5 ? "You win the game!" : "Computer wins the game!";

    let allButtons = buttonsContainer.querySelectorAll("button");
    // console.log(allButtons);

    for (let oneButton of allButtons) {
      //   console.log(oneButton);
      oneButton.disabled = true;
    }
  }
}

const rockBtn = document.querySelector(".btnRock");
const paperBtn = document.querySelector(".btnPaper");
const scissorsBtn = document.querySelector(".btnScissors");
const resetBtn = document.querySelector(".resetBtn");
const resultDiv = document.querySelector(".result");
const playerScore = document.querySelector(".plyrScore");
const computerScore = document.querySelector(".cpuScore");
const playerImgDiv = document.querySelector(".playerImgDiv");
const computerImgDiv = document.querySelector(".computerImgDiv");
const gameChoices = ["rock", "paper", "scissors"];
let paperImg = document.createElement("img");
let scissorsImg = document.createElement("img");
let rockImg = document.createElement("img");
let cpuImg = document.createElement("img");
let scoreOne = 0;
let scoreTwo = 0;
let result;
let playerSelection;
let computerSelection;

resetBtn.disabled = true;

function nextRound() {
  rockImg.remove();
  paperImg.remove();
  scissorsImg.remove();
  cpuImg.remove();
}

function computerDisplayImg(computerSelection) {
  if (computerSelection === "rock") {
    cpuImg.src = "./pictures/the rock.jpg";
    cpuImg.classList.add("displayImg");
    computerImgDiv.appendChild(cpuImg);
  } else if (computerSelection === "scissors") {
    cpuImg.src = "./pictures/scissors.jpg";
    cpuImg.classList.add("displayImg");
    computerImgDiv.appendChild(cpuImg);
  } else if (computerSelection === "paper") {
    cpuImg.src = "./pictures/paper.jpg";
    cpuImg.classList.add("displayImg");
    computerImgDiv.appendChild(cpuImg);
  }
}

function getComputerchoice() {
  let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (playerSelection === "rock") {
    result = computerSelection === "paper" ? "you lose" : "you win";
  } else if (playerSelection === "paper") {
    result = computerSelection === "scissors" ? "you lose" : "you win";
  } else if (playerSelection === "scissors") {
    result = computerSelection === "rock" ? "you lose" : "you win";
  }
  if (result === "you win") {
    scoreOne++;
    playerScore.textContent = `Player score: ${scoreOne}`;
  } else if (result === "you lose") {
    scoreTwo++;
    computerScore.textContent = `Computer score: ${scoreTwo}`;
  }

  if (scoreOne === 5) {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
    resetBtn.disabled = false;
    resultDiv.textContent = "Good job you won!!1!";
    resultDiv.style.color = "#25c202";
  } else if (scoreTwo === 5) {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
    resetBtn.disabled = false;
    resultDiv.style.color = "#c40808";
    resultDiv.textContent = "You lost... just uninstall pls";
  }
}

rockBtn.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = getComputerchoice();
  nextRound();
  playerImgDiv.appendChild(rockImg);
  rockImg.classList.add("displayImg");
  rockImg.src = "./pictures/the rock.jpg";
  computerDisplayImg(computerSelection);
  resultDiv.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = getComputerchoice();
  nextRound();
  paperImg.classList.add("displayImg");
  paperImg.src = "./pictures/paper.jpg";
  playerImgDiv.appendChild(paperImg);
  computerDisplayImg(computerSelection);
  resultDiv.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = getComputerchoice();
  nextRound();
  scissorsImg.classList.add("displayImg");
  scissorsImg.src = "./pictures/scissors.jpg";
  playerImgDiv.appendChild(scissorsImg);
  computerDisplayImg(computerSelection);
  resultDiv.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;
  playRound(playerSelection, computerSelection);
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

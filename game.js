const gameChoices = ["rock", "paper", "scissors"];

function getComputerchoice() {
  let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "you lose";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "you won";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "draw";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "draw";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "you lose";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "you won";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "draw";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "you lose";
  } else {
    return "am i a joke to you?";
  }
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;

  for (let i = 0; i < 9; i++) {
    const playerSelection = prompt("enter").toLowerCase();
    const computerSelection = getComputerchoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === "you won") {
      playerScore += 1;
    } else if (result === "you lose") {
      cpuScore += 1;
    } else if (result === "draw") {
      i--;
    } else {
      i--;
      alert(result);
    }

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playerScore);
    console.log(cpuScore);
    if (playerScore === 5) {
      alert("holy moly you won");
      break;
    } else if (cpuScore === 5) {
      alert("better luck next time");
      break;
    }
  }
}
game();
location.reload();

const gameChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;

function getComputerchoice() {
  let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (playerSelection === "rock") {
    return computerSelection === "paper" ? "you lose" : "you win";
  } else if (playerSelection === "paper") {
    return computerSelection === "scissors" ? "you lose" : "you win";
  } else if (playerSelection === "scissors") {
    return computerSelection === "rock" ? "you lose" : "you win";
  } else {
    return "am i a joke to you?";
  }
}

function game() {
  function restart() {
    location.reload();
  }

  for (let i = 0; i < 9; i++) {
    const playerSelection = prompt("enter").toLowerCase();
    const computerSelection = getComputerchoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === "you win") {
      playerScore++;
    } else if (result === "you lose") {
      cpuScore++;
    } else if (result === "draw") {
      i--;
    } else {
      i--;
      alert(result);
    }

    console.log(`You chose ${playerSelection}, cpu chose ${computerSelection}`);
    console.log(playerScore, cpuScore);

    if (playerScore === 5) {
      alert("holy moly you won");
      break;
    } else if (cpuScore === 5) {
      alert("better luck next time");
      break;
    }
  }
  restart();
}
game();

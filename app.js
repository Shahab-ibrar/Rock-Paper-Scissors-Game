const choices = document.querySelectorAll(".images img");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const msg = document.getElementById("msg");

// Scores
let userScore = 0;
let compScore = 0;

// Computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

// Draw game
const drawGame = () => {
  msg.innerText = "It's a Draw!";
  msg.style.backgroundColor = "#555";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Play game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Add click events
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.src.includes("p1")
      ? "rock"
      : choice.src.includes("p2")
      ? "paper"
      : "scissors";

    playGame(userChoice);
  });
});

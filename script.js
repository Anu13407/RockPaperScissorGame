let userScore = 0;
let compScore = 0;

const choices = ["rock", "paper", "scissors"];
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.getElementById("result-text");
const reset_btn = document.getElementById("reset");

document.querySelectorAll(".choice").forEach(btn => {
  btn.addEventListener("click", () => {
    const userChoice = btn.id;
    playGame(userChoice);
  });
});

reset_btn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  updateScores();
  result_p.textContent = "Game reset! Make your move.";
});

function playGame(userChoice) {
  const compChoice = getComputerChoice();
  const outcome = getResult(userChoice, compChoice);

  if (outcome === "win") {
    userScore++;
    result_p.innerHTML = `🎉 You Win! <strong>${userChoice}</strong> beats <strong>${compChoice}</strong>`;
  } else if (outcome === "lose") {
    compScore++;
    result_p.innerHTML = `😞 You Lose! <strong>${compChoice}</strong> beats <strong>${userChoice}</strong>`;
  } else {
    result_p.innerHTML = `😐 It's a Draw! You both chose <strong>${userChoice}</strong>`;
  }

  updateScores();
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return "draw";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScores() {
  userScore_span.textContent = userScore;
  compScore_span.textContent = compScore;
}

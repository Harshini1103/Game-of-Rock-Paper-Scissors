const choices = ["rock", "paper", "scissors"];

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById("player-choice").textContent = `Your Choice: ${playerChoice}`;
    document.getElementById("computer-choice").textContent = `Computer's Choice: ${computerChoice}`;
    document.getElementById("result").textContent = `Result: ${result}`;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}

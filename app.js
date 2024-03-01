const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const userScoreElement = document.getElementById("user");
const compScoreElement = document.getElementById("comp");
const msgElement = document.getElementById("msg");

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You win!";
    } else {
        compScore++;
        return "You lose!";
    } 
}

function updateGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
    msgElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

rockBtn.addEventListener("click", () => updateGame("rock"));
paperBtn.addEventListener("click", () => updateGame("paper"));
scissorsBtn.addEventListener("click", () => updateGame("scissors"));

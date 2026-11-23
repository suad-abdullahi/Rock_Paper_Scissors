// Game choices
const choices = ["Rock", "Paper", "Scissors"];

// Game score
const score = {
    player: 0,
    computer: 0
};

// Game settings
const winningScore = 5;
let gameStarted = false;
let gameOver = false;

// HTML elements
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const choiceButtons = document.querySelectorAll(".choice-btn");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

// Start game
function startGame() {
    score.player = 0;
    score.computer = 0;

    gameStarted = true;
    gameOver = false;

    updateScore();

    playerChoice.textContent = "Your choice: -";
    computerChoice.textContent = "Computer choice: -";
    result.textContent = "Choose your move! 🎮";

    choiceButtons.forEach(button => {
        button.disabled = false;
    });

    startBtn.disabled = true;
    startBtn.textContent = "GAME STARTED";
}

// Play game
function playGame(playerMove) {

    if (!gameStarted || gameOver) return;

    // Computer randomly chooses
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerMove = choices[randomIndex];

    playerChoice.textContent = "Your choice: " + playerMove;
    computerChoice.textContent = "Computer choice: " + computerMove;

    // Decide winner
    if (playerMove === computerMove) {

        result.textContent = "It's a Draw! 🤝";

    } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")
    ) {

        score.player++;
        result.textContent = "You Win This Round! 🎉";

    } else {

        score.computer++;
        result.textContent = "Computer Wins This Round! 🤖";
    }

    updateScore();

    // Check final winner
    if (score.player === winningScore) {

        endGame("🎉 CONGRATULATIONS! YOU WON!");

    } else if (score.computer === winningScore) {

        endGame("🤖 GAME OVER! COMPUTER WON!");
    }
}

// Update scores
function updateScore() {
    playerScore.textContent = score.player;
    computerScore.textContent = score.computer;
}

// End game
function endGame(message) {

    gameOver = true;
    gameStarted = false;

    result.textContent = message;

    choiceButtons.forEach(button => {
        button.disabled = true;
    });

    startBtn.disabled = false;
    startBtn.textContent = "▶ PLAY AGAIN";
}

// Restart game
function restartGame() {

    score.player = 0;
    score.computer = 0;

    gameStarted = false;
    gameOver = false;

    updateScore();

    playerChoice.textContent = "Your choice: -";
    computerChoice.textContent = "Computer choice: -";
    result.textContent = "Press Start to Play!";

    choiceButtons.forEach(button => {
        button.disabled = true;
    });

    startBtn.disabled = false;
    startBtn.textContent = "▶ START GAME";
}

// Button events
startBtn.addEventListener("click", startGame);

restartBtn.addEventListener("click", restartGame);

choiceButtons.forEach(button => {

    button.addEventListener("click", function() {

        const playerMove = this.dataset.choice;

        playGame(playerMove);

    });

});
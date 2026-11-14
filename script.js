
// ARRAY: Store game choices
const choices = ["Rock", "Paper", "Scissors"];

// OBJECT: Store player and computer scores
const score = {
    player: 0,
    computer: 0
};

// FUNCTION: Play the game
function playGame(playerChoice) {

    // Computer randomly chooses
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Display choices
    document.getElementById("playerChoice").textContent =
        "Your choice: " + playerChoice;

    document.getElementById("computerChoice").textContent =
        "Computer choice: " + computerChoice;

    let result = "";

    // IF / ELSE: Decide the winner
    if (playerChoice === computerChoice) {

        result = "It's a Draw! 🤝";

    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "You Win! 🎉";
        score.player++;

    } else {

        result = "Computer Wins! 🤖";
        score.computer++;
    }

    // Display result
    document.getElementById("result").textContent = result;

    // Update scores
    document.getElementById("playerScore").textContent = score.player;
    document.getElementById("computerScore").textContent = score.computer;
}

// FUNCTION: Reset game
function resetGame() {

    score.player = 0;
    score.computer = 0;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    document.getElementById("playerChoice").textContent =
        "Your choice: -";

    document.getElementById("computerChoice").textContent =
        "Computer choice: -";

    document.getElementById("result").textContent = "Let's Play!";
}

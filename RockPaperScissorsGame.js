const resultText = document.getElementById('result-text');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;
let playerWins = 0;  // Track total wins for player
let computerWins = 0;  // Track total wins for computer
const winsNeeded = 2;  // Number of wins needed to win the game

const choices = ['rock', 'paper', 'scissors'];

const updateScores = () => {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
};

const checkWinner = () => {
    if (playerWins === winsNeeded) {
        resultText.textContent = "Congratulations! You win the game!";
    } else if (computerWins === winsNeeded) {
        resultText.textContent = "Oops! Computer wins the game.";
    }
};

const playRound = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
        playerWins++;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
        computerWins++;
    }
    updateScores();
    checkWinner();
};

function getComputerChoice() {
    let random = Math.random();
    if(random > .66) {
        return 'Rock';
    } else if (random > .33) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    playerSelection = String(playerSelection).charAt(0).toUpperCase() + String(playerSelection).substring(1);
    if (playerSelection === computerSelection) {
        result.textContent = "This round is a draw.";
    }
    else if (isWinner(playerSelection, computerSelection)) {
        result.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        playerScore++;
    }
    else {
        result.textContent = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        computerScore++;
    }
    updateScore();
    checkForGameWinner();
}

function checkForGameWinner() {
    if (playerScore >= 5) {
        gameResult.textContent = 'You win the game!';
    } else if (computerScore >= 5) {
        gameResult.textContent = 'You lost the game';
    }
}

function isWinner(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            if (computerSelection === 'Paper')
                return false;
            else
                return true;
        break;

        case 'Paper':
                if (computerSelection === 'Scissors')
                return false;
            else
                return true;
        break;

        case 'Scissors':
                if (computerSelection === 'Rock')
                return false;
            else
                return true;
        break;
    }
}

function updateScore() {
    score.textContent = `${playerScore} - ${computerScore}`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click',
     () => playRound(button.className, getComputerChoice())));

const result = document.querySelector('.roundResult');
const score = document.querySelector('.score');
const gameResult = document.querySelector('.gameResult');

let playerScore = 0;
let computerScore = 0;
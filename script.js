function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors?');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

function getComputerChoice() {
    let random = Math.random();
    if(random > .66) {
        return 'Rock';
    } else if ( random > .33) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    playerSelection = String(playerSelection).charAt(0).toUpperCase() + String(playerSelection).substring(1);
    if (playerSelection === computerSelection)
        return 'This is round is a draw';

    if (isWinner(playerSelection, computerSelection))
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    else
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;  
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
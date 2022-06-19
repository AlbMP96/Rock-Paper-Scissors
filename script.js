// Rock > Scissors > Paper > Rock

// Random computer choice-------------------------------------------------------------------------------------------------
function computerPlay() {
    choiceComp = Math.floor(Math.random() * 3);
    switch (choiceComp) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Button listener to let the player choose--------------------------------------------------------------------------------
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    game(playRound('Rock', computerPlay()));
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    game(playRound('Paper', computerPlay()));
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    game(playRound('Scissors', computerPlay()));
});


// Game logic---------------------------------------------------------------------------------------------------------------
let playRound = (playerSelection, computerSelection) => {
    // playerSelection = playerSelection.toLowerCase();

    // console.log(`player: ${playerSelection}, computer: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        let result = 'Draw';

        roundResult(playerSelection, computerSelection, result);
        return result;
    }

    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || 
        (playerSelection == 'Scissors' && computerSelection == 'Rock') || 
        (playerSelection == 'Paper' && computerSelection == 'Scissors')) {

        let result = 'Computer';

        roundResult(playerSelection, computerSelection, result);
        return result;
    }

    if ((playerSelection == 'Paper' && computerSelection == 'Rock') || 
        (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {

        let result = 'Player';

        roundResult(playerSelection, computerSelection, result);
        return result;
    }
}

// Game result-----------------------------------------------------------------------------------------------------------------------
let playerScore = 0;
let computerScore = 0;
let round = 1;

function game(result) {

    if (playerScore >= 5 || computerScore >= 5) {
        const winner = document.querySelector('.winner');
        winner.textContent = ``;
        playerScore = 0;
        computerScore = 0; 
        round = 1;

        updateScore(playerScore, computerScore, round);
        winner.style.border = 'hidden';
    }

    switch (result) {
        case 'Player':
            playerScore++;
            break;

        case 'Computer':
            computerScore++;
            break;
    }

    updateScore(playerScore, computerScore, round);

    round++;

    checkWin(playerScore, computerScore);
}

// Update score----------------------------------------------------------------------------------------------------------------------
function updateScore(playerScore, computerScore, round) {
    const roundNumber = document.querySelector('.round-number');
    const player = document.querySelector('.player-score');
    const computer = document.querySelector('.computer-score');

    roundNumber.textContent = `Round: ${round}`;
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

// Results from each round-----------------------------------------------------------------------------------------------------------
function roundResult(playerSelection, computerSelection, result) {
    const round = document.querySelector('.round-history');
    const roundResult = document.querySelector('.result');

    round.textContent = `Player play: ${playerSelection}, Computer play: ${computerSelection}`;
    roundResult.textContent = `Round winner: ${result}`;
}

// Check win--------------------------------------------------------------------------------------------------------------------------
function checkWin(playerScore, copmuterScore) {
    if (playerScore == 5 || copmuterScore == 5) {
        const winner = document.querySelector('.winner');
        winner.style.border = 'solid 5px black';
        if (playerScore == 5) {
            winner.textContent = `PLAYER WINS`;
        } else {
            winner.textContent = `COMPUTER WINS`;
        }
    }
}
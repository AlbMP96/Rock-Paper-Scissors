// Rock > Scissors > Paper > Rock

// Random computer choice-------------------------------------------------------------------------------------------------
function computerPlay() {
    choiceComp = Math.floor(Math.random() * 3);
    switch (choiceComp) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Button listener to let the player choose--------------------------------------------------------------------------------
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    game(playRound('rock', computerPlay()));
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    game(playRound('paper', computerPlay()));
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    game(playRound('scissors', computerPlay()));
});


// Game logic---------------------------------------------------------------------------------------------------------------
let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    // console.log(`player: ${playerSelection}, computer: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        let result = 'Draw',
        computerPlay = computerSelection;

        roundResult(playerSelection, computerSelection, result);
        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if ((playerSelection == 'rock' && computerSelection == 'paper') || 
        (playerSelection == 'scissors' && computerSelection == 'rock') || 
        (playerSelection == 'paper' && computerSelection == 'scissors')) {

        let result = 'Player loses',
        computerPlay = computerSelection;

        roundResult(playerSelection, computerSelection, result);
        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if ((playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

        let result = 'Player wins',
        computerPlay = computerSelection;

        roundResult(playerSelection, computerSelection, result);
        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }
}

// Game result-----------------------------------------------------------------------------------------------------------------------
let playerScore = 0;
let computerScore = 0;
let round = 1;

function game(playRound) {

    switch (playRound.result) {
        case 'Player wins':
            playerScore++;
            break;

        case 'Player loses':
            computerScore++;
            break;
    }

    updateScore(playerScore, computerScore, round);

    round++;

    if (playerScore == 5 || computerScore == 5) {
        const finalResult = document.querySelector('.final-score');
        const end = document.createElement('h1');
        if (playerScore == 5) {
            end.textContent = `PLAYER WINS`
        } else {
            end.textContent = `PLAYER LOSES`
        }

        finalResult.appendChild(end);
        updateScore(0, 0, 1);
    }
}

// Update score----------------------------------------------------------------------------------------------------------------------
function updateScore(playerScore, computerScore, round) {
    const roundNumber = document.querySelector('.round-number');
    const player = document.querySelector('.playerScore');
    const computer = document.querySelector('.computerScore');

    roundNumber.textContent = `Round: ${round}`
    player.textContent = `Player: ${playerScore}`
    computer.textContent = `Computer: ${computerScore}`
}

// Results from each round-----------------------------------------------------------------------------------------------------------
function roundResult(playerSelection, computerSelection, result) {
    const round = document.querySelector('.round-history');
    const roundResult = document.querySelector('.result');

    round.textContent = `Player play: ${playerSelection}, Computer play: ${computerSelection}`;
    roundResult.textContent = `${result}`;
}
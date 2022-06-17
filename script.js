// Rock > Scissors > Paper > Rock

// Random computer choice
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

// Button listener to let the player choose
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


// Game logic
let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    console.log(`player: ${playerSelection}, computer: ${computerSelection}`)
    if (playerSelection == computerSelection) {
        let result = 'Draw',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        let result = 'Player loses',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        let result = 'Player wins',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        let result = 'Player wins',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        let result = 'Player loses',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        let result = 'Player loses',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        let result = 'Player wins',
        computerPlay = computerSelection;

        return {
            'result': result,
            'computerPlay': computerPlay
        };
    }
}

// Game result
let playerScore = 0;
let computerScore = 0;
let rounds = 1;

function game(playRound) {

    const results = document.querySelector('.results');
    const result = document.createElement('p');
    result.setAttribute('id', 'result');

    const computerChoice = document.createElement('p');
    computerChoice.setAttribute('id', 'computerChoice');

    const points = document.createElement('p');
    points.setAttribute('id', 'points');

    computerChoice.innerHTML = `Round ${rounds} <br> Computer choice: ${playRound.computerPlay}`;
    results.appendChild(computerChoice);

    switch (playRound.result) {
        case 'Draw':
            result.textContent = 'Draw';
            results.appendChild(result);
            break;

        case 'Player wins':
            result.textContent = 'Player wins';
            results.appendChild(result);
            playerScore++;
            break;

        case 'Player loses':
            result.textContent = 'Player loses';
            results.appendChild(result);
            computerScore++;
            break;
    }

    rounds++;

    points.textContent = `Player: ${playerScore} - Computer ${computerScore}`;
    results.appendChild(points);

    if (playerScore == 5 || computerScore == 5) {
        const finalResult = document.querySelector('.final-result');
        const end = document.createElement('h1');
        if (playerScore == 5) {
            end.textContent = `PLAYER WINS`
        } else {
            end.textContent = `PLAYER LOSES`
        }

        finalResult.appendChild(end);

        playerScore = 0;
        computerScore = 0;
        rounds = 1;
    }
}
// Rock > Scissors > Paper > Rock

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

function playerPlay() {
    const input = prompt('Rock, Paper or Scissors?');
    return input;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    console.log(`player: ${playerSelection}, computer: ${computerSelection}`)
    if (playerSelection == computerSelection) {
        return 'Draw'
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Player loses'
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Player wins'
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Player wins'
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Player loses'
    }

    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Player loses'
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Player wins'
    }

}
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();

        console.log('Round ' + (i + 1));

        let roundPlayed = playRound(playerSelection, computerSelection);
        console.log(roundPlayed);

        if (roundPlayed == 'Player wins') {
            playerScore ++;
        }

        if (roundPlayed == 'Player loses') {
            computerScore ++;
        }

        console.log(`Score: player ${playerScore} - computer ${computerScore}`);
    }
}


game();
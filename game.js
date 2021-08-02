function computerPlay() {
    const guess = ['rock','paper','scissors'];
    let randomGuess = guess[Math.floor(Math.random() * guess.length)];
    return randomGuess;
}

function playRound(playerSelection, computerSelection) {
    let result = 'Play again!';
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

     if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                 playerSelection === 'scissors' && computerSelection === 'rock' || 
                  playerSelection === 'paper' && computerSelection === 'scissors') {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors'||
                 playerSelection === 'scissors' && computerSelection === 'paper' || 
                  playerSelection === 'paper' && computerSelection === 'rock') {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return result;
  }

function game() {
    let playerSelection = '';
    let computerSelection = '';
    let playerScore = 0;
    let computerScore = 0;
    let i = 1;
    let result = '';
    while (i < 4) {
        playerSelection = prompt(`Round #${i} Scissors...Paper..Stone!`);
        computerSelection = computerPlay();
        if (playerSelection && computerSelection) {
            console.log('Player: ', playerSelection, ' Computer: ', computerSelection);
            result = playRound(playerSelection, computerSelection);
            result.includes('Win') ? playerScore++ : computerScore++;
            console.log(result);
        }
        i++;
    }


    if (playerScore > computerScore) {
        console.log(`End Game. You win with a score of ${playerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`End Game. You lost with a score of ${playerScore}.`);
    } else {
        console.log(`End Game. It was a draw!`);
    }
}
  game();
//   const playerSelection = prompt('Scissors...Paper..Stone!');
//   const computerSelection = computerPlay();

//   console.log(playRound(playerSelection, computerSelection));
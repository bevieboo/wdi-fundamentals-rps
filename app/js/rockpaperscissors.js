////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
    if (move == null) {
        move = getInput();
    }
    return move;
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
function getComputerMove(move) {
    if (move == null) {
        move = randomPlay()
    }
    return move;
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
/* YOUR CODE HERE */
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == 'rock' && computerMove == 'scissors') {
        winner = "Player"
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        winner = "Player"
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        winner = "Player"
    } else if (playerMove == computerMove) {
        winner = "Tie"
    } else {
        winner = "Computer"
    }
    return winner;
}

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
/* YOUR CODE HERE */
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        if (getWinner("Player")) {
            playerWins += 1;
        } else if (getWinner("Computer")) {
            computerWins += 1;
        }
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        if (getWinner("Player")) {
            playerWins += 1;
        } else if (getWinner("Computer")) {
            computerWins += 1;
        }
    }
    return [playerWins, computerWins];
}
let playerPoint = 0,
    computerPoint = 0;
let roundCounter = 0;
    
const scoreboard = document.querySelector('.scoreboard');
const selected = scoreboard.firstElementChild;
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

//below codes get random choice for computer
let choices = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
};


function playRound(playerSelection, computerSelection) {
    let error = 'error 🤷‍♂️';
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        let win = 'Yeah! one point for you';
        let draw = 'Draw! Try again';
        let lose = 'Sorry, :-(';

        if (computerSelection == 'rock' && playerSelection == 'paper') {
            playerPoint++;
            return win;
        } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            playerPoint++;
            return win;
        } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            playerPoint++;
            return win;
        } else if (computerSelection == playerSelection) {
            return draw;
        } else {
            computerPoint++;
            return lose
        }
    } else {
        return error;
    }
}


function game(button){
    if (roundCounter < 5) {
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        selected.insertAdjacentHTML('beforeend','<div>'+`player: ${playerSelection} computer:${computerSelection}`+'</div>');
        console.log(playRound(playerSelection,computerSelection));
        score.insertAdjacentHTML('beforeend','<div>'+`your point: ${playerPoint}, your enemy point: ${computerPoint}`+'</div>');
        roundCounter++;
    }
    
    if (roundCounter == 5) {
        if (playerPoint > computerPoint) {
            winner.insertAdjacentHTML('beforeend','<div>'+`Yeah you won!`+'</div>');
        } else if (playerPoint < computerPoint) {
            winner.insertAdjacentHTML('beforeend','<div>'+`You lost`+'</div>');
        } else {
            winner.insertAdjacentHTML('beforeend',`it's a Draw`+'</div>');
        }
        
        // Reset scores and counter for the next game
        playerPoint = 0;
        computerPoint = 0;
        roundCounter = 0;
    }
}


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button);
  });
});

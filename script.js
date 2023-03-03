let playerPoint = 0,
    computerPoint = 0;
    
const scoreboard = document.querySelector('.scoreboard');
const selected = scoreboard.firstElementChild;
const score = document.querySelector('#score');

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
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        selected.insertAdjacentHTML('beforeend','<div>'+`player: ${playerSelection} computer:${computerSelection}`+'</div>');
        console.log(playRound(playerSelection,computerSelection));
        score.insertAdjacentHTML('beforeend','<div>'+`your point: ${playerPoint}, your enemy point: ${computerPoint}`+'</div>');
        }

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
  
        game(button);
  });
});


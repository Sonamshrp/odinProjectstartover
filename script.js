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


<<<<<<< HEAD


=======
>>>>>>> rps-ui
function playRound(playerSelection, computerSelection) {
    let error = 'error 🤷‍♂️';
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        let win = 'Yeah! one point for you';
        let draw = 'Draw! Try again';
        let lose = 'Sorry, :-(';

        if (computerSelection == 'rock' && playerSelection == 'paper') {
            playerPoint++;
<<<<<<< HEAD
            console.log('you played ' + playerSelection, ',computer played ' + computerSelection);
            return win;
        } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            playerPoint++;
            console.log('you played ' + playerSelection, ',computer played ' + computerSelection);
            return win;
        } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            playerPoint++;
            console.log('you played ' + playerSelection, ',computer played ' + computerSelection);
            return win;
        } else if (computerSelection == playerSelection) {
            console.log('you played ' + playerSelection, ',computer played ' + computerSelection);
            return draw;
        } else {
            computerPoint++;
            console.log('you played ' + playerSelection, ',computer played ' + computerSelection);
=======
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
>>>>>>> rps-ui
            return lose
        }
    } else {
        return error;
    }
}


<<<<<<< HEAD

function game() {
    //    for ( let i=0; i<5; i++){
    //        const computerSelection = getComputerChoice();
    //        let playerSelection = prompt("Select your weapon of choice:","choose wisely").toLowerCase(); 

    //        console.log(playerPoint, computerPoint);
    //        console.log(playRound(playerSelection, computerSelection));
    // }

    if (playerPoint >= 3 && computerPoint <= 2) {
        console.log('congratulation you won');
    } else if (playerPoint <= 2 && computerPoint >= 3) {
        console.log('You\'re a FAILURE');
    } else if (playerPoint >= 1 && computerPoint == 0) {
        console.log('congratulation you won');
    } else if (playerPoint == 0 && computerPoint >= 1) {
        console.log('You\'re a FAILURE');
    } else {
        console.log('It\'s a draw ')
    }
}


game();
=======
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
>>>>>>> rps-ui

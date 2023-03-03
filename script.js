let playerPoint = 0,
    computerPoint = 0;

let selections= document.getElementById('')



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
            return lose
        }
    } else {
        return error;
    }
}

 function game(button){
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection,computerSelection));
        console.log(playerPoint, computerPoint);
        }

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
  
        game(button);
  });
});

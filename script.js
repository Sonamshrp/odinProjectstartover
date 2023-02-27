let playerPoint = 0,
    computerPoint = 0;


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

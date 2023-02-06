let playerPoint = 0,
    computerPoint = 0;


//below codes get random choice for computer
let choices = ['rock','paper','scissors'];
let randomNum = function () {
    return Math.floor(Math.random()*(4-1)+1)
}

let randomChoice = randomNum();

let getComputerChoice = () => {
        if (randomChoice == 1 ){
            return choices[0];
        }else if (randomChoice == 2){
            return choices[1];
        }else {
            return choices[2]
        }
}

function playRound (playerSelection, computerSelection){
    let error = 'error 🤷‍♂️';
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let win = 'Yeah! one point for you';
        let draw = 'Draw! Try again';
        let lose = 'Sorry, :-(';
        
        if (computerSelection == 'rock' && playerSelection == 'paper'){
            playerPoint ++;  
            //console.log('you played '+playerSelection, computerSelection);  
            return win;
        }else if (computerSelection == 'paper' && playerSelection == 'scissors'){
            playerPoint ++;
            //console.log('you played '+playerSelection, computerSelection);  
            return win;
        }else if (computerSelection == 'scissors' && playerSelection == 'rock'){
            playerPoint ++;
            //console.log('you played '+playerSelection, computerSelection);  
            return win;
        }else if (computerSelection == playerSelection){
            //console.log('you played '+playerSelection, computerSelection);  
            return draw;
        }else {
            computerPoint++;
            //console.log('you played '+playerSelection, computerSelection);
            return lose
        }
    }else{
        return error;
    }
}

const computerSelection = getComputerChoice();

function game (){
    for ( let i=0; i<5; i++){
        let playerSelection = prompt("Select your weapon of choice:","choose wisely").toLowerCase(); 
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerPoint, computerPoint)
 }

if (playerPoint >= 3 && computerPoint <= 2){
    console.log( 'congratulation you won');
}else if (playerPoint <= 2 && computerPoint >= 3){
    console.log('You\'re a FAILURE'); 
}else if(playerPoint >=1 && computerPoint == 0){
    console.log( 'congratulation you won');
}else if (playerPoint ==0 && computerPoint >= 1){
    console.log('You\'re a FAILURE');
}else{
    console.log('It\'s a draw ')
}
}
game();
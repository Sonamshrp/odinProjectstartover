let choices = ['Rock','Paper','Scissors'];
let randomNum = function () {
    return Math.floor(Math.random()*(4-1)+1)
}
let getComputerChoice=()=>{
        if (randomNum() == 1 ){
            return choices[0];
        }else if (randomNum() == 2){
            return choices[1];
        }else {
            return choices[2]
        }
}

console.log(getComputerChoice());
function getComputerChoice(){
    const choices="Rock,Paper,Scissors";
    const indiechoice = choices.split(",");
    let randChoice = Math.floor(Math.random()*3);
    console.log(indiechoice[randChoice]);
    return indiechoice[randChoice];
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection.toLowerCase()) {
        return "Game Tied!";
    } else {
        if (playerSelection=="rock") {
            if(computerSelection=="Paper")
                return "You Lose! Paper beats Rock";
            else
                return "you won hero";
            
        } else if (playerSelection=="paper") {
            if(computerSelection=="Scissors")
                return "You Lose! Scissor beats Paper";
            else
                return "you won hero";
            
        } else  if (playerSelection=="scissors"){
            if(computerSelection=="Rock")
                return "You Lose! Rock beats Scissors";
            else
                    return "you won hero";
            
        }
    }
}

const playerSelection = prompt("make a choice", "");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
  



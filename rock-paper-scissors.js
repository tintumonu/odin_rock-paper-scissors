function getComputerChoice(){
    const choices="Rock,Paper,Scissors";
    const indiechoice = choices.split(",");
    let randChoice = Math.floor(Math.random()*3);
    console.log(indiechoice[randChoice]);
    return indiechoice[randChoice];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection==computerSelection) {
        return "Game Tied!";
    } else {
        if (playerSelection=="Rock") {
            if(computerSelection=="Paper")
                return "You Lose! Paper beats Rock";
            else
                return "you won hero";
            
        } else if (playerSelection=="Paper") {
            if(computerSelection=="Scissors")
                return "You Lose! Scissor beats Paper";
            else
                return "you won hero";
            
        } else  {
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
  



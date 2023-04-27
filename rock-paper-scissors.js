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
        console.log("Game Tied!");
    } else {
        if (playerSelection=="rock") {
            if(computerSelection=="Paper") {
                console.log("You Lose! Paper beats Rock");
                ++compCount;
            }   else {
                console.log("you won hero");
                ++userCount;
            }
        } else if (playerSelection=="paper") {
            if(computerSelection=="Scissors") {
                console.log("You Lose! Scissor beats Paper");
                ++compCount;
            }   else {
                console.log("you won hero");
                ++userCount;
            }
        } else  if (playerSelection=="scissors"){
            if(computerSelection=="Rock") {
                console.log("You Lose! Rock beats Scissors");
                ++compCount;
            }   else {
                console.log("you won hero");
                ++userCount;
            }
        }
    }
}

function game() {
    
    for(let i = 0; i<5;i++) {
        let playerSelection = prompt("make a choice", "");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if(userCount>compCount) {
        console.log("Final results user won")
    } else if(userCount<compCount) {
        console.log("Final results computer won")
    } else {
        console.log("Series tied")
    }
}
let userCount=0;
let compCount=0;
game();



  



function getComputerChoice(){
    const choices="Rock,Paper,Scissors";
    const indiechoice = choices.split(",");
    let randChoice = Math.floor(Math.random()*3);
    return indiechoice[randChoice];
}
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
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
    const container = document.getElementById("container");
    const btnRock = document.createElement("button");
    btnRock.style.marginLeft = '150px';
    btnRock.textContent = 'Rock';
    const btnPaper = document.createElement("button");
    btnPaper.style.marginLeft = '150px';
    btnPaper.textContent = 'Paper';
    const btnScissors = document.createElement("button");
    btnScissors.style.marginLeft = '150px';
    btnScissors.textContent = 'Scissors';
    container.appendChild(btnRock);
    container.appendChild(btnPaper);
    container.appendChild(btnScissors);

    btnRock.addEventListener('click', function(){playRound(btnRock.textContent, getComputerChoice());});
    btnPaper.addEventListener('click', function(){playRound(btnPaper.textContent, getComputerChoice());});
    btnScissors.addEventListener('click', function(){playRound(btnScissors.textContent, getComputerChoice());});

    
    /*for(let i = 0; i<5;i++) {
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
    }*/
}
let userCount=0;
let compCount=0;
game();



  



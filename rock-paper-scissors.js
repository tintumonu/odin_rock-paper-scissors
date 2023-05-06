
    let userCount=0;
    let compCount=0;
    let informRoundWinner = document.querySelector('#roundWinner');
    const winner = document.querySelector('#winner');
    const container = document.getElementById("container");
    const btnRock = document.createElement("button");
    btnRock.style.marginLeft = '200px';
    btnRock.textContent = 'Rock';
    const btnPaper = document.createElement("button");
    btnPaper.style.marginLeft = '200px';
    btnPaper.textContent = 'Paper';
    const btnScissors = document.createElement("button");
    btnScissors.style.marginLeft = '200px';
    btnScissors.textContent = 'Scissors';
    container.appendChild(btnRock);
    container.appendChild(btnPaper);
    container.appendChild(btnScissors);
    const yourScore = document.createElement("h3");
    yourScore.textContent = 'Your score';
    const computerScore = document.createElement("h3");
    computerScore.textContent = 'Computer score';
    const scoreContainer = document.getElementById("scorecard");
    scoreContainer.appendChild(yourScore);
    scoreContainer.appendChild(computerScore);
    
        btnRock.addEventListener('click', function(){playRound(btnRock.textContent, getComputerChoice())
            yourScore.textContent = `yourscore ${userCount}`;
            computerScore.textContent = `compscore ${compCount}`;
            winnerDisplay();

        });
            
        btnPaper.addEventListener('click', function(){playRound(btnPaper.textContent, getComputerChoice());
            yourScore.textContent = `yourscore ${userCount}`;
            computerScore.textContent = `compscore ${compCount}`;
            winnerDisplay();
            
        });
        btnScissors.addEventListener('click', function(){playRound(btnScissors.textContent, getComputerChoice());
            yourScore.textContent = `yourscore ${userCount}`;
            computerScore.textContent = `compscore ${compCount}`;
            winnerDisplay();
        });
    
    function winnerDisplay(){

        if(userCount==5) {
        winner.textContent='you won';
        
        }

        else if(compCount==5) {
        winner.textContent='you lose and computer won';
        
        }
        else return;
    }    
    
    

    function getComputerChoice(){
        const choices="Rock,Paper,Scissors";
        const indiechoice = choices.split(",");
        let randChoice = Math.floor(Math.random()*3);
        return indiechoice[randChoice];
    }

    function playRound(playerSelection, computerSelection) {
        if((userCount<5)&&(compCount<5)) {
        console.log(playerSelection, computerSelection);
        playerSelection=playerSelection.toLowerCase();
        if (playerSelection==computerSelection.toLowerCase()) {
            informRoundWinner.textContent= "Game Tied!";
        } else {
            if (playerSelection=="rock") {
                if(computerSelection=="Paper") {
                    informRoundWinner.textContent = "You Lose! Paper beats Rock";
                    return ++compCount;
                }   else {
                    informRoundWinner.textContent = "you won hero! Paper beats Rock";
                    return ++userCount;
                }
            } else if (playerSelection=="paper") {
                if(computerSelection=="Scissors") {
                    informRoundWinner.textContent = "You Lose! Scissors beats Paper";
                    return ++compCount;
                }   else {
                    informRoundWinner.textContent = "you won hero! Scissors beats Paper";
                    return ++userCount;
                }
            } else  if (playerSelection=="scissors"){
                if(computerSelection=="Rock") {
                    informRoundWinner.textContent = "You Lose! Rock beats Scissors";
                    return ++compCount;
                }   else {
                    informRoundWinner.textContent = "you won hero! Rock beats Scissors";
                    return ++userCount;
                }
            }
        }
    }

    
        
    
}
    



    

        
    
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

  





function getComputerChoice(){
    const choices =["rock", "paper", "scissors"]; //put the choices into an array
    let computerInput = choices[Math.floor(Math.random()*choices.length)]; //randomize ai choice through the
    return computerInput;
} 


function getPlayerChoice(){
    let playerInput = prompt("Rock,Paper or Scissors:")
    if (playerInput.toLowerCase() == "rock" || playerInput.toLowerCase() == "paper" || playerInput.toLowerCase() == "scissors") {
        return playerInput;
      } else {
        alert("Invalid choice, please choose \"rock\", \"paper\", or \"scissors\"");
      }

}

function playRound(playerSelection, computerSelection) {
    playerSelection =  getPlayerChoice();
    console.log("You played " + playerSelection.toLowerCase() +".");
    computerSelection = getComputerChoice();
    console.log("Computer played " + computerSelection.toLowerCase() +".");

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        roundWinner = "It's a tie!";
      } // tie situation 

    else if  ( 
        (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" ) || 
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ) ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock" ) 
        ) {
        roundWinner = "You lose! Boo";
    } // loss situation 
    else if ( 
        (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" ) ||
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ) ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" )
    ){
        roundWinner = "You won! Hooray";
    } // win situation
    return roundWinner;
  }
  function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    
    for (let i = 0; i < 5; i++) {
        playRound()
        if ( roundWinner == "You won! Hooray" )
        {
            playerPoints++;
        }
        else if ( roundWinner == "You lose! Boo" )
        {
            computerPoints++;
        }
        else if (roundWinner == "It's a tie!") {
            console.log("Nothing changes!");
        }

    }
    if (playerPoints == computerPoints) {
        console.log("The game results in a tie.");
    }
    else if (playerPoints > computerPoints) {
        console.log("Wow, you actually won the game!") 
    }
    else if (playerPoints < computerPoints) {
        console.log("Damn, what a noob... You lost.");
    }
    console.log("Your points: "+ playerPoints +" vs Computer's points:" + computerPoints);
  }
 
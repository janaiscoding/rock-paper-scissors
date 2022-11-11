// what we use is
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".button");
const comp = document.querySelector(".computer-score");

// randomize and select AI choice
  function getComputerChoice(){
  const choices =["rock", "paper", "scissors"]; 
  let computerInput = choices[Math.floor(Math.random()*choices.length)]; 
  return computerInput;
} 

buttons.forEach((button) => {
  button.addEventListener('click',()=>{
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if ( playerScore === 5 || computerScore === 5) {
      finalWinner();
    }
  })
})

// on each press, get player selection and computer selection
function playRound(playerSelection, computerSelection) {
  const para = document.querySelector('.winner-text');
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    para.textContent = "It's a tie";
    } // tie situation 

  else if  ( 
      (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" ) || 
      (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ) ||
      (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock" ) 
      ) {
        para.textContent = "You lost";
      computerScore = computerScore++;
  } // loss situation 
  else if ( 
      (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" ) ||
      (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ) ||
      (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" )
  ){
    para.textContent = "You won";
      playerScore = ++playerScore;
  } // win situation
 }
 function finalWinner(){
    if (computerScore === 5){

    }
}

// what we use is:

let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".button");
const para = document.querySelector('.winner-text');
const infoPlayer = document.querySelector('.player-selection');
const infoComputer = document.querySelector('.computer-selection');

// randomize and select AI choice
  function getComputerChoice(){
  const choices =["rock", "paper", "scissors"]; 
  let computerInput = choices[Math.floor(Math.random()*choices.length)]; 
  return computerInput;
} 
// player choices --- painchamp.
buttons.forEach((button) => {
  button.addEventListener('click',()=>{
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playGame();
    infoPlayer.textContent = `You played ${playerSelection}`;
    infoComputer.textContent = `Computer played ${computerSelection}`;
  });
});

// on each press, get player selection and computer selection
function playRound(playerSelection, computerSelection) {
    // tie situation
  if (playerSelection == computerSelection) {
    para.textContent = "It's a tie";
    }  
    // loss situation 
  else if( 
      (playerSelection == "rock" && computerSelection == "paper" ) || 
      (playerSelection == "paper" && computerSelection == "scissors" ) ||
      (playerSelection == "scissors" && computerSelection == "rock" ) 
      ) {     
      para.textContent = "You lost";
      computerScore++;
      keepComputerScore();
  } 
    // win situation
  else if ( 
      (playerSelection == "rock" && computerSelection == "scissors" ) ||
      (playerSelection == "paper" && computerSelection == "rock" ) ||
      (playerSelection == "scissors" && computerSelection == "paper" )
  ){
      para.textContent = "You won";
      playerScore++;
      keepPlayerScore();   
  } 
  
 }

 //full game on each click, play round til bo5 is decided.
function playGame(){
  playRound(playerSelection, computerSelection)
  if(playerScore == 5){
    para.textContent = `You won, final score ${playerScore} - ${computerScore}`;
    resetGame();
  }
  else if (computerScore == 5 ) {
    para.textContent = `Computer won, final score: ${computerScore} - ${playerScore}`;
    resetGame();
  }
}
// never ending best of 5 RPS game, no questions asked.
function resetGame(){
  playerScore = 0; 
  computerScore = 0; 
  keepPlayerScore();
  keepComputerScore();
}


function keepPlayerScore() {
  const playerCounter = document.querySelector(".player-score");
  playerCounter.textContent = playerScore;
}

function keepComputerScore() {
  const computerCounter = document.querySelector(".computer-score");
  computerCounter.textContent = computerScore;
}


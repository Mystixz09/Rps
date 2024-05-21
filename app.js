const choicesArr = ["rock","paper","scissor"];
const choiceMap ={
    'rock' :'✊',
    'paper' :'✋',
    'scissor' :'✌'
}

let playerScore = 0;
let compScore = 0;

let winMsg;

let results = document.querySelectorAll('.choice');
let score = document.querySelectorAll('.score');
let winnMsg = document.querySelector(".sub");

let buttons = document.querySelectorAll('.button');
let restartWindow = document.querySelector('.final-score-parent');
let restartButton = document.querySelector('.playAgain');
let whoWon = document.querySelector('.who-won');

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        PlayRound(button.name , getComputerChoice());
        if(isGameOver()){
            (compScore>playerScore)? whoWon.textContent = "You Lost...":whoWon.textContent = "You Won!!";
            restartWindow.classList.toggle("visibility");
        }
    });
});
restartButton.addEventListener("click", () =>{
    compScore = 0;
    playerScore = 0;
    results[0].textContent = '❔';
    results[1].textContent = '❔';
    score[0].textContent = `Score`;
    score[1].textContent = `Score`;
    winnMsg.textContent = "Win 5 games to win the round";
    restartWindow.classList.toggle("visibility");
    
});


function getComputerChoice(){
    return choicesArr[Math.floor(Math.random()*3)];
}

function isGameOver(){
    return playerScore === 5 || compScore === 5;
}

function PlayRound(playerChoice,computerChoice){
    if (playerChoice === computerChoice){
        winMsg = 'Draw';
    }
    else if(playerChoice === "rock"){
        if(computerChoice == "paper"){
            winMsg = "Paper beats Rock";
            compScore++;
        }
        else{
            winMsg = 'Rock beats Scissor';
            playerScore++;
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            winMsg = "Paper beats Rock";
            playerScore++;
        }
        else{
            winMsg = "Scissor beats Paper";
            compScore++;
        }
    }
    else {
        if(computerChoice === "rock"){
            winMsg = "Rock beats scissor";
            compScore++;
        }else{
            winMsg = "Scissor beats Paper";
            playerScore++;
        }
    }
    results[0].textContent = choiceMap[playerChoice];
    results[1].textContent = choiceMap[computerChoice];
    score[0].textContent = `Score: ${playerScore}`;
    score[1].textContent = `Score: ${compScore}`;
    winnMsg.textContent = winMsg;
}

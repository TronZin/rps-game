/*
function game
    for each game
        ask user for choice rps
        ask again if invalid

        generate computer choice rps

        compare two choices
            convert choices two numbers
            determine if you won
            determine if pc wins
            determine if tie

        give point to winner
    
    declare winner based on points

while Run game
    run function game

    ask if new round
*/


/*
startgame

        do 5 times()
            change logs 
            ask for option

            make calculations
            show log with winner

        show final dom asking to start game again
        

    
 */
let numberOfRound = 1;

let playerScore = 0;
let pcScore = 0;


window.addEventListener("keydown", askChoice, {once:true});

const playerDisplay = document.querySelector(".playerDisplay");
const pcDisplay = document.querySelector('.pcDisplay img'); //we will only change the pcs image

const playerLog = document.querySelector(".playerLog");
const pcLog = document.querySelector(".pcLog");

const footer = document.querySelector(".footer");

function askChoice(e) {
    console.log(e.keyCode);
    if (e.keyCode !== 32) return;

    const rpsButtons = `<div class="options">
                        <button class="option rock">Rock</button>
                        <button class="option paper">Paper</button>
                        <button class="option scissors">Scissors</button>    
                        </div>                    
                       `;
    playerDisplay.innerHTML = rpsButtons;
    const buttons = document.querySelectorAll(".option");

    
    footer.textContent = `Round ${numberOfRound}`;
    pcDisplay.src="images/pcThinking.png"

    playerLog.textContent = playerScore;
    playerLog.style.color = 'white';
    playerLog.style.borderColor = 'white';

    pcLog.textContent = pcScore;
    pcLog.style.color = "white";
    pcLog.style.borderColor = "white";

    

    if (numberOfRound === 5) {
        buttons.forEach(button => button.addEventListener("click", showWinner));
    }
    else {
        buttons.forEach(button => button.addEventListener("click", showResults));
    }   

}

function showResults(e) {
    playerChoice = e.target.textContent.toLowerCase(); //determineWinner function need lowercase params
    pcChoice = determinePcChoice();

    let playerColor;
    let playerImg;
    
    let pcColor;
    let pcImg;

    let resultTxt;

    switch (determineWinner(playerChoice,pcChoice)) {
        case "tie":
            playerColor = "white";
            playerImg = "images/playerTie.png";

            pcColor = "white";
            pcImg = "images/pcTie.png";

            resultTxt = "It's a Tie";
            break;
            
        case "userWins":
            playerColor = "lime";
            playerImg = "images/playerWinning.png";

            pcColor = "red";
            pcImg = "images/pcLosing.png";

            resultTxt = "Point for Player";

            playerScore++;
            break;

        case "pcWins":
            playerColor = "red";
            playerImg = "images/playerLosing.png";

            pcColor = "lime";
            pcImg = "images/pcWinning.png";

            resultTxt = "Point for Pc";

            pcScore++;
            break;

    }

    playerDisplay.innerHTML = `<img src="${playerImg}"></img>`;
    playerLog.textContent = playerChoice;
    playerLog.style.color = playerColor;
    playerLog.style.borderColor = playerColor;

    pcDisplay.src = pcImg;
    pcLog.textContent = pcChoice;
    pcLog.style.color = pcColor;
    pcLog.style.borderColor = pcColor;

    footer.textContent = resultTxt;
    
    window.addEventListener("keydown", askChoice, {once:true});
    numberOfRound++;

}

function determineWinner(user,pc) {
    let winCase1 = (user === "rock" && pc === "scissors");
    let winCase2 = (user === "paper" && pc === "rock");
    let winCase3 = (user === "scissors" && pc === "paper");

    if (user === pc) {
        return "tie";
    }
    else if (winCase1 || winCase2 || winCase3) {
        playerScore++;
        return "userWins";
    }
    else {
        pcScore++;
        return "pcWins";
    }    
}

function showWinner(e) {
    let playerColor;
    let playerImg;
    let playerResult;
    
    let pcColor;
    let pcImg;
    let pcResult;

    let resultTxt;
    
    if (playerScore === pcScore) {

        playerColor = "white";
        playerImg = "images/playerTie.png";
        playerResult = "Tie";

        pcColor = "white";
        pcImg = "images/pcTie.png";
        pcResult = "Tie";

        resultTxt = "Game ends in a Tie!";
    }
    else if (playerScore > pcScore) {

        playerColor = "lime";
        playerImg = "images/playerWinning.png";
        playerResult = "Winner";

        pcColor = "red";
        pcImg = "images/pcLosing.png";
        pcResult = "Loser";

        resultResult = "Player Wins!,";
    }
    else {
        playerColor = "red";
        playerImg = "images/playerLosing.png";
        playerResult = "Loser";

        pcColor = "lime";
        pcImg = "images/pcWinning.png";
        pcResult = "Winner";

        resultTxt = "Pc Wins!";
    }

    playerDisplay.innerHTML = `<img src="${playerImg}"></img>`;
    playerLog.textContent = playerResult;
    playerLog.style.color = playerColor;
    playerLog.style.borderColor = playerColor;

    pcDisplay.src = pcImg;
    pcLog.textContent = pcResult;
    pcLog.style.color = pcColor;
    pcLog.style.borderColor = pcColor;

    footer.textContent = `${resultTxt}, Press SPACE for new round`;

    window.addEventListener("keydown", askChoice, {once:true});

    numberOfRound = 1;

    playerScore = 0;
    pcScore = 0;
}

function determinePcChoice() {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0) ;

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


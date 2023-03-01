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
console.log("Let's play rock, paper and scissors!!");
let MainLoopActive = true;
while (MainLoopActive) {
    game();
    console.log("ROUND FINISHED");
    let NewGameRequested = confirm("Wanna play again?");

    if (!NewGameRequested) {
        console.log("Thanks for playing :D");
        MainLoopActive = false;
    }
}



function game() {
    console.log("Starting Round");
    let myScore = 0;
    let pcScore = 0;


    for (let i = 1; i<=5; i++) {

        console.log(`Round ${i}`);

        let userChoice = determineUserChoice();
        if (userChoice === null) {return;}

        let pcChoice = determinePcChoice();

        console.log(`Your choice: ${userChoice}`);
        console.log(`Pc's choice: ${pcChoice}`);

        let winCase1 = (userChoice === "rock" && pcChoice === "scissors");
        let winCase2 = (userChoice === "paper" && pcChoice === "rock");
        let winCase3 = (userChoice === "scissors" && pcChoice === "paper");

        if (userChoice === pcChoice) {
            console.log("TIE");
        }
        else if (winCase1 || winCase2 || winCase3) {
            console.log("POINT GOES TO USER");
            myScore++;
        }
        else {
            console.log("POINT GOES TO PC");
            pcScore++;
        }
        console.log(`You: ${myScore} | Pc: ${pcScore}`)
    }

    console.log("GAME HAS ENDED");

    if (myScore === pcScore) {
        console.log("It's a tie!!!!");
    }
    else if (myScore > pcScore) {
        console.log("You win!!!");
    }
    else {
        console.log("Computer wins B)");
    }
}



function determineUserChoice() {
    while (true) {
        let choice = prompt("Choose between rock,paper or scissors!");
        if (choice === null) {return null;} 
        else {choice = choice.toLowerCase();}

        switch (choice) {
            case "rock":
            case "paper":
            case "scissors":
                return choice;
            default:
                console.log("That's not a valid choice! Try again");
        }
    } 
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



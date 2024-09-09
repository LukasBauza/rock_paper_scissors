let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if(number == 0) {
        return "rock";
    } else if(number == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors");

    while((choice != "rock") && (choice != "paper") && (choice != "scissors")) {
        choice = prompt("Please choose rock, paper, or scissors");
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    let humanWin = "Human wins round!";
    let computerWin = "Computer wins round!";

    switch(humanChoice) {
        case "rock":
            if(computerChoice == "rock") {
                console.log("draw");
            } else if(computerChoice == "paper") {
                console.log(computerWin);
                computerScore++;
            } else if(computerChoice == "scissors") {
                console.log(humanWin);
                humanScore++;
            }
            break;

        case "paper":
            if(computerChoice == "rock") {
                console.log(humanWin);
                humanScore++;
            } else if(computerChoice == "paper") {
                console.log("draw");
            } else if(computerChoice == "scissors") {
                console.log(computerWin);
                computerScore++;
            }
            break;

        case "scissors":
            if(computerChoice == "rock") {
                console.log(computerWin);
                computerScore++;
            } else if(computerChoice == "paper") {
                console.log(humanWin);
                humanScore++;
            } else if(computerChoice == "scissors") {
                console.log("draw");
            }
            break;
    }
}

function playGame() {
    while((gameCount < 5) && ((computerScore < 3) || (humanScore < 3))) {
        playRound(getHumanChoice(), getComputerChoice());
        gameCount++;
    }

    if(computerScore == 3) {
        console.log("Computer wins the game!");
    } else if (humanScore == 3) {
        console.log("Human wins the game!");
    } else if (gameCount == 5) {
        console.log("The game is a draw!");
    }
}

playGame();

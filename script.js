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
            } else if(computerChoice == "paper") {
                computerScore++;
            } else if(computerChoice == "scissors") {
                humanScore++;
            }
            break;

        case "paper":
            if(computerChoice == "rock") {
                humanScore++;
            } else if(computerChoice == "paper") {
            } else if(computerChoice == "scissors") {
                computerScore++;
            }
            break;

        case "scissors":
            if(computerChoice == "rock") {
                computerScore++;
            } else if(computerChoice == "paper") {
                humanScore++;
            } else if(computerChoice == "scissors") {
            }
            break;
    }

    var human_score_div = document.querySelector("#human_score")
    human_score_div.innerText = "Human Score: " + humanScore

    var computer_score_div = document.querySelector("#computer_score")
    computer_score_div.innerText = "Computer Score: " + computerScore
}

function checkWinner() {
    var result_p = document.querySelector("#result")
    if(computerScore == 5) {
        result_p.innerText = "Computer wins the game!";
        humanScore = 0
        computerScore = 0
    } else if (humanScore == 5) {
        result_p.innerText = "Human wins the game!";
        humanScore = 0
        computerScore = 0
    } else if (gameCount == 11) {
        result_p.innerText = "The game is a draw!";
        humanScore = 0
        computerScore = 0
    }
}

function playGame() {
    var rock_button = document.querySelector("#rock_button")
    var paper_button = document.querySelector("#paper_button")
    var scissors_button = document.querySelector("#scissors_button")

    rock_button.addEventListener("click", function() {
        playRound("rock", getComputerChoice())
        checkWinner()
    });
    paper_button.addEventListener("click", function() {
        playRound("paper", getComputerChoice())
        checkWinner()
    });
    scissors_button.addEventListener("click", function() {
        playRound("scissors", getComputerChoice())
        checkWinner()
    });

}

playGame();

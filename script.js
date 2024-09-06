function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if(number == 0) {
        return "Rock";
    } else if(number == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors").toLowerCase();

    while((choice != "rock") && (choice != "paper") && (choice != "scissors")) {
        choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
    }

    return choice;
}

console.log(getHumanChoice());

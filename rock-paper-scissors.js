 // function to get a random choice from computer
function getComputerChoice() {
    let comp = 3*Math.random();
    if (0 <= comp && comp < 1) {
        return "rock";
    } else if (1 <= comp && comp < 2) {
        return "paper";
    } else if (2 <= comp && comp < 3) {
        return "scissors";
    }
}

//function to get choice from human
function getHumanChoice() {
    let human = prompt("Rock, paper, scissors!");
    if (human == "rock") {
        return "rock";
    } else if (human == "paper") {
        return "paper";
    } else if (human == "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

//setting logic for the game
function playRound(humanChoice, computerChoice) {
    let choice1 = humanChoice.toLowerCase().trim();
    if (choice1 == computerChoice) {
        console.log("It's a draw! You both had " + computerChoice + "."); //no addition to score when drawn
    } else if ((choice1 == "paper" && computerChoice == "rock")
        || (choice1 == "scissors" && computerChoice == "paper")
        || (choice1 == "rock" && computerChoice == "scissors")) {
        console.log("You win! Computer had " + computerChoice + "!");
        humanScore += 1; //adds 1 point to humanScore when human wins
    } else if ((choice1 == "rock" && computerChoice == "paper")
        || (choice1 == "paper" && computerChoice == "scissors")
        || (choice1 == "scissors" && computerChoice == "rock")) {
        console.log("Computer wins! You had " + choice1 + " but computer had " + computerChoice + ".");
        computerScore += 1; //adds 1 point to computerScore when computer wins
    }
}

//setting number of games played to win
function playGame(numRounds) {
    for (let i = 1; i <= numRounds; i++) {
        const humanPick = getHumanChoice();
        const computerPick = getComputerChoice();

        playRound(humanPick, computerPick);
        console.log("The current score is " + humanScore + ":" + computerScore);
    }
    if (humanScore == computerScore) {
        console.log("Draw! Try again next time!");
    } else if (humanScore > computerScore) {
        console.log("You have won the " + numRounds + " against the computer!");
    } else if (humanScore < computerScore) {
        console.log("Computer has won. Better luck next time!");
    }
}

playGame(5);
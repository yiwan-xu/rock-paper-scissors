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
        console.log("It's a draw!"); //no addition to score when drawn
    } else if ((choice1 == "paper" && computerChoice == "rock")
        || (choice1 == "scissors" && computerChoice == "paper")
        || (choice1 == "rock" && computerChoice == "scissors")) {
        console.log("You win! Computer had " + computerChoice + "!");
        humanScore += 1; //adds 1 point to humanScore when human wins
    } else if ((choice1 == "rock" && computerChoice == "paper")
        || (choice1 == "paper" && computerChoice == "scissors")
        || (choice1 == "scissors" && computerChoice == "rock")) {
        console.log("Computer wins! You had " + choice1 + " but computer had " + computerChoice);
        computerScore += 1; //adds 1 point to computerScore when computer wins
    }
}

//
function playGame() {
    const humanPick = getHumanChoice();
    const computerPick = getComputerChoice();

    playRound(humanPick, computerPick);
}
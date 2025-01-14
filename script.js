console.log("Hello Serna");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//console.log(getComputerChoice());

function getHumanChoice() {

    let userInput = prompt("What is your choice? Rock, Paper or Scissors?");

    if (choices.includes(userInput.toLowerCase())) {
        let userChoice = userInput.toLowerCase();
        return userChoice;
    }
    else {
        alert("Enter a valid input!!");
    }
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;

    }
    else if (humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
    else {
        console.log("It's a tie!");
    }

    console.log(`Human Score : ${humanScore}`)
    console.log(`Computer Score : ${computerScore}`)

}

let rounds = 0;

function playGame() {

    for (rounds; rounds < 5; rounds++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();

        playRound(human, computer);
    }

    if (humanScore > computerScore) {
        alert("Human Player Won!! Congrats🥳️🥳️🥳️")
    }
    else if (humanScore === computerScore) {
        alert("It's a tie!! Play again?")
    }
    else {
        alert("You lost! Try again?🙁")
    }


}

playGame();
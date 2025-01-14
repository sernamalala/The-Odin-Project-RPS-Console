const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// console.log("Computer choice: ", getComputerChoice());

let divPlay = document.getElementById("plays");
let rockButton = divPlay.querySelector("#rock");
let paperButton = divPlay.querySelector("#paper");
let scissorsButton = divPlay.querySelector("#scissors");

let outcomeDiv = document.getElementById("outcome");
let h2 = document.createElement("h2");
h2.textContent = "Start the game by clicking on your choice, let's gooo!!"
h2.style.color = "red";
outcomeDiv.appendChild(h2);
let choice;


rockButton.addEventListener("click", function () {
    choice = choices[0];
    playGame()

})

paperButton.addEventListener("click", function () {
    choice = choices[1]
    playGame()

})

scissorsButton.addEventListener("click", function () {
    choice = choices[2]
    playGame()

})
function getHumanChoice() {

    return choice;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    outcomeDiv.innerHTML = "";


    h2.textContent = "Rock, Paper & Scissors";

    let humanScoreText = document.createElement("h3");
    let computerScoreText = document.createElement("h3");
    let updatedStatus = document.createElement("p");



    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {

        updatedStatus.textContent = (`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;

    }
    else if (humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors") {
        updatedStatus.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
    else {
        updatedStatus.textContent = ("It's a tie!");
    }

    console.log("Human score", humanChoice)
    console.log("Computer score", computerChoice)
    outcomeDiv.appendChild(h2);
    outcomeDiv.appendChild(humanScoreText);
    outcomeDiv.appendChild(computerScoreText);
    outcomeDiv.appendChild(updatedStatus);
    humanScoreText.textContent = (`Human Score : ${humanScore}`)
    computerScoreText.textContent = (`Computer Score : ${computerScore}`)


}
let rounds = 0;
let maxScore = 5;
function playGame() {


    let human = getHumanChoice();
    let computer = getComputerChoice();

    playRound(human, computer);


    if (humanScore === maxScore && humanScore > computerScore) {
        alert("Human Player Won!! Congrats🥳️🥳️🥳️")
        resetGame()
    }
    else if (computerScore === maxScore && computerScore > humanScore) {
        alert("You lost! Try again?🙁")
        resetGame();
    }


}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    outcomeDiv.innerHTML = "";
    h2.textContent = "Start the game by clicking on your choice, let's gooo!!"
    h2.style.color = "red";
    outcomeDiv.appendChild(h2);
}
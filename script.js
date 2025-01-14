console.log("Hello Serna");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(getComputerChoice());
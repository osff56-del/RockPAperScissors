let humanScore = 0
let computerScore = 0
let humanchoice


function getComputerChoice(){
    let number= Math.floor(Math.random() * 3)
    if(number == 0) {
        return "rock"
    }
    else if(number == 1) {
        return "paper"
    }

    else{
        return "scissors"
    }
}

function getHumanChoice(){
   let human = humanchoice
    return human
}

function playRound(humanSelection, computerSelection){
    const humanchoice = humanSelection.toLowerCase()
    if (computerSelection == "paper" && humanchoice == "rock" || computerSelection == "scissors" && humanchoice == "paper" || computerSelection == "rock" && humanchoice == "scissors"){
        console.log("You lost!")
        computerScore++
    }
    else{
        console.log("You won!")
        humanScore++
    }

}

function playGame(){
    for (let i = 1; i <=5; i++) {
        playRound(humanchoice, getComputerChoice())
    }
    if (computerScore > humanScore){
        return("You lost!")
    }
    else{
        return("You won the game!")
    }
}
console.log(humanchoice)
console.log(playGame())

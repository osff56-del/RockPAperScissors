let humanScore = 0
let computerScore = 0
let humanchoice
let roundCounter = 0


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
    console.log(roundCounter)
    let roundplayed = false
    const humanchoice = humanSelection.toLowerCase()
    if (computerSelection == "paper" && humanchoice == "rock" || computerSelection == "scissors" && humanchoice == "paper" || computerSelection == "rock" && humanchoice == "scissors"){
        console.log("You lost!")
        computerScore++
        roundplayed = true
    }
    
    else if(computerSelection == "paper" && humanchoice == "scissors" || computerSelection == "scissors" && humanchoice == "rock" || computerSelection == "rock" && humanchoice == "paper"){
        console.log("You won!")
        humanScore++
        roundplayed = true
    }
    
    else{
        console.log("Its a tie!")
    }
    if (roundplayed){
        roundCounter++
        if (roundCounter >= 5)
            if (humanScore > computerScore){
               console.log("You win!")
            }
            else{
               console.log("You lose :(")
            }}
    }




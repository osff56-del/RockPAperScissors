let humanScore = 0
let computerScore = 0
let humanchoice
let roundCounter = 0
const computerscore = document.querySelector(".cscore")
const humanscore = document.querySelector(".hscore")
const log = document.querySelector(".logtextcontainer")


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
        log.innerHTML = "<p class='message'>You lost!</p>"
        computerScore++
        roundplayed = true
    }
    
    else if(computerSelection == "paper" && humanchoice == "scissors" || computerSelection == "scissors" && humanchoice == "rock" || computerSelection == "rock" && humanchoice == "paper"){
        log.innerHTML = "<p class='message'>You Won!</p>"
        humanScore++
        roundplayed = true
    }

    
    else{
        log.innerHTML = "<p class='message'>its a tie</p>"
    }
    
   computerscore.textContent = computerScore;
    humanscore.textContent = humanScore;  
    
    if (roundplayed){
        roundCounter++
        if (roundCounter >= 5)
            if (humanScore > computerScore){
               alert("You win!")
            }
            else{
               alert("You lose :(")
            }}

    
        
    }




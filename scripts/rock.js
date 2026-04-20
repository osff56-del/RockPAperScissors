const rockbtn = document.querySelector(".btn.rock");
rockbtn.addEventListener("click", () => {
     humanchoice = "rock";
     playRound("rock", getComputerChoice())
     
})
const paperbtn = document.querySelector(".btn.paper");
paperbtn.addEventListener("click", () => {
     humanchoice = "paper";
     console.log("paper!")
     playRound("paper", getComputerChoice())
     
})
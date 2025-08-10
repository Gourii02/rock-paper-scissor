function getComputerChoice()
{
    let r=Math.floor(Math.random()*3)
    if(r==0)
        return "rock"
    else if(r==1)
        return "paper"
    else
        return "scissor"
}


let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if (humanScore >= 5 || computerScore >= 5) {
        return; 
    }
     if(humanChoice=="rock"&&computerChoice=="scissor")
     {
        humanScore++;
     }
     else if(humanChoice=="scissor"&&computerChoice=="rock")
     {
        computerScore++;
     }  
     else if(humanChoice=="rock"&&computerChoice=="paper")
     {
        computerScore++;

     }  
     else if(humanChoice=="paper"&&computerChoice=="rock")
     {
        humanScore++;
     }  
     else if(humanChoice=="scissor"&&computerChoice=="paper")
     {
        humanScore++;
     }  
     else if(humanChoice=="paper"&&computerChoice=="scissor")
     {
        computerScore++;
    }
    
        choice.textContent =`Your choice: ${humanChoice} | Computer choice: ${computerChoice}`;
        score.textContent=`Your score: ${humanScore} - Computer score: ${computerScore}`;

      if (computerScore === 5 && humanScore === 5) {
        stres.textContent = "It's a tie!";
    } else if (computerScore === 5) {
        stres.textContent = "You lose!";
    } else if (humanScore === 5) {
        stres.textContent = "You win!";
    }
   
}
 

    const rockbtn=document.getElementById("rock");
    const paperbtn= document.getElementById("paper");
    const scissorbtn=document.getElementById("scissor");
     

    const stres= document.getElementById("stres");
    const choice= document.getElementById("choice");
    const score=document.getElementById("score");
    const res= document.getElementById("res");

    rockbtn.addEventListener("click",()=>{
        playRound("rock",getComputerChoice());
    });

    paperbtn.addEventListener("click",()=>{
        playRound("paper",getComputerChoice());
    });

    scissorbtn.addEventListener("click",()=>{
        playRound("scissor",getComputerChoice());
    });




    

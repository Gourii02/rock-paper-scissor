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


function getHumanChoice()
{
    let ch=prompt("Enter your choice: Rock,paper,scissors");
    return ch.toLowerCase();
}


let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    
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
    
        console.log(`Your score:${humanScore}`);
        console.log(`Computer's score:${computerScore}`);
   
}
 


function playGame(){
    for(let i=0;i<5;i++)
    {
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        
        console.log(`Computer choice: ${computerChoice}`);
        console.log(`User choice: ${humanChoice}`);

        playRound(humanChoice,computerChoice);
    }
}
playGame();

if (computerScore>humanScore)
        console.log("You loose!");
    else if (computerScore==humanScore)
        console.log("It's a tie");
    else
        console.log("You win!");

/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.*/

  //P - "scissors", "rock", "paper" strings 
  //R - "Player 1 won!", "Player 2 won!", "Draw!"
  //E - 
  //P - draw is when p1 === p2, p1 win is when p1:s p2:r, p1:r p2:s, p1:p p2:r; 


const rps = (p1, p2) => {
    if (p1 === p2){
      return "Draw!"
    }else if((p1 === "scissors" && p2 === "paper" )||(p1 === "rock" && p2 === "scissors")||(p1 === "paper" && p2 === "rock")){
      return "Player 1 won!"
    }else {
      return "Player 2 won!"
    }
  }
  
  

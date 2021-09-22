var botOptions=["R","P","S"];
var stillPlaying="Y";
var botChoice = botOptions[Math.floor(Math.random()*botOptions.length)]
var userChoice;
var win = 0
var lose = 0
var draw = 0
console.log(botChoice);
while(stillPlaying=="Y"){
  var botChoice = botOptions[Math.floor(Math.random()*botOptions.length)];
  console.log(botChoice);
  var newChoice =prompt("Rock, paper or scissors (use R P or S)");
  userChoice=newChoice.toUpperCase();
  if(botChoice==userChoice){
    draw++; 
    var playAgain=prompt("Draw! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
  }
  else if(botChoice=='P' && userChoice=='R'){
    lose++;
    var playAgain=prompt("Loss! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
  }
  else if(botChoice=='S' && userChoice=='P'){
    lose++;
    var playAgain=prompt("Loss! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
  }
  else if(botChoice=='R' && userChoice=='S'){
    lose++;
    var playAgain=prompt("Loss! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
  }
  else if(botChoice=='S' && userChoice=='R'){
    win++;
    var playAgain=prompt("Win! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
  }
  else if(botChoice=='S' && userChoice=='P'){
    win++;
    var playAgain=prompt("Win! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
  }
  else if(botChoice=='R' && userChoice=='P'){
    win++;
    var playAgain=prompt("Win! Continue playing? Y/N? \n Wins: " + win + "\n Losses: " + lose + "\n Draws: " + draw);
    stillPlaying=playAgain.toUpperCase();
 if (newChoice!=='r' || 'R' || 's' || 'S' || 'p' || 'P' || 'Y' || 'y' || 'N' || "n"){
    var newChoice =prompt("Please enter R , P , or S. Click Y to try again..");
  }  
}
}
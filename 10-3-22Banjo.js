/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:*/


//P strings 
  //R name + "plays banjo" or name +"does not play banjo"
  //E Randy => Randy "plays banjo"
  //p Get the name's first letter by using index property 
  //if name begins w R or r you play banjo and if not R or does not 

function areYouPlayingBanjo(name) {
    if (name[0] === "R"|| name[0] ==="r"){
      return name + " plays banjo" 
    }else{
      return name + " does not play banjo" 
    }
  }
  
  
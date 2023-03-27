/*Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
function points(games) {
  
    let champion = 0 
    for (let i=0; i<games.length; i++){
      let each = games[i].split(":");
      if (each[0]>each[1]){
        champion += 3 
      }else if(each[0]==each[1]){
        champion += 1
      }else{
        champion += 0 
      }
    }
    return champion 
  }
  
  //p - 10 strings that look like ["3:1", "2:2", "0:1", ...] first number is home team 
  //and second number is away team 
  //r - number of poitns for the championship where a win is 3 points loss is 0 and a tie is 1 
  //e - "1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10
  //p - let champion = 0 (this will hold the championship points)
  //then a for loop where x gets compared to y by splitting the games array at ":"
  //then 3 conditionals where they "each" get compared based on the rules 
  //return champion where the championship points are stored 

  //more dry answer below

  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }
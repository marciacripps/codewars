/*A square of squares

Task
Given an integral number, 
determine if it's a square number:
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function(n){
    let square = Math.sqrt(n)
    if (n === 0){
    return true
  }else if(n % square === 0){
    return true
  }else {
    return false
  }
  } 

  //OR

  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }


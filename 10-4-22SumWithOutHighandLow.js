/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }

  //OR

  function sumArray(array) {
    if (array == null || array.length <= 1){
      return 0
    }else {
      return array.sort((a,b) => a-b).slice(1, array.length - 1).reduce((a,b) => a + b, 0)
    }
  }
  
  //P array of numbers 
  //R add all the numbers that get passed thru array EXCEPT highest and lowest ELEMENT 
  // if empty, null etc. return 0 
  //E 
  //P when we get the array pull out the lowest and highest element THEN put into a new array THEN Add
  // sort from smallest to biggest value then pull off first and last index then push 
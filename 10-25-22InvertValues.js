/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.*/


function invert(array) {
    let newArr= []
    for (let i=0; i<array.length; i++){
      newArr.push(array[i]*-1)
    }
    return newArr 
  } 

  //p - an array of positive and negative numbers
  //r - the opposite sign of all the numbers
  //e - invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  //p - create a new array and set it to []; for loop where it multiplies everything by -1 and then use .push(array[i]*-1)to put it in the new array; 

  function invert(array) {
    for(let i=0; i<array.length; i++){
      array[i] *= -1;
    }
     return array;
  } 

  //Realized this does the same thing without the new array.

  const invert = array => array.map(num => -num) 

  //This does the same thing but is way more DRY. arrow function that uses .map 
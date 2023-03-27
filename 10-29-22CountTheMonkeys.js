/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]*/ 

 function monkeyCount(n) {
    let sum = [];
  for (let i=1; i<n+1; i++){
    sum.push(i)
  }
    return sum 
  }

  //P a single number
  //r an array up to the n number 
  //e 
  //p set a new array (sum=[]) then do a for loop start your counter at 1 and then end it a n+1 and sum.push(i) to push numbers into new array 
/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
    let n = ''
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
      n = n + Math.pow(num[i],2)
    }
    return Number(n)
  } 

//   p- random numbers 
//   r- squared numbers concatenated together
//   e - 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//   p - let n = '' to start and then make sure num is turned into a string. do a for loop where it takes every num and squares it and concatenates it. return n but as a number
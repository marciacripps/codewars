/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/ 

//P - an array of positive and negative numbers
//R - supposed to show []where [0] = THE COUNT NOT SUM of positives and [1] = is the SUM of the negatives 
//E - For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//P - I'm going to make a new arr and set it to [], then a sum to represent the COUNT of the positives, then a sum2 to represent the negatives, then a conditional where it only plays out if the input and input.length is there and then a for loop, with two conditionals, if its >0 then its a count, if its<0 its a sum, then arr.push sum and arr.push sum2, call my arr; 



function countPositivesSumNegatives(input) {
    let arr = []
    let sum = 0
    let sum2 = 0
    if (input && input.length){
      for (let i=0; i< input.length ; i++){
        if (input[i]>0){
          sum += 1
        }else{
          sum2 += input[i]
        }
      }
      arr.push(sum)
      arr.push(sum2)
    }
    return arr
    }
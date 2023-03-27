/* I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/ 
function arrayPlusArray(arr1, arr2) {
    let sum = 0 
    const arr = arr1.concat(arr2)
    for (let i=0; i<arr.length; i++){
      sum += arr[i]
    }
      return sum 
    }
    
    //p - two arrays of random positive and negative numbers 
    //r - one single number that is the SUM of the two 
    //e - ([1, 2, 3], [4, 5, 6]), 21) 
    //p - let sum = 0 this will hold where the sum goes 
    //join arr1 and arr2 by using .concat and into arr 
    //then do a for loop thru the new one and sum += arr[i]
    //return the sum 
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let str = n.toString()
    let sortedArr = []
    for(let i=0; i<str.length; i++){
      sortedArr.push(parseInt(str[i], 10))
    }
    sortedArr.sort((a,b)=> b-a)
    return parseInt(sortedArr.join(''), 10)
  }
  
  //p - take in positive number 
  //r - same number in descending order 
  //e Input: 42145 Output: 54421
  //p turn n into a string and then set an empty array then for loop thru the string 
  //then push into your array using parseInt(string, radix) then sort it reverse and then return it joined

  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
   }

//if i solve this again i'd do this ^^^^
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let cap = /[A-Z]/g;
    let n = ''
    for(let i=0; i<string.length; i++){
      if (string[i].match(cap)){
        n += ' ' + string[i]
      }else{
        n += string[i]
      }
    }
   return n 
  }
  
  //p - string of words in camel case
  //r - same string but w a space at every capital word
  //e - "camelCasing"  =>  "camel Casing"
  //p - let cap = /[A-Z]/g and set n= '' then a for loop starting at 0 and ending at i<string.length,
  //conditional where string[i].match(cap) and it concatenates a ' ' + string[i] else just n+=string[i]
  
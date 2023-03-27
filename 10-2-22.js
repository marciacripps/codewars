//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.substring(1, str.length-1);
   };

   //OR

   function removeChar(str){
    if (str.length >= 2) { // check if str is more than 2 characters
      var s = [...str] // convert the string to an array, split the letters.
      var done = s.slice(1, -1) // remove first and last items in the array
      return done.join("") // convert merge and return the new array
    } else { // if str is less than 2 characters return nothing.
      return ''
    }
  };

  //OR

  function removeChar(str){
    let str2 = str.split("")
    str2.pop()
     str2.shift()
     return str2.join("")
   };



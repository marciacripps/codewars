function accum(s) {
    let output = '';
      for (let i = 0; i < s.length; i++) {
      let letter = s.charAt(i).toUpperCase();
      output += letter;
      for (let j = 0; j < i; j++) {
        output += s.charAt(i).toLowerCase();
      }
      if (i < s.length - 1) {
        output += "-";
      }
    }
    return output;
  }
  //p - random string of letters a-z 
  //r - spit back first poistion of array with Capital version of it 
  //and lowercase of it and depending on the position lowercase the rest 
  //e - "abcd") -> "A-Bb-Ccc-Dddd"
  //p - empty string called output then do a for loop starting at 0
  //ending at s.length and going up by one 
  //Convert the input string to lowercase and store it in a variable named input
  //return uppercase and return output
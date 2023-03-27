//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool === true){
      return "Yes"
    }if (bool === false){
      return "No"
    }
  }

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
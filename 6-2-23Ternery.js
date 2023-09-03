// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
  if (n!=1){
    return true
  }else{
    return false
  }
}

//a more dry answer below or ternery

function plural(n) {
  return n!=1 ? true : false
}

//parameters - any number
//returns - true as long as its not 1
//example -Test.assertEquals(plural(0), true, "Plural for 0");
//psuedo code - i need a true and false conditional
//i will return true for anything not 1 so n!=1 and then else false


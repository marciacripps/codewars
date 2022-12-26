// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

String.prototype.toAlternatingCase = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
      let ch = this[i];
      if (ch === ch.toUpperCase()) {
        result += ch.toLowerCase();
      } else if (ch === ch.toLowerCase()) {
        result += ch.toUpperCase();
      } else {
        result += ch;
      }
    }
    return result;
  }
  
  //p random string of words or numbers 
  //r same string but alternating case 
  //e "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
  //p let result = '' do a for loop, set ch = this[i] have multiple conditionals 
  //if ch === ch.toUpperCase then add to result as ch.toLowerCase another condition where it's the 
  //other way around. ch === ch.toLowerCase add to result with ch.toUpperCase and lastly just add what
  // ch += result and return result outside of it 
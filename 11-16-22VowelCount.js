// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//p - random letters
//r - one single number that is the count of vowels 
//e - "abracadabra"), 5
//p - set v=0 and then for loop then two conditionals
//conditional 1 is all the vowels and I want it to add 1 if its aeiou and other then that i want it to keep going until it gets to the end 

function getCount(str) {
    let v = 0 
    for (let i=0; i<str.length; i++){
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        v ++ 
      }else {
        continue 
      }
    }
    return v 
  }


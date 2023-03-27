//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }

  //OR 

  const getCount =(str)=> {
    let vowelsCount = 0;
    
    // enter your majic here
    for(letter of str){
    if(letter === 'a'){
      vowelsCount +=1;
    }else if(letter === 'e'){
      vowelsCount +=1;
    }else if(letter === 'i'){
      vowelsCount +=1;
    }else if(letter === 'o'){
      vowelsCount +=1;
    }else if(letter === 'u'){
      vowelsCount +=1;
    }
    }
    
    return vowelsCount;

    //OR
    function getCount(str) {
        return (str.match(/[aeiou]/ig)||[]).length;
      }

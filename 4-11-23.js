// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
    let x = '';
    for (let i = 1; i <= num; i++) {
      x += `${i} sheep...`;
    }
    return x;
  }
  
  
  //p - one positive integer
  //r - count up to the number they gave with "sheep..." concatenated to it
  //e - 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."
  //p - for loop begin counter at 0 and end at num and go up by 1
  //set x to an empty string += `${i} sheep...`
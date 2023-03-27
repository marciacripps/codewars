/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/ 

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


  //other solutions I may try the next time 
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }

  //for loop idea but I didn't want to go this long route

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      var lowest;
      for(var i in args){
        if(i==0){
          lowest = args[i];
        }
        else {
          if(lowest >= args[i]){
          lowest = args[i];
          }
        }
      }
      return lowest;
    }
  }


//p - an array of numbers 
//r - one number which is the smallest number 
//e- Given [34, 15, 88, 2] your solution will return 2
//p - loop thru each number OR Math.min 
/*You are given an input (n) which represents the amount of lines you are given,
 your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.*/
 function maxBisectors(n) {
    if (n % 2 == 0)
    {
      return (n / 2) ** 2; // ** is exponentiation
    }
    else 
    { 
      let temp = (n - 1) / 2;
      return  temp ** 2 + temp;
    }
  } 

  //p- single number over 0 representing the lines
  //r- single number representing max amount of lines 
  //e- act(5, 6);act(6, 9)
  //p- two conditionals one for when n%2==0 and another for everyone else
  //do n/2 **2 
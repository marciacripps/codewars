/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.*/
//Parameters - d = distance to pump m = mpg = f=fuel left
//Results - true or false
//Ex: d= 50, m=25, f=2), true
//Psuedo code - take in the distance, mpg, and fuel and if m*f is less then d return true. m*f is greater then d then false. 

//Ternery solution 
const zeroFuel = (d, m, f) => {
    // TODO
  return (d <= (m*f)) ? true : false
  
  };

//if else conditional 
const zeroFuel = (d,m,f) =>{
    if (d <= (m*f)){
        return true 
    }else{
        return false 
    }

}
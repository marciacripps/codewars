/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.*/

//Parameters - l number and w number
//Results - l*w if it's a square 2*(l+w) if its a rectangle
//Example - 6, 10 --> 32 3, 3 --> 9
//Psuedo code - check if its a square if yes l*w, 2*(l+w) for everything else 

const areaOrPerimeter = function(l , w) {
    if(l===w){
       return l*w
     }else{
       return 2*l+2*w
     }
     
   };
   

// Ternery:

const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l+w)
   };
   
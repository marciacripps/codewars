/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/ 

  //P string/char, number, number 
  //R a numbers positive or negative
  //E 
  //P determine if operation is + - * / then do what u need to do based on operation 
  //You'll have 4 different conditions

function basicOp(operation, value1, value2){
    if (operation === '+'){
      return value1 + value2 
    }else if(operation === '-'){
      return value1 - value2     
    }else if(operation === '*'){
      return value1 * value2
    }else if (operation === '/'){
      return value1/value2 
    }
  }
  
//OR 
 

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}


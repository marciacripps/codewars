/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/

function rentalCarCost(d) {
    // Your solution here
    if (d<3){
      return d*40 
    }else if (d<7) {
      return (d*40) - 20  
    }else if (d >=7){
      return (d*40) - 50 
    }
  }

  // ternary 

  const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0)); 

  //parameters = number of days
  //results = the price for renting the car
  //exampes: 1 => 40, 3 => 100, 7=> 230 
  //Psuedo code = if under 3 do d*40 if under 7 do d*40 - 20 if over 7 do d*40-50 
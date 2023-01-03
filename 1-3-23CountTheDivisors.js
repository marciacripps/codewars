// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n){
    let count = 0
    for(let i=1;i<=n;i++){
      if (n%i==0){
        count += 1
      }else{
        continue
      }
    }
  return count
}

//p - a positive whole number
//r - a number that is the COUNT of the divisors
//e - 12 --> 6 (1, 2, 3, 4, 6, 12)
//p - let count = 0 and then do a for loop starting the counter at 1 and stopping in at n exactly
//count += 1 and ethen else continue 
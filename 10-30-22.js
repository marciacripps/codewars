//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) sum += arr[i]
  }
  return sum
}

function positiveSum(arr) {
  let sum = 0
  arr.forEach(num => num > 0 && (sum += num))
  return sum
}

const positiveSum = arr => arr.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator, 0);

const positiveSum = arr => arr.filter(number => number > 0).reduce((accumulator, current) => accumulator + current, 0) 
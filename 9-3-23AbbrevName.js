// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  const multiples = []
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i)
  }
  return multiples
}

function findMultiples(integer, limit) {
    const multiples = []; // Initialize an array to store the multiples
  
    // Start a for loop with 'i' initialized to 'integer'. We'll iterate while 'i' is less than or equal to 'limit'.
    for (let i = integer; i <= limit; i += integer) {
      // Inside the loop, we're adding 'i' to the 'multiples' array. 'i' represents a multiple of 'integer'.
      multiples.push(i);
  
      // After adding the current multiple to the array, we increment 'i' by 'integer' to move to the next multiple.
    }
  
    // Once the loop is done, we've collected all the multiples in the 'multiples' array.
    // We return this array containing the multiples.
    return multiples;
  }
  
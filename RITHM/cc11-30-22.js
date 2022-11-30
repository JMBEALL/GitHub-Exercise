// multiples

// Implement a function called multiples that accepts two numbers: x and n.

// The function should return the first n multiples of the number x.

// Assume that x is a positive integer.

// Examples:

// multiples(3, 4) // [3, 6, 9, 12]
// multiples(2, 5) // [2, 4, 6, 8, 10]

function multiples(x, n) {
    const arr = [];
    // multiply x * i for every number from 1 up to and including n
    for (let i = 1; i <= n; i++) {
      arr.push(i * x);
    }
    return arr;
  }
  
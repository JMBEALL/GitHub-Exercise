// squareEvenNumbers

// Write a function called squareEvenNumbers which accepts an array and returns the sum of the squares of all the even numbers in the array.

// Examples:

// squareEvenNumbers([1, 2, 3, 4, 5]); // 20
// squareEvenNumbers([1, 3, 5, 7]); // 0
// squareEvenNumbers([5, 6, 7]); // 36

function squareEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i] ** 2;
      }
    }
    return sum;
  }
  
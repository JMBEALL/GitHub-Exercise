// twoHighest

// Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array.

// The returned value should be an array in the following format: [secondHighest, highest]

// The order of the numbers passed in could be any order.

// Do not use the build in sort() method – the tests will fail!

// Examples:

// twoHighest([1, 2, 10, 8]); // [8, 10]
// twoHighest([6, 1, 9, 10, 4]); // [9,10]
// twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
// twoHighest([1, 2, 2]) // [2, 2];

/**
 * This approach takes 1 single sweep of the array with two pointers.
 *  The highest and secondHighest are initialized to negative Infinity
 *  so that any numbers in the array will be eligible. Then set the
 *  secondHighest first, and if it's greater than the highest, swap.
 */
 function twoHighest(nums) {
    // initialize both to the lowest possible values
    let highest = -Infinity;
    let secondHighest = -Infinity;
  
    for (let num of nums) {
      // set secondHighest first
      if (num > secondHighest) {
        secondHighest = num;
      }
      // see if we need to set highest
      if (secondHighest >= highest) {
        // if so, swap
        let tmp = highest;
        highest = secondHighest;
        secondHighest = tmp;
      }
    }
  
    return [secondHighest, highest];
  }
  
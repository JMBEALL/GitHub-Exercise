// max

// Write a function called max, which accepts an array and returns the highest value.

// Do not use the built-in Math.max() function!

// Examples:

// max([5, 1, 4, 7, 1, 2]); // 7
// max([3, 4, 12, 1, 8]); // 12
// max([-1, 6, 3, 2.2, -10, -4]); // 6

function max(arr) {
    // we can use the first element as the default 'maximum'
    let maximum = arr[0];
    // then if we encounter a larger element in the rest of the array,
    //   replace the value. Note we can start our loop at index 1
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
      }
    }
    return maximum;
  }
  
// minMaxKeyInObject

// Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

// The function should return an array with the following format: [lowestKey, highestKey]

// Examples:

// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// // [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// // [1, 4]

/**
 * Standard approach looping through object with two pointers
 */
 function minMaxKeyInObject(obj) {
    let minKey = Infinity;
    let maxKey = -Infinity;
  
    for (let key in obj) {
      // convert key to number and compare
      let keyNum = +key; // this is shorthand for Number(key)
      if (keyNum < minKey) {
        minKey = keyNum;
      }
      if (keyNum > maxKey) {
        maxKey = keyNum;
      }
    }
  
    return [minKey, maxKey];
  }
  
  /**
   * Advanced approach. Declarative 1-liner using Object.keys
   *  and Array spread operator (...)
   */
  function minMaxKeyInObjectDeclarative(obj) {
    return [Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj))];
  }
  
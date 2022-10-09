// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = 0;
    let average;
    if(array.length === 0){
      return 0
    }
    array.forEach(el => {
      sum += el;
    })
      average= sum/array.length;
    return average;
    }
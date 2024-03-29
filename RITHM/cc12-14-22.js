// values

// Write a function called values, which accepts an object and returns an array of all of the values in the object.

// Do not use the built in Object.values() function!

// Examples:

// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]

// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]

// let obj3 = {};
// values(obj3); // []

function values(obj) {
    let valuesArr = [];
    for (let key in obj) {
      valuesArr.push(obj[key]);
    }
    return valuesArr;
  }
  
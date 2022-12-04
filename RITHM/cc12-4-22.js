// separate

// Dogs don’t get along with cats, and cats don’t get along with dogs.

// What they both have in common is that they don’t get along with water (baths).

// Given an array of ‘dogs’, ‘cats’, and ‘water’, write a function called separate, which returns a new array so that the dogs are separated from the cats by water. Make sure that cats always come first in the array.

// You can assume that the array will always at least three elements, and that there’ll always be at least one dog, one cat, and one water to work with.

// Examples:

// separate(['dog','cat','water']) // ['cat','water','dog']

// separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])

// separate(['cat','cat','water','dog','water','cat','water','dog'])

// // ['cat','cat','cat','water','water','water','dog','dog']

// separate(['cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat',
//     'cat','cat','cat','cat','cat','cat','cat',
//     'dog','water','water','water','water','water',
//     'water','water','water','water','water','water',
//     'water','water','water'])

 /* ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water', 'dog']
*/

// multiple loops
function separate(arr) {
    var newArr = [];
    for(let val of arr){
      if(val === "cat"){
        newArr.push("cat")
      }
    }
    for(let val of arr){
      if(val === "water"){
        newArr.push("water")
      }
    }
    for(let val of arr){
      if(val === "dog"){
        newArr.push("dog")
      }
    }
    return newArr;
  }
  
  // make 3 arrays and concat them
  function separate(arr){
    return []
            .concat(arr.filter(v => v === "cat"))
            .concat(arr.filter(v => v === "water"))
            .concat(arr.filter(v => v === "dog"))
  }
  
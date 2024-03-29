// findTheDuplicate

// Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

// Examples:

// findTheDuplicate([1,2,1,4,3,12]) // 1
// findTheDuplicate([6,1,9,5,3,4,9]) // 9
// findTheDuplicate([2,1,3,4]) // undefined

function findTheDuplicate(arr){
    let counter = {}
    for(let i = 0; i < arr.length; i++){
      if(arr[i] in counter){
        counter[arr[i]]++
      } else {
        counter[arr[i]] = 1;
      }
    }
    for(let key in counter){
      if(counter[key] > 1) return +key
    }
  }
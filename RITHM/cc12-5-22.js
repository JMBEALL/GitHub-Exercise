// repeat

// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method

// Examples:

// repeat('Matt', 3) // 'MattMattMatt'
// repeat('Elie', 2) // 'ElieElie'
// repeat('Michael', 0) // ''

function repeat(str, num){
    if(num === 0) {
      return ''
    }
    let newStr = ''
    for(let i = 0; i < num; i++){
      newStr = newStr.concat(str);
    }
    return newStr;
  }
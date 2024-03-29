// removeFromString

// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

// Examples:

// removeFromString('Elie', 2, 2) // 'El'
// removeFromString('Elie', 0, 1) // 'lie'
// removeFromString('Rithm School', 0, 6) // 'School'
// removeFromString('Rithm School', 2, 4) // 'RiSchool'
// removeFromString('Rithm School', 6, 400) // 'Rithm '

function removeFromString(str, start, removeCount) {
    let arr = str.split('');
    arr.splice(start, removeCount);
    return arr.join('');
  }
  
  // regular method
  function removeFromString(str, start, removeCount) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      if (i < start || i >= start + removeCount) {
        newStr += str[i];
      }
    }
    return newStr;
  }
  
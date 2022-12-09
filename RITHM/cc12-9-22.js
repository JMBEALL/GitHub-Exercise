// stringIncludes

// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!

// Examples:

// stringIncludes('awesome', 'e'); // true
// stringIncludes('awesome', 'z'); // false

function stringIncludes(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return true;
      }
    }
    return false;
  }
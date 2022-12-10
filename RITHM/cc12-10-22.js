// stringIndexOf

// Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the first index in the word at which the character exists or -1 if the character is not found.

// Do not use the built in "string".indexOf() function!

// Examples:

// stringIndexOf('awesome', 'e') // 2
// stringIndexOf('awesome', 'z') // -1


function stringIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    // by the time you've reached this line, the loop has examined
    //   every single character in the string
    return -1;
  }
  
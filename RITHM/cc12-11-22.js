// stringLastIndexOf

// Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or -1 if the character is not found.

// Do not use the built in "string".lastIndexOf() function!

// Examples:

// stringLastIndexOf('awesome', 'e'); // 6
// stringLastIndexOf('awesome', 'z'); // -1

function stringLastIndexOf(str, char) {
    // the approach is the same as the last problem, except
    //  the loop goes backwards
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  
// charAt

// Write a function called charAt which accepts a string and an index (number) and returns the character at that index.

// The function should return an empty string if the number is greater than the length of the string.

// Do not use the built in charAt method

// Examples:

// charAt('awesome', 2) // 'e'
// charAt('awesome', 12) // ''

function charAt(str, idx) {
    // one-line solution using a ternary operator (condensed if/else)
    return idx < str.length ? str[idx] : '';
  }
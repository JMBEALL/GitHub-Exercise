// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(str) {
    //check for edge cases; typeof str os strictly equal to "string"
      if (typeof str !== "string"){
        throw new Error("Please pass in a valid string! Thank you. :) ")
      };
      // if false; throw new Error and ask them ti input a valid string
      
    //declare a variable with the label alphabet and initialize to an array containing all the letters of the alphabet
      const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
    //declare an empty string varibale with the label newStr and initialize it to an empty string
      let newStr = ""
      //loop through the argument that is passed in, aka str
      for (let i = 0; i<str.length; i++){
          //nested loop, so that we can iterate over the alphabet array and compare strict equality to see if the letters are the same
        for (let j = 0 ; j<alphabet.length; j++){
          //conditional: if character at index of the str is equal to and of the alphabet, we will add using a reassignment operator the index of the aphabet array that it matched
          if (str[i].toLowerCase() === alphabet[j]){
            newStr += `${j+1} `
            console.log(`${str[i]}${j}`)
          }
          // else, do not add, we can simply add "" // might not even need an else statement.
        }
          
      }
      return newStr.trim()
      //return newStr;
    }
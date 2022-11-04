// removeVowels

// Write a function called removeVowels which will accept a string and return a new string with all the vowels removed. You should not consider “y” to be a vowel.

// Examples:

// removeVowels("Hello!"); // "Hll!"
// removeVowels("Tomatoes"); // "Tmts"
// removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
// removeVowels("aeiou"); // ""
// removeVowels("why try, shy fly?"); // "why try, shy fly?"

function removeVowels(str) {
    const vowels = 'aeiouAEIOU';
    let newStr = '';
    for(let char of str){
      if(!vowels.includes(char)) newStr += char
    }
    return newStr
  }
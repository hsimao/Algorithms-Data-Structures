// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 解法 1
// function vowels(str) {
//   const vowelsChar = "aeiou";
//   return str
//     .toLowerCase()
//     .split("")
//     .reduce((acc, it) => {
//       if (vowelsChar.includes(it)) {
//         acc++;
//       }
//       return acc;
//     }, 0);
// }

// 解法 2
// function vowels(str) {
//   const vowelsArray = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (const char of str.toLowerCase()) {
//     if (vowelsArray.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// 解法 3 使用正規表達式
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

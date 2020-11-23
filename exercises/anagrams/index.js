// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 解法 1
// function anagrams(stringA, stringB) {
//   function makeObj(array) {
//     return array.reduce((acc, it) => {
//       acc[it] = acc[it] + 1 || 1;
//       return acc;
//     }, {});
//   }

//   function formatAndSplit(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("");
//   }

//   const objA = makeObj(formatAndSplit(stringA));
//   const objB = makeObj(formatAndSplit(stringB));

//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }

//   for (let key in objA) {
//     if (objA[key] !== objB[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// 解法 2
function anagrams(stringA, stringB) {
  function formatAndSplit(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  }

  return formatAndSplit(stringA) === formatAndSplit(stringB);
}

module.exports = anagrams;

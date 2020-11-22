// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // == 解法 1
  // const halfNum = Math.floor(str.length / 2);
  // const firstStr = str.substr(0, halfNum);
  // let lastStr = str.substr(halfNum, str.length);
  // if (firstStr.length !== lastStr.length) {
  //   lastStr = lastStr.substr(1, lastStr.length);
  // }
  // if (lastStr === firstStr.split("").reverse().join("")) {
  //   return true;
  // }
  // return false;

  // == 解法 2
  // return str === str.split("").reverse().join("");

  // == 解法 3
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

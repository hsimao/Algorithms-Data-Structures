// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 解法 1
// function reverseInt(n) {
//   const negative = Math.sign(n);
//   let reverse = n.toString().split("").reverse().join("");

//   if (negative === -1) {
//     reverse = "-" + reverse.replace("-", "");
//   }

//   return parseInt(n);
// }

// 解法 2
function reverseInt(n) {
  const reverse = n.toString().split("").reverse().join("");
  if (n < 0) return reverse * Math.sign(n); // Math.sign(), 負數會回傳 -1, 正數回傳 1
  return reverse;
}

module.exports = reverseInt;

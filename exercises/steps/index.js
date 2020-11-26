// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 解法 1
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     const mark = i;
//     const space = n - i;
//     let print = "";

//     for (let m = 1; m <= mark; m++) {
//       print += "#";
//     }

//     for (let s = 1; s <= space; s++) {
//       print += " ";
//     }
//     console.log(print);
//   }
// }

// 解法 2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// 解法 3 使用遞歸 Recursion
function steps(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  return steps(n, row, stair + add);
}
module.exports = steps;

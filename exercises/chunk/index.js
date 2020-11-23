// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 解法 1
// function chunk(array, size) {
//   const chunked = [];

//   for (let val of array) {
//     // 取出 chunked 最後一個陣列
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       // 產生新的 subArray
//       chunked.push([val]);
//     } else {
//       // push 到 chunked 關聯的最後一個陣列內
//       last.push(val);
//     }
//   }

//   return chunked;
// }

// 解法 2
function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

module.exports = chunk;

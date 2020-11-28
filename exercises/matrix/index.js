// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  // 先建立二維陣列
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // while loop
  while (startColumn <= endColumn && startRow <= endRow) {
    /* Top row 上方第一條
    [
      [1, 2, 3],
      [],
      []
    ]
    */
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; // 最上方 row 已經加完, 加 1, 往下移動

    /* Right column 最右邊由上到下
    [ [   1,    2, 3],
      [null, null, 4],
      [null, null, 5]
    ]
    */
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--; // 最右邊 column已經加完, endColumn 扣 1, 往左移動

    /* Button row 底部
      右到左加起
    [ [   1,    2, 3],
      [null, null, 4],
      [   7,    6, 5]
    ]
     */
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--; // 最底部 row 已經加完, endRow 扣 1 往上移動

    /* Start Column
    最左邊由下往上加
    [ [   1,    2, 3],
      [   8, null, 4],
      [   7,    6, 5]
    ]
     */
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++; // 左邊 column 已經加完, startColumn 加 1 往右移動
  }
  // console.log(results);
  return results;
}

module.exports = matrix;

// --- Directions Fibonacci series 斐波那契序列 費氏數列
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 解法 1
// function fib(n) {
//   const result = [0, 1];

//   for (let i = result.length; i <= n; i++) {
//     result.push(result[i - 1] + result[i - 2]);
//   }

//   return result[n];
// }

// 解法 2 使用遞歸
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// 解法 3 使用緩存優化
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  // 不能直接調用自己, 不然會用到沒有加上 memoize 的 slowFib
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

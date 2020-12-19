// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// ES2015 陣列互換方法
// function bubbleSort(arr) {
//   let counter = 0;
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       counter++;
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   console.log("counter: ", counter);
//   return arr;
// }

// 優化迴圈次數, 如果第二層迴圈已經有一次都沒有需要交換的, 將退出循環
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let flag = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

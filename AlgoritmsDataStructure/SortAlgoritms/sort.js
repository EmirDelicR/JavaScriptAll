/**
 * 1. BUBBLE SORT
 * 2. SELECTION SORT
 * 3. INSERTION SORT
 * 4. MERGE SORT
 * 5. QUICK SORT
 * 6. REDIX SORT
 */
/** ------------------------------- PERFORMANCE TIMER -------------------------------------- */
const performanceTimer = (func, args) => {
  let beginTime = performance.now();
  const result = func(...args);
  let endTime = performance.now();
  console.log(
    `Time Elapsed for function ${func.name}: ${(
      (endTime - beginTime) /
      1000
    ).toFixed(8)} seconds.`
  );
  console.dir(`Result of the function that is called is: ${result}`);
};

/** ------------------------------- BUBBLE SORT -------------------------------------- */
// NOTE! Big Time: O(n*n), Space O(1)
const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};

const bubbleSort = arr => {
  let isSwap = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
};
// console.log("Bubble: ", bubbleSort([1, 5, 3, 2, 4]));
performanceTimer(bubbleSort, [[0, 2, 34, 22, 10, 19, 17]]);
/** ------------------------------- SELECTION SORT -------------------------------------- */
// NOTE! Big Time: O(n*n), Space O(1)
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
};

// console.log("Selection: ", selectionSort([0, 2, 34, 22, 10, 19, 17]));
performanceTimer(selectionSort, [[0, 2, 34, 22, 10, 19, 17]]);
/** ------------------------------- INSERTION SORT -------------------------------------- */
// NOTE! Big Time: O(n*n), Space O(1)
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

// console.log("Insertion: ", insertionSort([1, 9, 3, 4, 5, 6, 7, 2, 8]));
performanceTimer(insertionSort, [[0, 2, 34, 22, 10, 19, 17]]);

/** #############  NOTE!!! NEXT SORTS USE WITH LARGE ARRAYS #############*/

/** ------------------------------- MERGE SORT -------------------------------------- */
// NOTE! Big Time: O(n log n), Space O(n)

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

// console.log("Merge: ", mergeSort([1, 9, 3, 4, 5, 6, 7, 2, 8]));
performanceTimer(mergeSort, [[0, 2, 34, 22, 10, 19, 17]]);

/** ------------------------------- QUICK SORT -------------------------------------- */
// NOTE! Big Time: O(n log n) || O(n * n), Space O(log n)
// TODO improve this with middle pivot
const pivot = (arr, start, end) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  return arr;
};

// console.log("Quick: ", quickSort([1, 9, 3, 4, 5, 6, 7, 2, 8]));
performanceTimer(quickSort, [[0, 2, 34, 22, 10, 19, 17]]);

/** ------------------------------- REDIX SORT -------------------------------------- */
// NOTE! Big Time: O(nk), Space O(n + k)
/**
 *
 * @param {*} num ~ 123456
 * @param {*} position ~ 2
 * return 4 (4 is on 2 position)
 * return 6 (6 is on 0 position)
 */
const getDigit = (num, position) => {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
};

/**
 * @param {*} num ~ example 23456
 * return 5 (There is 5 digit)
 */
const numOfDigit = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const numInArrayWithMostDigit = arrOfNum => {
  let maxDigits = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    maxDigits = Math.max(maxDigits, numOfDigit(arrOfNum[i]));
  }
  return maxDigits;
};

const redixSort = arr => {
  let maxDigitCount = numInArrayWithMostDigit(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

// console.log("Redix: ", redixSort([1, 9, 3, 4, 5, 6, 7, 2, 8]));
performanceTimer(redixSort, [[0, 2, 34, 22, 10, 19, 17]]);

/** ------------------------------- END -------------------------------------- */

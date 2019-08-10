/**
 * 1. LINEAR SEARCH
 * 2. BINARY SEARCH
 * 3. STRING SEARCH
 */

/** ------------------------------- LINEAR SEARCH -------------------------------------- */
const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};
console.log(linearSearch([1, 2, 3, 4, 5], 4));

/** ------------------------------- BINARY SEARCH -------------------------------------- */
// NOTE!  Only works with sorted array
const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    elem < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
};

console.log("Binary: ", binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 8], 10));

/** ------------------------------- STRING SEARCH -------------------------------------- */

const stringSearch = (str, pattern) => {
  if (str.length < pattern.length) {
    return 0;
  }

  let timesFound = 0;
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === pattern[counter]) {
      counter += 1;
      if (counter === pattern.length) {
        timesFound += 1;
        counter = 0;
      }
    } else {
      counter = 0;
    }
  }
  return timesFound;
};
console.log("Founded: ", stringSearch("lolollol", "lol"));
/** ------------------------------- END -------------------------------------- */

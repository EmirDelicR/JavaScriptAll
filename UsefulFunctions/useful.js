/**
 *  1. Performance Timer
 *  2. Ad up to Number
 *  3. Is Alpha Numeric
 *  4. Char Count
 *  5. Deep Copy (Object/array)
 *  6. Check Array Frequency Pattern
 *
 * */

/** ------------------------------- PERFORMANCE TIMER -------------------------------------- */
const performanceTimer = (func, args) => {
  let beginTime = performance.now();
  const result = func(...args);
  let endTime = performance.now();
  console.log(`Time Elapsed: ${(endTime - beginTime) / 1000} seconds.`);
  console.log(`Result of the function that is called is: ${result}`);
};

/** ------------------------------- ADD UP TO NUMBER -------------------------------------- */

console.log("--------------- Add up to number -------------------");

const addUpTo = n => (n * (n + 1)) / 2;

performanceTimer(addUpTo, [10000000]);

const test = (a, b) => a + b;
performanceTimer(test, [1, 2]);

/** ------------------------------- IS ALPHA NUMERIC -------------------------------------- */

const isAlphaNumeric = char => {
  const charCode = char.charCodeAt(0);
  if (
    !(charCode > 47 && charCode < 58) && // (0-9)
    !(charCode > 64 && charCode < 91) && // (A-Z)
    !(charCode > 96 && charCode < 123) // (a-z)
  ) {
    return false;
  }
  return true;
};

/** ------------------------------- CHAR COUNT -------------------------------------- */

const charCount = str => {
  const obj = {};
  [...str].forEach(char => {
    if (!isAlphaNumeric(char)) {
      return;
    }
    char = char.toLowerCase();
    obj[char] = ++obj[char] || 1;
  });
  return obj;
};

console.log(charCount("Testing   GGGG  !!!!"));

/** ------------------------------- DEEP COPY (ARRAY/OBJECT) -------------------------------------- */

const copy = o => {
  let output, value, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    value = o[key];
    output[key] = typeof value === "object" ? copy(value) : value;
  }
  return output;
};

const someArr = [[1, 2], [[1, 2, 3], [1, 2, 3, [4, 5]]]];
const someObj = {
  name: "Test",
  data: {
    test: "TestDeep"
  },
  arr: someArr
};

const arrCopy = copy(someArr);
const objCopy = copy(someObj);

console.log("Copy of array: ", arrCopy);
console.log("Copy of object: ", objCopy);

/** Note this is not affective 100% */
const shallowCopyArr = [...someArr];
const shallowCopyObj = { ...someObj };

/** ------------------------------- CHECK ARRAY FREQUENCY PATTERN-------------------------------------- */
/* Check if array is same as other array squared
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false
*/

const same = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  for (const val of firstArr) {
    // (frequencyCounterOne[val] || 0) + 1 == frequencyCounterOne[val] ? +=1 : 0
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }

  for (const val of secondArr) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }

  console.log("frequencyCounterOne: ", frequencyCounterOne);
  console.log("frequencyCounterTwo: ", frequencyCounterTwo);

  for (let key in frequencyCounterOne) {
    // check if has not a key
    if (!(key ** 2 in frequencyCounterTwo)) {
      return false;
    }
    // check if count is not same
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
      return false;
    }
  }

  return true;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 9, 1, 3];

console.log("Is same: ", same(arr1, arr2));

/**
 *  1. Performance Timer
 *  2. Ad up to Number
 *  3. Is Alpha Numeric
 *  4. Char Count
 *  5. Deep Copy (Object/array)
 *  6. Check Array Frequency Pattern
 *  7. CHECK ARRAY FREQUENCY PATTERN - STRINGS
 *  8. CHECK ARRAY FREQUENCY PATTERN - NUMBERS
 *  9. SUM ZERO - MULTI POINTER PATTERN
 *  10. ARE THERE DUPLICATES - MULTI POINTER PATTERN
 *  11. COUNT UNIQUE VALUES - MULTI POINTER PATTERN
 *  12. AVERAGE PAIR - MULTI POINTER PATTERN
 *  13. IS SUB SEQUENCE - MULTI POINTER PATTERN
 *  14. MAX SUBARRAY SUM  - SLIDING WINDOW PATTERN
 *  15. MIN SUBARRAY LENGTH  - SLIDING WINDOW PATTERN
 * */

/** ------------------------------- 1. PERFORMANCE TIMER -------------------------------------- */
const performanceTimer = (func, args) => {
  let beginTime = performance.now();
  const result = func(...args);
  let endTime = performance.now();
  console.log(`Time Elapsed: ${(endTime - beginTime) / 1000} seconds.`);
  console.log(`Result of the function that is called is: ${result}`);
};

/** ------------------------------- 2. ADD UP TO NUMBER -------------------------------------- */

console.log("--------------- Add up to number -------------------");

const addUpTo = n => (n * (n + 1)) / 2;

performanceTimer(addUpTo, [10000000]);

const test = (a, b) => a + b;
performanceTimer(test, [1, 2]);

/** ------------------------------- 3. IS ALPHA NUMERIC -------------------------------------- */

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

/** ------------------------------- 4. CHAR COUNT -------------------------------------- */

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

/** ------------------------------- 5. DEEP COPY (ARRAY/OBJECT) -------------------------------------- */

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

/** ------------------------------- 6. CHECK ARRAY FREQUENCY PATTERN-------------------------------------- */
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

/** ------------------------------- 7. CHECK ARRAY FREQUENCY PATTERN - STRINGS-------------------------------------- */
/* Check if string is same as other string
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram('rat', 'car') // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('data', 'tata') // true
  validAnagram('twiter', 'tertwi') // true
*/

const validAnagram = (firstStr, secondStr) => {
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  let lookup = {};
  for (const val of firstStr) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (const val of secondStr) {
    if (!lookup[val]) {
      return false;
    }
    lookup[val] -= 1;
  }
  return true;
};

const str1 = "tata";
const str2 = "atat";

console.log("Is validAnagram: ", validAnagram(str1, str2));

/** ------------------------------- 8. CHECK ARRAY FREQUENCY PATTERN - NUMBERS -------------------------------------- */
/* Check if number is same as other number
  sameFrequency(182, 182) // true
  sameFrequency(182, 281) // true
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22, 222) // false
*/

const sameFrequencyNumbers = (firstNum, secondNum) => {
  const firstNumAsString = firstNum.toString();
  const secondNumAsString = secondNum.toString();
  if (firstNumAsString.length !== secondNumAsString.length) {
    return false;
  }

  let lookup = {};
  for (const val of firstNumAsString) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (const val of secondNumAsString) {
    if (!lookup[val]) {
      return false;
    }
    lookup[val] -= 1;
  }
  return true;
};

const num1 = 283;
const num2 = 182;

console.log("Is sameFrequencyNumbers: ", sameFrequencyNumbers(num1, num2));

/** ------------------------------- 9. SUM ZERO - MULTI POINTER PATTERN -------------------------------------- */
/**
 * sumZero([-4, -3, -2, -1, 0, 4, 5, 10]) // [-4, 4]
 * sumZero([-3, -2, -1, 0, 1 ,2, 3]) // [-3, 3]
 * sumZero([-2, 0, 1 , 3]) // undefined
 * sumZero([1, 2, 3]) // undefined
 */

const sumZero = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};

console.log(sumZero([-4, -3, -2, -1, 0, 4, 5, 10]));

/** ------------------------------- 10. ARE THERE DUPLICATES - MULTI POINTER PATTERN -------------------------------------- */
/**
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */

const areThereDuplicates = (...args) => {
  /* Easy solution
  return new Set(args).size !== args.length;
  */
  let start = 0;
  let scout = 1;
  while (start < args.length) {
    const isSame = args[start] === args[scout];
    if (isSame) {
      return true;
    } else if (scout < args.length) {
      scout++;
    } else {
      start++;
      scout = start + 1;
    }
  }

  return false;
};
console.log("Is there a duplicates: ", areThereDuplicates(1, 2, 3));
console.log("Is there a duplicates: ", areThereDuplicates("a", "b", "c", "a"));

/** ------------------------------- 11. COUNT UNIQUE VALUES - MULTI POINTER PATTERN -------------------------------------- */
/**
 * countUniqueValues([1, 1, 1, 1, 2, 2]) // 2
 * countUniqueValues([-3, -2, -1, 0, 1 ,2, 3]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2, -1, -1, 0, 1]) // 4
 */

const countUniqueValues = arr => {
  if (arr.length === 0) {
    return 0;
  }
  // Easy solution
  // const arrSet = new Set(arr);
  // return arrSet.size;

  let start = 0;
  let scout = 1;
  while (scout < arr.length) {
    const isSame = arr[start] === arr[scout];
    if (isSame) {
      scout++;
    } else {
      start++;
      // not needed can slice array and return Set
      arr[start] = arr[scout];
      scout++;
    }
  }

  return start + 1;
};

console.log(
  "Number of unique values is: ",
  countUniqueValues([-3, -2, -1, 0, 1, 2, 3])
);

/** ------------------------------- 12. AVERAGE PAIR - MULTI POINTER PATTERN -------------------------------------- */
/**
 * averagePair([1, 2, 3], 2.5) // true
 * averagePair([1, 3, 3, 5 ,6, 7, 10, 12, 19], 8) // true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
 * averagePair([], 4) // false
 */

const averagePair = (arr, avg) => {
  if (arr.length === 0) {
    return false;
  }

  let start = 0;
  let scout = 1;
  while (start < arr.length - 1) {
    const average = arr[start] + arr[scout] / 2;
    if (average === avg) {
      return true;
    } else if (scout < arr.length) {
      scout++;
    } else {
      start++;
      scout = start + 1;
    }
  }

  return false;
};
console.log("Is average true: ", averagePair([1, 2, 3], 2.5));
console.log(
  "Is average true: ",
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
);
console.log("Is average false: ", averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log("Is average false: ", averagePair([], 4));

/** ------------------------------- 13. IS SUB SEQUENCE - MULTI POINTER PATTERN -------------------------------------- */
/**
 * isSubSequence('hello', 'hello world') // true
 * isSubSequence('sing', 'sting') // true
 * isSubSequence('abc', 'abracadabra') // true
 * isSubSequence('abc', 'acb') // false (order matters)
 */

const isSubSequence = (firstStr, secondStr) => {
  let start = 0;
  let scout = 0;
  let lastFindIndex = -1;
  while (start < firstStr.length) {
    const isInOtherString = firstStr[start] === secondStr[scout];
    if (isInOtherString && scout > lastFindIndex) {
      lastFindIndex = scout;
      start++;
      scout = start;
    } else if (scout < secondStr.length) {
      scout++;
    } else {
      return false;
    }
  }

  return true;
};
console.log("isSubSequence true: ", isSubSequence("world", "hello world"));
console.log("isSubSequence true: ", isSubSequence("sing", "sting"));
console.log("isSubSequence true: ", isSubSequence("abc", "abracadabra"));
console.log("isSubSequence false: ", isSubSequence("abc", "acb"));

/** ------------------------------- 14. MAX SUBARRAY SUM  - SLIDING WINDOW PATTERN -------------------------------------- */
/**
 * maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
 * maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
 * maxSubarraySum([4, 2, 1, 6], 1) // 6
 * maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
 * maxSubarraySum([], 4) // null
 */

const maxSubarraySumSlide = (arr, num) => {
  if (num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }

  let start = 0;
  let scout = 1;
  let sum = arr[start];
  const sumArr = [];
  while (start !== arr.length - num) {
    const isLimitReached = scout - num === start;
    if (isLimitReached) {
      start++;
      scout = start + 1;
      sumArr.push(sum);
      sum = arr[start];
    } else {
      sum += arr[scout];
      scout++;
    }
  }

  sumArr.sort((a, b) => a - b);
  return sumArr[sumArr.length - 1];
};

console.log("Should be 17:", maxSubarraySumSlide([1, 2, 5, 2, 8, 1, 5], 4));
console.log("Should be 17:", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));

console.log("700: ", maxSubarraySumSlide([100, 200, 300, 400], 2));
console.log("39: ", maxSubarraySumSlide([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log("5: ", maxSubarraySumSlide([-3, 4, 0, -2, 6, -1], 2));
console.log("5: ", maxSubarraySumSlide([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log("null: ", maxSubarraySumSlide([2, 3], 3));

/** ------------------------------- 15. MIN SUBARRAY LENGTH  - SLIDING WINDOW PATTERN -------------------------------------- */
/**
 * minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2
 * minSubArrayLen([2, 1, 6, 5, 4], 9) // 2
 * minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
 */

const minSubArrayLen = (arr, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log("Length should be 2: ", minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log("Length should be 2: ", minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(
  "Length should be 1: ",
  minSubArrayLen([63, 1, 7, 11, 2, 9, 8, 21, 11, 33, 19], 52)
); // 1
console.log(
  "Length should be 3: ",
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)
); // 3
console.log(
  "Length should be 5: ",
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
); // 5
console.log("Length should be 2: ", minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(
  "Length should be 0: ",
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
); // 0

/** ------------------------------- 15. LONGEST SUB STRING  - SLIDING WINDOW PATTERN -------------------------------------- */
/**
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('bbbbb') // 1
 */

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

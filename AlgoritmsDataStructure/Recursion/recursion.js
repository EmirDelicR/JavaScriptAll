/**
 * 1. SUM RANGE
 * 2. FACTORIAL
 * 3. COLlECT ODD/EVEN VALUES
 * 4. MIMIC MATH.POWER() FUNCTION
 * 5. PRODUCT OF ARRAY
 * 6. SUM OF NUMBER
 * 7. FIBONACCI
 * 8. REVERSE STRING
 * 9. IS PALINDROME
 * 10. FLAT ARRAY
 */

/** ------------------------------- ADD UP TO NUMBER -------------------------------------- */

const addUpTo = n => (n * (n + 1)) / 2;
const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(3));

/** ------------------------------- FACTORIAL -------------------------------------- */
const factorial = num => {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};

console.log("Factorial: ", factorial(7));

/** ------------------------------- COLlECT ODD/EVEN VALUES -------------------------------------- */
const EVEN = 2;

const collectOddEvenValues = (arr, type = 1) => {
  let resultOdd = [];
  let resultEven = [];

  const helper = slicedArr => {
    if (slicedArr.length === 0) {
      return;
    }

    if (slicedArr[0] % 2 !== 0) {
      resultOdd.push(slicedArr[0]);
    } else {
      resultEven.push(slicedArr[0]);
    }

    helper(slicedArr.slice(1));
  };

  helper(arr);

  if (type === EVEN) {
    return resultEven;
  }

  return resultOdd;
};

console.log(
  "ADD/EVEN: ",
  collectOddEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], EVEN)
);

/** ------------------------------- MIMIC MATH.POWER() FUNCTION -------------------------------------- */

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
};

console.log("Must be 1: ", power(2, 0));
console.log("Must be 4: ", power(2, 2));
console.log("Must be 16: ", power(2, 4));

/** ------------------------------- PRODUCT OF ARRAY -------------------------------------- */

const productOfArray = arr => {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] * productOfArray(arr.slice(1));
};

console.log("Product of array is 6: ", productOfArray([1, 2, 3]));
console.log("Product of array is 60: ", productOfArray([1, 2, 3, 10]));

/** ------------------------------- SUM OF NUMBER -------------------------------------- */

const recursiveRange = num => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

console.log("This should be 21: ", recursiveRange(6));
console.log("This should be 55: ", recursiveRange(10));

/** ------------------------------- FIBONACCI -------------------------------------- */

const fib = num => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log("This should be 3: ", fib(4));
console.log("This should be 55: ", fib(10));
console.log("This should be 317811: ", fib(28));
console.log("This should be 9227465: ", fib(35));

/** ------------------------------- REVERSE STRING -------------------------------------- */

const reverse = str => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

console.log("Reversed is rime: ", reverse("emir"));
console.log("Reversed is rimad: ", reverse("damir"));

/** ------------------------------- IS PALINDROME -------------------------------------- */

const isPalindrome = string => {
  const reverse = str => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  };

  let reversed = reverse(string);
  return reversed === string ? true : false;
};

console.log("Should be false: ", isPalindrome("emir"));
console.log("Should be false: ", isPalindrome("damir"));
console.log("Should be true: ", isPalindrome("tot"));

/** --------------------------- SOME FUNCTION --------------------------------------- */

const someRecursive = (arr, func) => {
  const helper = arr => {
    if (arr.length === 0) {
      return false;
    }
    if (func(arr[0])) {
      return true;
    }
    return helper(arr.slice(1));
  };
  return helper(arr);
};

console.log("Baba jaga: ", someRecursive([1, 2, 3, 4], val => val > 2));

/** --------------------------- FLAT ARRAY --------------------------------------- */

const flatten = arr => {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = [...flatArr, ...flatten(arr[i])];
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

console.log("Flatten array: ", flatten([1, 2, [3, 4]]));

console.log("Flatten array: ", flatten([1, 2, [3, [4, 5]]]));

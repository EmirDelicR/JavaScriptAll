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

const addUpToNum = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

performanceTimer(addUpTo, [10000000]);
performanceTimer(addUpToNum, [10000000]);
/** Use with multiple args */
const test = (a, b) => a + b;
performanceTimer(test, [1, 2]);

/** ------------------------------- END -------------------------------------- */

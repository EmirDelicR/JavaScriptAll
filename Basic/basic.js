/*----------------------- Logical operators and short-circuit evaluation -----------------------------*/
console.log('-----------------Logical operators and short-circuit evaluation-----------------');
var test = true;
let isTrue = function() {
    console.log('This is true');
}

let isFalse = function() {
    console.log('This is false');
}

( test && isTrue() ); // => if(test){ isTrue()};

( test || isFalse()); // If test is true isFalse() is not gona executed

// In functions to set default var
function test(attr) {
    let atribute = attr || 'default';
}

/*---------------------------------------- Common Array Methods --------------------------------------*/
console.log('--------------Common Array Methods-----------------');
let arr = ['a', 'b', 'c'];
console.log('Normal array', arr);
arr.push("d"); // Add element at end
console.log('Array call push method', arr);
let pop = arr.pop() // remove and return last element
console.log('Result of arr.pop() store in pop variable: ', pop);
console.log('Array call pop method', arr);
let arr2 = ['e', 'f'];
let arr_concat = arr.concat(arr2); // conbine two arrays
console.log('Array call concat method', arr);
console.log('arr2 after calling concat: ', arr2);
console.log('arr_concat that store result of conct method on arr and arr2', arr_concat);
let arr_join = arr.join("--"); // join elements 
console.log('Array call join method', arr);
console.log('arr_join after calling join: ', arr_join);
arr.reverse(); // reverse array
console.log('Array call reverse method', arr);
arr.reverse();
let shift = arr.shift(); // Remove first element
console.log('Array call shift method', arr);
console.log('Result of arr.shift() store in shift variable: ', shift);
let unshift = arr.unshift('k'); // Add element on first place
console.log('Array call unshift method', arr);
console.log('Result of arr.unshift() store in unshift variable: ', unshift);
let slice = arr.slice(1,3); // slice array from index to index
console.log('Array call slice method', arr);
console.log('Result of arr.slice() store in slice variable: ', slice);
arr.sort(); // sort array
console.log('Array call sort method', arr);
let splice = arr.splice(1,2, "Test"); // Splice array and add new entry
console.log('Array call splice method', arr);
console.log('Result of arr.splice() store in splice variable: ', splice);

/*---------------------------------------- Copying Arrays (deep and shallow) --------------------------------------*/
console.log('-----------------Copying Arrays (deep and shallow)---------------');
let newArray = [1, 2, 3, 4, 5, 6];
// slice
console.log('Original array: ', newArray);
let copy_slice = newArray.slice(0); // copy array using slice
console.log('Array copyed using slice: ', copy_slice);
// spred operator
let copy_spred = [...newArray];
console.log('Array copyed using spred operator ... : ', copy_spred);
// Array.from() method
let orginal_arr = [[1,2], [3,4], 5];
let arr_copy = Array.from(orginal_arr);
console.log('Original array: ', orginal_arr);
console.log('Copy of orginal array: ', arr_copy);
console.log('Now change arr_copy array arr_copy[0].push(3): ');
arr_copy[0].push(3);
console.log('Orginal array: ', orginal_arr);
console.log('Copy of orginal array: ', arr_copy);

// Deep copy
function copy(o) {
    let output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object") ? copy(v) : v;
    }
    return output;
 }

let deep_arr = [[1,2], [3,4], 5];
let deep_copy = copy(deep_arr);
console.log('Original array: ', deep_arr);
console.log('Copy of deep array: ', deep_copy);
console.log('Now change deep_copy array deep_copy[0].push(3): ');
deep_copy[0].push(3);
console.log('Deep array: ', deep_arr);
console.log('Copy of deep array: ', deep_copy);

// deep copy using JSON it is not recomendet for large arrays or objects
let a = [[1,2], [3,4], 5];
let b = JSON.parse(JSON.stringify(a));
console.log(b); // 
b[0].push(17);
console.log('Deep array using JSON: ', a);
console.log('Copy of deep array using JSON: ', b);

/**------------------------- Random numbers & parseInt ------------------------------- */
console.log('-------------------Random numbers & parseInt-----------------------');
let rand_num = Math.round(Math.random() * 10); // from 0-10
console.log('Random number : ', rand_num);

function randomRange(min, max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}
console.log('Random number in the range 3-9: ', randomRange(3, 9));

console.log('Parsing string "007" to integer: ',parseInt("007"));

/**--------------------------------- for in / for of loops  ------------------------------ */
console.log('----------------- for in / for of loops ------------------------------');

let person = {fname: 'Emir', lname: 'Delic', age: 31};
console.log('for...in loop only iterates over enumerable');
for(let key in person) {
    console.log('Example for for in loop: ', key+' : '+person[key]);
}

let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log('Example for for of loop: ', value);
}

/**--------------------------------- Array Iteration: 8 Methods ---------------------------- */
console.log('Array Iteration: 8 Methods');

let arr_methods = [1, 2, 3, 4, 5];
// forEach

// map

// filter

// reduce

// some

// every

// find
/** ---------------------------- Filter --------------------------------- */

let animals = [
  { name: "A", species: "dog" },
  { name: "B", species: "cat" },
  { name: "C", species: "fish" },
  { name: "D", species: "dog" },
  { name: "E", species: "cat" },
  { name: "F", species: "dog" },
  { name: "G", species: "dog" }
];

/** manually example: */
/*
let dogs = [];
for (let i= 0; i<animals.length; i++){
    if(animals[i].species === 'dog') {
        dogs.push(animals[i]);
    }
}
*/
// using filter function
let dogs = animals.filter(animal => animal.species === "dog");
let rest = animals.filter(animal => !(animal.species === "dog"));
console.log(dogs);
console.log(rest);

/** ------------------------------------ Map ---------------------------------- */
/** manually example: */
/*
let names = [];
for (let i= 0; i<animals.length; i++){
    names.push(animals[i].name);
}
*/
// Using map
let names = animals.map(animal => `${animal.name} is a ${animal.species}`);
console.log(names);

/** ------------------------------ Reduce ---------------------------------------- */
let orders = [
  { amount: 150 },
  { amount: 250 },
  { amount: 400 },
  { amount: 100 }
];

let ordersFlat = [150, 250, 400, 100];

/** manually example */
/*
let total = 0;
for (let i= 0; i<orders.length; i++){
    total += orders[i];
}
*/

let total = orders.reduce((total, order) => {
  console.log(`Sum: ${total} and order: ${order.amount}`);
  return total + order.amount;
}, 0);
/**
 * Short
 * let total = orders.reduce( (total, order) => total + order.amount , 0);
 */
console.log(total);

// Turn this in json
let string = `emir delic  waffle iron  80  2
emir delic  blender  200  1
emir delic  knife  10  4
amir delic  waffle iron  80  1
amir delic  knife  10  2
amir delic  pot  20  3`;

const convertString = () => {
  let tab = "  ";
  let tmpArray = string
    .split("\n")
    .map(line => line.split(tab))
    .reduce((customers, line) => {
      customers[line[0]] = customers[line[0]] || [];
      let obj = {
        name: line[1],
        price: line[2],
        quant: line[3]
      };
      customers[line[0]].push(obj);

      return customers;
    }, {});

  return tmpArray;
};

console.log(convertString());

/** ----------------------------   Closures -------------------------------------------- */
// A closure is the combination of a function and the lexical environment within which that function was declared.

function makeFunc() {
  var name = `Closures all: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures`;
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

/** ----------------------------   Currying -------------------------------------------- */
// Creates a function that accepts arguments of func and either invokes func returning its result,
// if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on.
// The arity of func may be specified if func.length is not sufficient.
let dragon = (a, b, c) => `${a} is a ${b} dragon that breaths ${c}!`;
console.log(dragon("Bog", "tiny", "fire"));
// now in currying
let dragon2 = a => b => c => `${a} is a ${b} dragon that breaths ${c}!`;
console.log(dragon2("Bog")("tiny")("fire"));
console.log("Lo!!!", "https://lodash.com/docs#curry");

/** ----------------------------   Closures -------------------------------------------- */

import { externalArray, externalFunction } from "./external";

/** Scope */
const run = () => {
  let b = 2;
  console.log("This is inner B: ", b);
  {
    // b on line 7 is in own scope
    let b = 3;
    console.log("This is nested B: ", b);
  }
};

run();

/** Constants can not be reassign */

const array = [1, 2, 3];
// This works
array.push(4);
console.log("Const Array after pushing element: ", array);
// this does not work
// array = [1];

/** Template literals */
const name = "Some name";
console.log(`Hello ${name}`);

const print = () => {
  let luke = "blue";
  let vader = "red";
  let message = `Luke first uses a ${luke}-colored light saber.But his father, Vader, wields a ${vader}-colored light saber.`;
  console.log(message);
};
print();

/** Spread operators */
let first = [7, 8, 9];
let second = [6, ...first, 10];
console.log("Example with spread operator: ", second);

const spreadPrint = (...params) => {
  console.log("Example with spreading of arguments: ", params);
};
spreadPrint(1, 2, 3);

function butter(...params) {
  let a = [1, 2, 3, ...params];
  return a;
}

console.log(butter(4, 5, 6));

/** Destructuring assignment - arrays*/
let newArray = [100, 200, 300];
let [index1, ...index2] = newArray;
console.log("Example of destructuring args: ", index1, index2);

/** Destructuring assignment - objects*/
let wizard = {
  magical: true,
  power: 10
};
let { magical, power } = wizard;
console.log(magical, power);

/** Array functions and scoping */
let firstLevel = "First level";
const test = () => {
  let secondLevel = "Second level";
  console.log(firstLevel);
  const testLev = () => {
    console.log(firstLevel, secondLevel);
  };
  testLev();
};
test();

/** Map function */

let points = [10, 20, 30];
let newPoints = points.map(elem => elem + 1);
console.log("Map example: ", newPoints);

/** Filtering function */
const scores = [90, 85, 67, 71, 70, 55, 92];
let pass = scores.filter(grade => grade >= 70);
console.log("Filter Example: ", pass);

/** modules */
// import { externalArray, externalFunction } from "./external";
console.log(externalArray);
externalFunction();

/**Classes in es6 */
import Entity from "./entity";
import Child from "./child";

let entity = new Entity("Some Name");
entity.hello();

let child = new Child("Some Child Name");
child.hello();

/** Weather app */

import fetchWeather from "./api";

let $input = document.getElementById("weather-input");
let $error = document.getElementById("error");
let $button = document.getElementById("getData");
let $paragraph = document.getElementById("weather-paragraph");

const presentData = (tmp, name, desc) => {
  $paragraph.innerHTML = `City: ${name} <=> Temp: ${Math.round(
    tmp,
    3
  )}  *C <=> state: ${desc}`;
};

$button.addEventListener("click", () => {
  if ($input.value) {
    let weatherData = fetchWeather($input.value);
    weatherData
      .then(data => {
        if (data.code !== 200) {
          console.log(data.message);
          return;
        }
        presentData(data.main.temp, data.name, data.weather[0].description);
      })
      .catch(err => console.log(err));
  } else {
    $error.innerHTML = "Input city name!";
  }
});

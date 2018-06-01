let object = {
    name: "Test Object",
    run: function() {
        console.log("Runing");
    },
    hello: function() {
        console.log("Hello from " + this.name);
    }
    
}

object.run();
object.hello();

let helloFunction = object.hello;
/** Missing this */
helloFunction(); 

/** Force object binding */
let boundFunction = helloFunction.bind(object);
boundFunction();
let functionX = object.hello.bind(object);
functionX();

let button = document.getElementsByClassName('someClass')[0];

button.addEventListener('click', function() {
    console.log('button presed');
    functionX();
     
});

/** ---------------------------- Objects (Classes) in Java Script - new keyword --------------------------------- */
function Person(saying) {
    this.saying = saying;
    /*
    return {
        dumbObject: true
    }
    */
}

Person.prototype.talk = function() {
    console.log('I say:', this.saying);
}

// this is replacement for 'new' keyword - spawn  # new is reserved keyword
/**
 * new does 4 things:
 * 1. create a new object
 * 2. set the prototype
 * 3. execute constructor with "this"
 * 4. return the created object (sometimes)
 */

function spawn(constructor) {
    // Create a new object
    var obj = {};
    // set the prototype
    Object.setPrototypeOf(obj, constructor.prototype);
    // execute constructor with "this"
    /* In ES6
        // converte into a Array
        var argsArray = Array.from(arguments);
        constructor.apply(obj, argsArray.slice(1));
    */
   // in ES%
   var argsArray = Array.prototype.slice.apply(arguments);
   // constructor.apply(obj, argsArray.slice(1));
   // retrun a object
   return constructor.apply(obj, argsArray.slice(1)) || obj; 
}

/**
 * This is replacment for somePerson = new Person("Some string");
 */
var somePerson = spawn(Person, "Test string");
console.log(somePerson)
somePerson.talk();

/** ---------------------------- __proto__ vs prototype ------------------------------------ */
/**
 * __proto__ is the actual object that is used in the lookup chain to resolve methods, 
 *  etc. prototype is the object that is used to build __proto__ when you create an object with new:
 * 
 */

 /** ------------------------------ Object.create ---------------------------------------- */
// Object.create -> The Object.create() method creates a new object, using an existing object to provide the newly created object's __proto__ .
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
 
const me = Object.create(person);
console.log("Is person prototype of the me? It is ", person.isPrototypeOf(me));
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
  
me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

/** Behind the scene */

function objectCreate(proto) {
    // create a new object
    const obj = {};
    // set the prototype
    Object.setPrototypeOf(obj, proto);
    // return a object
    return obj;

}
const newMe = objectCreate(person);
console.log("Is person prototype of the newMe? It is ", person.isPrototypeOf(newMe));
newMe.name = "Matthew-2";
newMe.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

/** with init function like a constructor */
const cat = {
    init: function(sound) {
        this.sound = sound;
        // with return this we can cain this function
        return this;
    },
    makeSound: function() {
        console.log(this.sound);
    }
}

const cat1 = Object.create(cat).init("cat sound");
cat1.makeSound();


/** ----------------------------   Clases -------------------------------------------- */
class Test {
    constructor(sound) {
        this.sound = sound;
    }
    talk() {
        return this.sound;
    }
}
 
class TestExtended extends Test {
    constructor() {
        super("Some sound from TestExtended")
    }
}


let smallTest = new Test("Some sound from class");
let smallTestExtended = new TestExtended();
console.log(smallTest.talk());
console.log(smallTestExtended.talk());
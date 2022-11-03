// ... rest operator to pass any number of args to a func
// then traverse over args array to get all arguments for func

const func = (...args) => {}
// ------------------------------------------------------

let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min(...numbers); // ... spread operator
console.log(minNum); //-12

// Spread syntax (...) allows an iterable, such as an array or string, 
// to be expanded in places where zero or more arguments (for function calls) or 
// elements (for array literals) are expected. 
// In an object literal, the spread syntax enumerates the properties of an object and 
// adds the key-value pairs to the object being created.

// ---------------------------------------------------------------------

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today,tomorrow} = HIGH_TEMPERATURES; // destructure assignment
//note the variable names are same
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; // diff names after destructure
// now the variables names are highToday and highTomorrow

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const {today: {high: highTodayy, low: lowTodayy}} = LOCAL_FORECAST; // nested destructure

// ----------------------destructure array-------------------------------------------------------

const [x,y] = [1,2,3,4];
// x=1,y=2
const [f,g,,h] = [1,2,3,4,5];
// f=1,g=2,h=4

// swapping two variables using array destructure
let aa = 6;
let bb = 8;
[aa,bb] = [bb,aa];

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
// The console would display the values 1, 2 and [3, 4, 5, 7].

// Variables a and b take the first and second values from the array. 
// After that, because of the rest parameter's presence, 
// arr gets the rest of the values in the form of an array. 
// The rest element only works correctly as the last variable in the list. 

// As in, you cannot use the rest parameter to catch a subarray that leaves out the 
// last element of the original array.



// ---------Use Destructuring Assignment to Pass an Object as a Function's Parameters--------------------------------------------------------------------------------------
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max,min}) => (max + min) / 2.0; //destructure on parameters itself - notice variable names though


// ------------template literal for complex strings------------------------
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; // notice `` and ${variable}

// while declaring methods of a object, no need to write function keyword

// the class keyword declares a new function, to which a constructor is added. 
// This constructor is invoked when new is called to create a new object.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);


// get set functions
// ex defining object with F temp
// when you get it, in get func you return the celsius one
// when you are setting it, you are getting the input in celsius, you set in fareinheight
// but when you get it again - it is still in celsius

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object

<script type="module" src="filename.js"></script>
// A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

// import {} from "./path";
// export {}
//import * as objectName from "./path"
// above will be used as objectName.func1();

// export default
// Usually you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

import add from "./math_functions.js";
// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. 
// You can use any name here when importing a default.







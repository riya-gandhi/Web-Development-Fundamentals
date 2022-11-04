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

// -------------------------------------------------------------------------

const makeServerRequest = new Promise((resolve,reject)=>{
});

//promise takes a function as input with 2 params - has 3 states - pending - accept - reject

const makeServerRequestt = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequestt.then((result) => {
  console.log(result);
});
makeServerRequestt.catch((error) => {
  console.log(error);
});

// -----------------------end of ES6----------------------------------------
// -----------------------Regex or Regular Expressions begin----------------------------------------

// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// The test method here returns true. 'code' search will return false as here theres literal match

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // OR for regex matching
let result = petRegex.test(petString); // matched literrally case sensitive

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // notice "/fcc/i" i flag is to match string not literraly
let result2 = fccRegex.test(myString);

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the 
// .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]
// NOTE: we can have multiple flags /gi for globalsearch and case insensitive

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
// Both of these test calls would return true.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2);
batStr.match(bgRegex2);
matStr.match(bgRegex2);
// In order, the three match calls would return the values ["cat"], ["bat"], and null.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex); // range of nums and alphabets both

let myRegexx = /[^0-9aeiou]/gi; // ^ for negation of character class[]

let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g; // WILL RETURN ARR WITH CONSECUTIVE MORE THAN ONE OCCURRENCE
// NOTICE THE SYNTAX: THIS IS NOT USED IN CHARACTER CLASS[]
let result3 = difficultSpelling.match(myRegex2);
console.log(result3); //["ss","ss"]


let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; // ZERO OR MORE TIMES
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.











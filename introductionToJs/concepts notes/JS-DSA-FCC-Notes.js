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

// -----------------------------------------------------------------------------


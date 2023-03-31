// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
// let x = true;
// let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//In programming, data types is an important concept.
//To be able to operate on variables, it is important to know something about the type.

// let x1 = 16 + "Volvo";
// let x2 = "16" + "Volvo";

// console.log(x1)
// console.log(x1)

//When adding a number and a string, JavaScript will treat the number as a string.

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:

// let x1 = 16 + 4 + "Volvo" + 8 + 8;
// let x2 = "Volvo" + 16 + 4 + 5 + 5;
// let x3 = "Volvo" + 16 + 4 + "Volvo";

// console.log(x1)
// console.log(x2)
// console.log(x3)

// In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
// In the second example, since the first operand is a string, all operands are treated as strings.

//--------------------------------------------------

// JavaScript Types are Dynamic
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String

//--------------------------------------------------

// JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".

// Strings are written with quotes. You can use single or double quotes:

// // Using double quotes:
// let carName1 = "Volvo XC60";

// // Using single quotes:
// let carName2 = 'Volvo XC60';

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// // Single quote inside double quotes:
// let answer1 = "It's alright";

// // Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";

// // Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';

//--------------------------------------------------

// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:

// Example
// // With decimals:
// let x1 = 34.00;

// // Without decimals:
// let x2 = 34;

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:

// Example
// let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123

// console.log(y)

// console.log(z)
//--------------------------------------------------

// JavaScript Booleans
// Booleans can only have two values: true or false.
//Booleans are often used in conditional testing.

// Example
// let x = "5";
// let y = 5;
// let z = 6;
// console.log(x === y)       // Returns true
// console.log(x == z)       // Returns false

//--------------------------------------------------

// JavaScript Arrays
// JavaScript arrays are written with square brackets.

// Array items are separated by commas.

// The following code declares (creates) an array called cars, containing three items (car names):

// Example
// const cars1 = ["Saab", "Volvo", "BMW", 1, "5"];

// console.log(cars1[4]);

// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

//--------------------------------------------------

// JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

// Example
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

//--------------------------------------------------

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression:

// Example
// typeof ""             // Returns "string"
// typeof "John"         // Returns "string"
// typeof "John Doe"     // Returns "string"
// typeof 0              // Returns "number"
// typeof 314            // Returns "number"
// typeof 3.14           // Returns "number"
// typeof (3)            // Returns "number"
// typeof (3 + 4)        // Returns "number"

//--------------------------------------------------

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// Example
// let car;    // Value is undefined, type is undefined
// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

// Example
// car = undefined;    // Value is undefined, type is undefined

//--------------------------------------------------

// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.

// Example
// let car = "";    // The value is "", the typeof is "string"
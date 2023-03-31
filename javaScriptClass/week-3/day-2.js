// JavaScript Arrays

// An array is a special variable, which can hold more than one value:

//const cars = ["Saab", "Volvo", "BMW"];

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

//const array_name = [item1, item2, ...]; 
//const student = ['a', 20, 'b', 30, 'c', 40]   
//console.log(student)  

// const cars = ["Saab", "Volvo", "BMW"];

// Spaces and line breaks are not important. A declaration can span multiple lines:

// Example
// const cars = [
//   "Saab",
//   "Volvo",
//   "BMW"
// ];

// console.log(cars)  


// You can also create an array, and then provide the elements:

// Example
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
cars['xyz'] = "saab"

console.log(typeof(cars))  


// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

// Example
// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars)  


// Accessing Array Elements
// You access an array element by referring to the index number:


//const cars = ["Saab", "Volvo", "BMW"];
// //let car = cars[0];
// console.log(car)

// Changing an Array Element
// This statement changes the value of the first element in cars:

//cars[0] = "Opel";
// Example
//const cars = ["Saab", "Volvo", "BMW"];
//cars[4] = "Opel";
//cars=["xyz"]

//console.log(cars)

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = ['g', 'h', 'i'];

//const array3 = ['a', 'b', 'c', 'd', 'e', 'f']
//const array4 = array2.concat(array1,array3);

//console.log(array4);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push();

// console.log(count)

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 150);

// console.log(found);
// expected output: 12


// var a1 = [,,,]; 
// var a2 = new Array(3); 
// console.log(a1[0]) 
// console.log(a2[0])

// var a = [1,2,3,4,5];
// console.log(a.slice(0,3))

// JavaScript Array Iteration
// Array iteration methods operate on every array item.

// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

// Example
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

//---------------------------------------------






//---------------------------------------------

// const cars = ["Saab", "Volvo", "BMW"];
// // Here cars[0] is "Saab"
// {
//   const cars = ["Toyota", "Volvo", "BMW"];
//   // Here cars[0] is "Toyota"
// }
// // Here cars[0] is "Saab"

//---------------------------------------------

// var cars = ["Saab", "Volvo", "BMW"];
// // Here cars[1] is "Saab"

// {
//   var cars = ["Toyota", "Volvo", "BMW"];
//   // Here cars[0] is "Toyota"
// }
// // Here cars[0] is "Toyota"

//---------------------------------------------


//---------------------------------------------



//---------------------------------------------

// const elements = ['Fire', 'Air', 'Water'];


// console.log(elements.join());

// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

// console.log(elements.join(','));

// const array1 = ['one', 'two', 'three'];

// console.log('array1:' +  array1);
// console.log('array1:' ,  array1);

// let x=3
// a  = "A" + "2" // A2
// a1 = "A" + "B" // AB
// a2 = 2 + "A" // 2A
// a3 =  "a" + x //a3
// console.log(a3)



//---------------------------------------------

//const array1 = ['a', 'b', 'c'];

// array1.forEach(i => console.log(i)); //1

// for(i=0; i<3; i++){

//    console.log(array1[i])

// }

 const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x + 5);

console.log(map1);
// expected output: Array [2, 8, 18, 32]






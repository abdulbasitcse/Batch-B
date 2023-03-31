// function compare()
// {
//     int num=2;
//     char b=2;
//     if(a==b)
//         return true;
//     else
//         return false;
// }


// function height()
// {	
//     var  height = 123.56;
//     var type = (height>=190) ? "tall" : "short";
//     return type;
// }

// console.log(height ())


//-----------------------------

//Variables declared with the let keyword can have block scope.

// {
//     let x = 2;
//     console.log(x)
//     document.write(x)
// }
// x can NOT be used here

//------------------

//Variables declared with the var keyword can NOT have block scope.

// {
//     var x = 2;
//   }
// // x CAN be used here

//-----------------------

//Local Scope
//Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName
// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }

//-------------------------------

// Function Scope
// JavaScript has function scope: Each function creates a new scope.

//Variables defined inside a function are not accessible (visible) from outside the function.

//Variables declared with var, let and const are quite similar when declared inside a function.

//   function myFunction() {
//     var carName = "Volvo";   // Function Scope
//   }

//   function myFunction() {
//     let carName = "Volvo";   // Function Scope
//   }

//   function myFunction() {
//     const carName = "Volvo";   // Function Scope
//   }

//--------------------------------------------

// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// }

//----------------------------------

// Global Scope
// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:

// var x = 2;       // Global scope
// let x = 2;       // Global scope
// const x = 2;       // Global scope
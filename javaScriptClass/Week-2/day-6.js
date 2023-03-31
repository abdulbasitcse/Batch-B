// JavaScript For Loop

// Loops can execute a block of code a number of times.

// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Often this is the case when working with arrays:

// Instead of writing:

// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";

// You can write:

// for (i = 0; i <= 2; i++) {
//     console.log(x)
// }


// Example 1: Display Numbers from 1 to 5
// // program to display numbers from 1 to 5
// const n = 5;
// // looping from i = 1 to 5
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     console.log(i);     // printing the value of i
// }
//Example 2: Display a Text Five Times
// // program to display text 5 times
// const n = 5;
// // looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//     console.log(`I love JavaScript.`);
// }
//--------------------------------------------------

// The For Loop
// The for statement creates a loop with 3 optional expressions:

// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }

// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.

// Example
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// From the example above, you can read:

// Expression 1 sets a variable before the loop starts (let i = 0).

// Expression 2 defines the condition for the loop to run (i must be less than 5).

// Expression 3 increases a value (i++) each time the code block in the loop has been executed.

//-------------------------------------------------

// Expression 1

// Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).

// This is not always the case. JavaScript doesn't care. Expression 1 is optional.

// You can initiate many values in expression 1 (separated by comma):

// for (let i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "<br>";
//   }

// And you can omit expression 1 (like when your values are set before the loop starts):

// let i = 2;
// let len = cars.length;
// let text = "";
// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }

//--------------------------------------------------------------

// Expression 3
// Often expression 3 increments the value of the initial variable.

// This is not always the case. JavaScript doesn't care. Expression 3 is optional.

// Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

// Expression 3 can also be omitted (like when you increment your values inside the loop):

// Example
// let i = 0;
// let len = cars.length;
// let text = "";
// for (; i < len; ) {
//   text += cars[i] + "<br>";
//   i++;
// }

//-------------------------

// Loop Scope
// Using var in a loop:

// Example
// var i = 5;

// for (var i = 0; i < 10; i++) {
//   // some code
// }

// // Here i is 10

// Using let in a loop:

// Example
// let i = 5;

// for (let i = 0; i < 10; i++) {
//   // some code
// }

// // Here i is 5


// for (i = 1; i <= 10; i++) {
//         console.log(i)
//      }
    

    //  console.log(1)
    //  console.log(2)
    //  console.log(3)
    //  console.log(4)
    //  console.log(5)
    //  console.log(6)
    //  console.log(7)
    //  console.log(8)
    //  console.log(9)
    //  console.log(10)

    
//    for(x=1; ; x++){
//         console.log(x)
//         if(x>=10){
//             break;
//         }
//     }
        

// let j = 1;
// for (;;) {
//   if (j > 10) {
//     break;
//   }
//   console.log(j);
//   j += 2;
// }


let sum = 0;
for (let i = 0; i<5; sum += i, i++);


// sum=0
// i=0
// 0<5
// sum=0+0=0
// i=1

// 1<5
// sum=0+1=1
// i=2

// 2<5
// sum=1+2=3
// i=3

// 3<5
// sum=3+3=6
// i=4

// 4<5
// sum=6+4=10
// i=5

// 5<5



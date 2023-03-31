// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
// Example
// Make a "Good day" greeting if the hour is less than 18:00:

//hour=10
// if (hour < 18) {
//     greeting = "Good day";
//     console.log(greeting)
//   }

// var hour;
//---------------------------------------

// Use the else statement to specify a block of code to be executed if the condition is false.

// Example
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":


// hour=20
// if (hour < 18) {
//     greeting = "Good day";
//     console.log(greeting)
//   } else {
//     greeting = "Good evening";
//     console.log(greeting)
//   }

//   console.log(greeting)
  //console.log(greeting)

//-----------------------------------------

// Use the else if statement to specify a new condition if the first condition is false.

// Example
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

// time=50
// if (time < 10) {
//   greeting = "Good morning";
//   console.log(greeting)
// } else if (time < 20) {
//   greeting = "Good day";
//   console.log(greeting)
// } else if (time < 30) {
//     greeting = "Good day 2";
//     console.log(greeting)
// } else if (time = 0) {
//     greeting = "Good day 3";
//     console.log(greeting)
// }     
// else {
//   greeting = "Good evening";
//   console.log(greeting)
// }

//-----------------------------------

//You can have if statements inside if statements, this is called a nested if.

    // var num = 20
    // if (num >= 10) {
    //   console.log("Num is more than 10.")
    //   if (num > 15) {
    //     console.log("Num is also more than 15.")
    //    }
    // } 
    // else {
    //     console.log("Num is less than 10.")
    // }
  
//------------------------------------

// Use the else if statement to specify a new condition if the first condition is false.

// var time = 22
//   if (time < 10) {
//     console.logn("Good morning.")
//   } 
//   else if (time < 20) {
//     console.log("Good day.")
//   } 
//   else {
//     console.logn("Good evening.")
//   }

//-----------------------------
//   a = 14
//   b = 14
//   if (a < b) {
//     console.logn("a is less than b.")
//   } 
//   else if (a > b) {
//     console.lognn("a is more than b.")
//   } 
//   else {
//     console.logn("a and b are equal.")
//   }

//-----------------------------------
// The switch statement is used to perform different actions based on different conditions.

// Use the switch statement to select one of many code blocks to be executed.

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// Example
// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

// day = new Date().getUTCDate()
// console.log(day)
x=10, y=2
a=1,b=10
day1= a+5 //6
x='hhhghhghhh'
switch (day1) {
  case 0:
    day = "Sunday";
    console.log(day)
    //break;
  case 'hhhghhghhh':
    day = "Monday";
    console.log(day)
    break;
  case 2:
     day = "Tuesday";
     console.log(day)
    break;
  case 3:
    day = "Wednesday";
    console.log(day)
    //break;
  case '4':
    day = "Thursday";
    console.log(day)
    break;
  case false:
    day = "Friday";
    console.log(day)
    break;
  case '6':
    day = "Saturday";
    console.log(day)
  default :
  console.log("No Day")
}


// a=5;
// b=2;
// c=6;
// d= 0;
// f=1;
// if (a>b && a>c && a>d && a>f)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(d);
// }
// else
// {
//     console.log(f);
// }

// month=1
// year=2016
// for(month=1;month<=12;month++){
//   if(month==1 && year==2016)
//   console.log("january 2016 has 31 day")
  
//   if(month==2 && year==2016)
//   console.log("feb 2016 has 28 day")

// }


// switch(expression) {
//   case label:
//     {}
// }
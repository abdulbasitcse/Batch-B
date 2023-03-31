// JavaScript Errors

// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

// Errors Will Happen!
// When executing JavaScript code, different errors can occur.

// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

// Example
// In this example we misspelled "console" as "consolexyz" to deliberately produce an error:

// try {
//   consoule.log("Welcome guest!");
// }
// catch(err) {
//     console.log(err.message)
// }

//consolee.log("Error")

// arr=[10,20,30,40,50,60,70,80,90]
// console.log(arr[15])

// console.log1("xyz")

// function fun(){
//     //const a = 1;
//     try {
//       console.log(`value of a is ${a}`);
//     }
//     catch (error) {
//       console.log("Error:" + error.message)
//     }
//     finally {
//       console.log("Finally : Finally gets executed always")
//     }
// }

//  fun()

//console.log(`value of a is ${a}`);

//console.log(a);

// try {
//     console.log(a);
// } catch (error) {
//     console.log('An error caught. Error message: ' + error.message);
// };

//num=10

// try {
//     num.toPrecision(1000);
//     console.log("No error")
//     // Have added extra 0 in 100
//   } catch (error) {
//     console.log('thisError Message' + error.message)
//   }

// let num = "a";
// //num.toUpperCase();
// try {
//   num.toUpperCase(); // Trying to convert a number to upper case
//   console.log(num.toUpperCase());
// } catch (err) {
//   console.log("Error caught. Name of the error is:", err.name);
//   console.log("Message of error says:", err.message);
// } finally {
//   console.log("FINALLY BLOCK");
// }

//console.log("Last Line excuted")


// try {
//     let result = add(10, 20);
//     console.log(result);
//   } catch (e) {
//     console.log({ name: e.name, message: e.message });
//   }
//   console.log('Bye');

// const add = (x, y) => {x + y};

// const add1 = function add1(x,y){
//     return x+y
// }  

// try {
//   let result = add1(10, 20);
//   console.log(result);
// } catch (e) {
//   console.log({ name: e.name, message: e.message });
// }
// console.log('Bye');

// const isValidJSON = (str) => {
//   try {
//     JSON.parse(str);
//     return true;
//   } catch {
//     return false;
//   }
// };

// let valid = isValidJSON(`{"language":"JavaScript"}`);
// console.log(valid);

//const add = (x,y)=>x+y

// const add1 = function add1(x,y){
//     return x+y
// }
// let result = 0;
// try {
//   result = add1(10, 20);
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log({result});
// }


// function fn() {
//     try {
//         console.log("1")
//       return 1;
//     } catch {
//       return 2;
//     } finally {
//       return 3;
//     }
//   }
  
//   console.log(fn());
// function add(x, y) {
//     if (typeof x !== 'number') {
//       throw 'The first argument must be a number';
//     }
//     if (typeof y !== 'number') {
//       throw 'The second argument must be a number';
//     }
  
//     return x + y;
//   }
  
//   const result = add(20, 10);
//   console.log(result);
  

// function add(x, y) {
//     if (typeof x !== 'number') {
//       throw 'The first argument must be a number';
//     }
//     if (typeof y !== 'number') {
//       throw 'The second argument must be a number';
//     }
  
//     return x + y;
//   }
  
//   try {
//     const result = add('a', 10);
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
  



//   myFunction1 =(a,b)=> a*b

//   function myFunction(a, b) {
//     let x =10
//     return a * b;             // Function returns the product of a and b
//   }

//    console.log(myFunction1(14, 30));   // Function is called, return value will end up in x


function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
    console.log(carName)  

  }

myFunction()



function add(a,b,c){
    
    console.log(a+b+c)
    c=30
    return a+b+c

}
console.log(add(10,20))





  


  
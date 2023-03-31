// const firstName = "Primathon";
// const lastName = 'Academy';
// console.log(firstName, lastName)

// const firstName = `Primathon`;
// const lastName = `Academy`;

//console.log(firstName, lastName)


// Multi Line String
//const fullName = `Primathon Academy`;

//  const name = "My name is " + firstName   , " "        + lastName
//  console.log(name)

// const music =
// `The quick     h    hhhh
// brown fox
// jumps over
// the lazy dog`;



// console.log(music)

// String which contain single or double quotes
// const text = `He's often called "Johnny"`;
// const text1 = "He is often called 'Johnny'";

// let name1 = `The Doctor`;
// let message1 = `Hello, I'm ${name1}.`;
// let message11 = "Hello, I'm " +name1;

// let message2 = `"I'm The Doctor." She said.`;

// console.log(message11)

// const areaOfSquare = "The area of square is ${5 * 5}";
// const x = `I'm ${2 * 10 + 9 % 9}`;


// const strPrim1 = String(10); // "10"
// const strprime0 = "10"
// const strPrim2 = String(1); // "1"
// const strPrim3 = String(true); // "true"
// const strPrim3 = String(false); // "false"
// const strPrim3 = String(undefined); // "undefined"
// const strPrim3 = String(null); // "null"

// Because strings must be written within quotes, JavaScript will misunderstand this string:

//const text1 = "We are the so-called \'Vikings\' from the north.";
 // The string will be chopped to "We are the so-called ".
//const text2 = 'We are the so-called 'Vikings' from the north.'; // The string will be chopped to "We are the so-called ".

// const name1 = String("A String"); 
// const name = new String("A String");


// console.log(typeof(name1))
// console.log(typeof(name))

// const name1 = 'Primathon'
// const name2 = 'primathon'
// console.log(name1 == name2); // false

// console.log(2 + 2); // Expected output: 4
// console.log(true + 2); // Expected output: 3
// console.log('hello ' + 'everyone'); // Expected output: "hello everyone"
// console.log(2001 +  ': A Space Odyssey'); // Expected output: "2001: A Space Odyssey"

// const word = "Hello Javascript"
// const arr = [1,2,3]
// console.log(arr[1]); //16

 console.log(word.charAt(0)); //16
 console.log(word[0]); //16


// console.log(word.length); // 17
// console.log(word.slice(0, 9)); // "Primathon"
// console.log(word.slice(3, 9)); // "mathon"
// console.log(word.slice()); // "rimathon Academy"

// If indexStart >= str.length, an empty string is returned.
//console.log(word.slice(17, 20)); // ""
// console.log(word.slice(18, 20)); // ""

// If indexStart < 0, the index is counted from the end of the string. More formally, in this case, the substring starts at max(indexStart + str.length, 0).
//console.log(word.slice(-3)); // "y"

const word = "Primathon Academy";
//console.log(word.slice(-7)); // "Academy"
console.log(word.slice(-7, -2)); // "Acade"
console.log(word.slice(-3, -7)); // ""

// If indexStart is omitted, undefined, or cannot be converted to a number (using Number(indexStart)), it's treated as 0.
// console.log(word.slice()); // "Primathon Academy"
// console.log(word.slice(NaN)); // "Primathon Academy"

// If indexEnd is omitted, undefined, or cannot be converted to a number (using Number(indexEnd)), or if indexEnd >= str.length, slice() extracts to the end of the string.
//console.log(word.slice(1,undefined)); // "Primathon Academy"


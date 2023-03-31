// JavaScript to illustrate concat() function
// function func() {

//     // Original string
//     var str = "Welcome";

//     // Joining the strings together
//     var value = str.concat(" to Academy");
//     console.log(value);
// }
//func(); // Welcome to Academy

// arr= [11,10,12]
// console.log(arr.length())

//  let text= "APlz visit Primathon Academy & Academy"
//  let newtext=text.replace(/academy/ig, "Technology")
//  console.log(newtext)

// console.log(text.charAt(15))
// console.log(text.charCodeAt(0))
// let text1=["a", "b", "c"]
// let text="a | b | c | d | e"
// console.log(text)
// console.log(text[0])

// newtext=text.split(" | ")
// console.log(newtext)
// console.log(newtext[0])

// let text="this is book"
// let text1=text.split("")
// console.log(text1)
// let text2 = text1.reverse()
// console.log(text2)
// let text3= text2.join("")
// console.log(text3)

// let text = "zxbdca"
// let text1=text.split("")
// let text2=text1.sort()
// let text3=text2.join("")
// console.log(text3)

// let txt="zxghan"
// console.log(txt.split("").sort().join(""))

//let txt = radar/ level / repaper / deed

// let txt = "level"
// let reversetxt= txt.split("").reverse().join("")
// console.log(reversetxt);
// if(txt==reversetxt){
//     console.log("its is palindrome string");
// }
// else{

//     console.log("its is not palindrome string");
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 3, 3, 6, 7];

// let flag = 0;
// for (i = 0; i < arr1.length; i++) {
//   if (arr1[i] != arr2[i]) {
//     flag = 1;
//   }
// }
// if (flag == 1) console.log("both arrays are not equal");
// else console.log("both arrays are equal");
let str1 = "";
let str = "12sa3e5o";
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "0" ||
    str[i] == "1" ||
    str[i] == "2" ||
    str[i] == "3" ||
    str[i] == "4" ||
    str[i] == "5"
  ) {
    str1 = str1 + str[i];
  }
}

console.log(str1)

let = "asdsad sdadsad  sadsad"
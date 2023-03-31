// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// Example Explained
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

//-------------------------------------------
// The JavaScript for in statement can also loop over the properties of an Array:
// for (variable in array) {
//     code
//   }


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }

// var grade='E';  
// var result;  
// switch(grade)
// {  
//     case 'A':  
//         result="10";  
//     case 'B':  
//         result="9";  
//     case 'C':  
//         result="8";  
//     default:  
//         result="10";  
// }  
// console.log(result);

// function range( length)
// {
// 	 a=5;
// 	for( i=0;i<length;i++)
// 	{
// 		console.log(a);
// 	} 
// }
// range(3);


// var count =0;  
// while (count <10)  
// {  
//      console.log(count);  
//      count++;  
// }  


var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y <x; y++)
     {
    chr=chr+("#");        
      }
 console.log(chr);
 chr='';    
}

// console.log("Outpur of FOR")
// for(i=1;i<=5;i+=2){
//      console.log(i)
// }

// // console.log("Outpur of while")
// j=1
// while(true){
//      console.log(j)
//      //j+=2// j=j+2
// }
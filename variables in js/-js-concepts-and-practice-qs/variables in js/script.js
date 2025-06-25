// let a = 2;
//     console.log(a);
//     // we use let to make var global
//     // constant ko hum change nahi kar sakte
// const c=3;
// // we use console.log to write it on console

// console.log(c)
// // var global hai 
// {
//     let a=77
//     console.log(a)
//     // let is block scope jo block hai us main hi let chale 
//     // ga aghar var hoga to wo globaly scope hai to last main var hoga wo hii likha hoga
// // is liye ho let ko use karte hai tk hum a ko diff jaga pper use karte hai

// }
let k = num
// let k=null;
// let d =44;
// let z="zain bhai";
// // we use "" we there is gap between string ;
// let x = undefined;
// const v = true;
// // that mean we cant change v but if we use let then we can change v
// console.log (k,d,z,x,v);
// console.log (typeof k,typeof d,typeof z,typeof x,typeof v);

// let o ={
//     // key : value
//      name : "omaima" ,
//     //  we use , after one key in object
//      "job code" : 4500 
//     //  we write keys in "" if there is gap 

// }
// console.log(o);
// // we we want to ad d some values in o then we can add it like below
// o.salary = "560crores";
// console.log(o);

// // we can change values like below
// o.salary = "700crores";
// console.log(o);


// VAR ==== VARIABLE
// console.log("var variable uses")

// // hum var ko ese bhi likh sakte hai or var global ahi to jo last wala
// // ho ga wo hi aye ga is main 'hey' likha aye ga
// var greeting = "hi how are you"
//  greeting = "hey"
// //  if we do this then yeh humain undefine dikhay ga
// console.log(greeter)
// greeter= "ohoo"



// LET ==== VARIABLE
// let ko update karsakte hai lekin redeclare nahi 

// example 1
// let  greet ="say hi"
//    greet ="say hello"
// console.log(greet)

// example 2
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

//   TASK NO # 1 --- BASIC

//    let myname = "omaima";
//    console.log(myname)
//    let myage= 10;
//    console.log(myage)
//    let istudent = true;
//    console.log(istudent)

//    TASK NO #2----- MEDIUM LEVEL

// let score = 0;
// let finalscore = score + 5
// console.log(finalscore)

// var mycity = "karachi"
//     mycity = "lahore"
// console.log(mycity)

// TASK NO # 3 ------ INTERMEDIATE LEVEL
 
// sub task 1

// console.log(message);
// var message = "Hello!";  // output = undefined 

// function greet() {
//   if (true) {
//     var greeting = "Hi";
//     let farewell = "Bye";
//     console.log(greeting);
//     console.log(farewell);
//   }
//   console.log(greeting);
//   // console.log(farewell); // Uncommenting this line will cause an error. Why?
// //   because let is block variable and it wikk give error if we  console it outside of block

// }

// greet();
// // output = hi
// //          bye
// //           hi
// //           reference error 

// sub task 2

// const PI = 3.14159;
// console.log("Initial PI:", PI); // output = 3.14159
// PI = 3.14; // Attempt 1
// console.log("Attempt 1 PI:", PI); // This line might not execute due to error
// // yes it will show error that pi is already declare as const cant be redelare and reinitailize

// const user = { name: "Alice", age: 30 };
// console.log("Initial user:", user); 
// // output=  name: "Alice", age: 30
// user.age = 31; // Attempt 2

// console.log("Attempt 2 user:", user);
// // output=  name: "Alice", age: 31
// const numbers = [1, 2, 3];
// console.log("Initial numbers:", numbers);
// // output = [1, 2, 3]
// numbers.push(4); // Attempt 3
// console.log("Attempt 3 numbers:", numbers);
// // output = [1, 2, 3,4]
// numbers = [5, 6]; // Attempt 4
// console.log("Attempt 4 numbers:", numbers); // This line might not execute due to error
// // it will sho error as const can be reassingn

// sub task 3
// let value = 10;
// console.log("Value 1:", value, typeof value);
// // output = value 1 : 10 , int

// value = "Hello";
// console.log("Value 2:", value, typeof value);
// // output = value 2 : hello , string

// let anotherValue = value;
// console.log("Value 3:", anotherValue, typeof anotherValue);
// // output = value 3 : hello , string

// anotherValue = 5;
// console.log("Value 4:", anotherValue, typeof anotherValue);
// // output = value 4 : 5 , int
// console.log("Value 5:", value, typeof value);
// // output : hello ,string
// // anotherValue = 5;: anotherValue is reassigned to a new primitive (number) with the value 5. This does not affect the value of the independent variable value.
// // console.log("Value 5:", value, typeof value);: At this point, value still holds the string "Hello", as it was only reassigned once. The changes 
// // to anotherValue did not impact value.

// let obj1 = { key: "first" };
// let obj2 = obj1;
// obj2.key = "second";
// console.log("Obj1:", obj1);
// // output = obj1 : key : second
// console.log("Obj2:", obj2);
// // output = obj1 : key : second
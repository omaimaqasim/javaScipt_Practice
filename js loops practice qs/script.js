console.log("LOOPS IN JS");

// WE USE FOREACH EPECIALLY FOR ARRAYS ITERATION 

// WE USE WHILE AND DO WHILE LOOP WHEN WE DONT KNOWN HOW MANY TIMES TO ITERATE


console.log("");
console.log("FOR LOOP PROGRAM even numbers");

for (let i = 0; i <=12; i += 2) { 
    if (i % 2 === 0) {
      console.log(i);
    }
  }
console.log("");
console.log("for in loop");

// print no if even or odd bet 1 tp 15

for (let i = 0; i <10 ; i++) {
    if (i%2==0) {
        console.log( i+" its even")
    }
    else{
        console.log(i+" its odd") 
    }

}



let object = {
    name: "mango",
    color: "yellow or green",
    famous: " for mango juice",
}
// best for iterating over array is for of loop and for each 
// for in loop is not best for array
for (const key in object) {

        // const element = object[key];
        // or
        // object[key] ka mean hai ke object main jo key jai us ki 
        // value print kardo
        console.log(key+" :",object[key])

}

let fruits = ["apple","banana","mango"]
for (const index in fruits) {

    console.log(index+ ":" , fruits[index])

    // hum for in loop main array ke liye is liye use nahi karte kun ke yeh index ko bhi print kardeta  hai

}

console.log("");
console.log("for of loop");

// we use for of loop to print iteration of values of objecr
const arr = ["omaima","sadia","sara","sakina"];

for (const value of arr) {
    console.log(`value : ${value}`)
    // console.log("value :",value)

}


console.log("");
console.log("while loop");

 let  no=3;
while (no<=8) {
    console.log(no);
    no++;
}






console.log("");
console.log("do while loop");
let i = 80;
do {
    console.log(i);
    i++;
} while (i<7)

// LOOPS TASK TO SOLVE

// Task 1: Sum of Numbers

// Write a function called sumNumbers that takes an array of numbers as input and returns
//  the sum of all the numbers in the array using a for loop.

function sumnumbers(numbers) {
    let sum = 0;
    //  yeh variable sum jo agy hoga us ki value ko save kare ga
    //   ye for hum use karte hai tk array ke elements ko iterate karsake
    for (let i = 0; i < numbers.length; i++) {
        // is line of code ka mean hai ke index  se intialize horaha hai
        // or i jo arr hai numbers ke name se us ki length se chota hoga

        sum += numbers[i]
        //    yeh line arr ke current iterate wale index ko add kar rahi hai 
        // sum main of phir wahi value sum main restore hoti ja rahi hai 
        //    numbers

    }
    //   yeh line of code bol raha hai ke arr ka sum hoke jo value aye 
    // ko return kardo 
    return sum

}
let numbers = [10, 20, 30, 40, 50];
// main nai ek mistake ki thi ke sumnumbers(numbers) yeh likh diya tha
// jis ka mean hai sumnumbers wala fn main numbers jo array hai wo input le kar fn 
// ko exercute karwal do lekin main nai sum ki value kisi or main store hi nahi
// karwai return ke baad is liye answer nahi a raha tha
const totalsum = sumnumbers(numbers)
console.log(totalsum)

// Task 3: Countdown Timer

// Write a function called countdown that takes a starting
//  number as input. The function should use a while loop 
// to print a countdown from the starting number down to 1.
//  After printing 1, it should print "Blast off!".


let startingno = prompt("enter starting no ")
function countdown(start) {
    
       while (start>=1) {
        console.log(start)
        start--;
       }
       console.log("blast off 💣")
}
countdown(startingno)




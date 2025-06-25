console.log("LOOP PRACTICE QS");



// Question 1: Countdown Timer
// Write a for loop that logs a countdown from 10 down to 1. 
// After the loop, log "Lift off!".
console.log("QNO1) countdown from 10 down to 1 :")
for (let i = 10; i > 0; i--) {
    console.log(i)

}
console.log("lift off!")



// Question 2: Sum of First N Numbers
// Write a for loop that calculates the sum of all 
// integers from 1 to a given number N. Store the sum in
//  a variable and log it. (Let N be 5 for testing).
console.log(" qno2) sum until no :")
let no = 6;
let sum = 0;

for (let i = 1; i <= no; i++) {
    sum += i

}
console.log("sum : ", sum)

// Question 3: Guess the Secret Number
// Write a while loop that simulates a simple "guess the number"
//  game.
console.log("qno 3) Guess the Secret Number : ")
let Secret_no = 77;
let guess = 0;
while (guess !== Secret_no) {
    console.log("guessing :", guess)
    guess++
}
console.log(`Congratulations! You found the secret number: ${Secret_no}`)



// Question 4: Bank Balance until Target
// You start with $100 in a bank account. Each year, your money 
// doubles. Write a while loop that calculates how many years it
//  takes for your bank balance to reach or exceed $1000. Log the
//  balance and year for each iteration.

console.log("qno 4) Bank Balance until Target: ")
let current_money = 100
let current_year = 0
while (current_money <= 1000) {

    current_money = current_money * 2
    current_year = current_year + 1
    console.log(`year${current_year} : balance ${current_money}`)

}
console.log(`it took ${current_year} to reach 1000`)


// Question 5: Force Valid Input
// Write a do...while loop that prompts the user (if in a browser)
//  to enter a number greater than 100. The loop should keep 
// prompting until a valid number (greater than 100) is entered.
//  Log the valid number once it's received.
console.log("qno5) force valid input :")
let inp_num;

do {

    inp_num = prompt("enter any number greater than 100")
    inp_num = parseInt(inp_num)
    if ((inp_num < 100) || isNaN(inp_num)) {
        alert("plz enter number greater than 100")
    }

} while ((inp_num < 100) || isNaN(inp_num));
console.log("you enter valid number", inp_num)

// Scope Issue: The inp_num variable is declared using let inside the do block. This means it's only accessible within that block,
//  and the while condition outside the block cannot "see" it.


//         Question 6: List Object Properties and Values
// You have an object representing a book. Use a for...in loop to 
// iterate over its properties and log each property name (key) along
//  with its corresponding value.

console.log("qno6) book overview :")
const book = {
    title: "The JavaScript Way",
    author: "Christian Heilmann",
    pages: 450,
    publishedYear: 2020
};

for (const keys in book) {
    // we intialize variable of element name with value of obj value
    const element = book[keys];
    // in this loop keys is your book keys if you want to access your 
    // obj keys just write keys
    console.log(keys + " :", element)

}
// using for in loop for array
// reason : using for in loop for iterating over array is not good 
// choice as it also print indices with array and sometimes it can cause
// // bug so for iterating arr use for of loop or for each
// for...in is bad for arrays because it iterates over property names (keys) as strings,
//  not the array's actual elements, and can include unexpected inherited properties, leading to bugs.
// For iterating arrays, always use for...of (for values) or forEach() (for values and indices) instead.

// EXAMPLE 
let arr = ["A", "B", "C"]
for (const key in arr) {

    const element = arr[key];
    console.log(key + " :", element)

}


//    Question 7: Find Longest Word in an Array
// You have an array of words. Use a for...of loop to find and log
//  the longest word in the array. If there are multiple words of the same longest length, 
// any one of them is fine.

// ALERT : UNDERSTAND THIS QS DEEPLY
let names = ["zara", "ali", "ahmed hussan", "hunza"]
let longestword = ""

for (const name of names) {
    if (name.length > longestword.length) {
        // longestword length is zero so it compares with all word 
        // and after every iteration if name.length>longestword.length
        // condition true then it will pass current name to longestname

        // and if name.length>longestword.length is false then below statement 
        // will be skip and then longest word will not be updated and loop 
        // check other names
        longestword = name
    }

}
console.log("The longest word is:", longestword);


// . forEach Loop Question no 8: User Message Display
// Question: You have an array of users. Use the forEach array 
// method to iterate over this array. For each user object, log 
// a formatted message to the console like: "Hello [Name], your 
// ID is [ID]!".

const users = [
    { id: 101, name: "zeynen" },
    { id: 102, name: "zara" },
    { id: 103, name: "Charlie" },
    { id: 104, name: "prakash" }

];
// target id and name just like how you target properties in object as we write objects in array

users.forEach(user => {
    console.log(`"Hello ${user.name} , your ID is [${user.id}]!"`)

});



// test Question 1: FizzBuzz Challenge
// Scenario: This is a classic coding challenge that tests your 
// understanding of basic loops and conditional statements.
// Question: Write a loop that iterates through numbers from 1 to
//  15. For each number:
// If the number is divisible by 3, log "Fizz".
// If the number is divisible by 5, log "Buzz".
// If the number is divisible by both 3 and 5, log "FizzBuzz".
// Otherwise, log the number itself.

for (let i = 1; i <= 15; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("Fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log("fizz")
    }
    else if (i % 5 === 0) {
        console.log("buzz")
    }

    else {
        console.log(i)
    }


}


// test  Question no 2: You are given an inventory array,
//  where each element is an object representing an item.
// Write a loop that searches for an item with the id of 203.

// If found, log the message: 
// "Item Found: [Item Name] - Price: $[Item Price]".
// If not found after checking all items, log: "Item with ID 203 
// not found in inventory."

const inventory = [
    { id: 201, name: "Laptop", price: 1200 },
    { id: 202, name: "Mouse", price: 25 },
    { id: 203, name: "Keyboard", price: 75 },
    { id: 204, name: "Monitor", price: 300 }
];

const targetId = 203;
let itemFound = false; // Initialize the flag

for (const item of inventory) {
    if (item.id === targetId) {
        console.log(`"item found ${item.name} - price ${item.price} ."`)
        itemFound = true;
    }
}
if (itemFound = false) {
    console.log(`item with id[${targetId}] not found in the inventory`)
}

// end of js code













// ✅ VARIABLE DECLARATIONS

let a = 2;
console.log(a); // Output: 2

const c = 3;
console.log(c); // Output: 3

// ✅ BLOCK SCOPE DEMO
{
    let a = 77;
    console.log(a); // Output: 77
    // 'let' is block-scoped, only accessible inside this block
}

// ❌ This will cause an error if num is not defined
// let k = num; 
// Correct usage:
let k = null;
let d = 44;
let z = "zain bhai";
let x = undefined;
const v = true;

console.log(k, d, z, x, v);
console.log(typeof k, typeof d, typeof z, typeof x, typeof v);

// ✅ OBJECTS
let o = {
    name: "omaima",
    "job code": 4500 // Key with space must be in quotes
};
console.log(o);

// Add new property
o.salary = "560crores";
console.log(o);

// Update property
o.salary = "700crores";
console.log(o);


// ✅ VAR VS LET

// 🔹 VAR is function/global scoped
var greeting = "hi how are you";
greeting = "hey";

console.log(greeter); // undefined due to hoisting
var greeter = "ohoo";

// 🔹 LET is block-scoped and cannot be re-declared
let greet = "say hi";
greet = "say hello";
console.log(greet);

// Example showing block scope of LET
let greeting2 = "say Hi";
if (true) {
    let greeting2 = "say Hello instead";
    console.log(greeting2); // Output: say Hello instead
}
console.log(greeting2); // Output: say Hi


// 🧠 TASKS 🧠

// 🟢 TASK 1: BASIC
let myname = "omaima";
console.log(myname);
let myage = 10;
console.log(myage);
let isStudent = true;
console.log(isStudent);


// 🟡 TASK 2: MEDIUM
let score = 0;
let finalScore = score + 5;
console.log(finalScore);

var mycity = "karachi";
mycity = "lahore";
console.log(mycity);


// 🔴 TASK 3: INTERMEDIATE

// 🔹 Sub Task 1 - HOISTING
console.log(message); // Output: undefined (due to hoisting)
var message = "Hello!";

function greet() {
    if (true) {
        var greeting = "Hi";
        let farewell = "Bye";
        console.log(greeting); // Hi
        console.log(farewell); // Bye
    }
    console.log(greeting); // Hi
    // console.log(farewell); ❌ ReferenceError (block scoped)
}
greet();


// 🔹 Sub Task 2 - CONST BEHAVIOR
const PI = 3.14159;
console.log("Initial PI:", PI);
// PI = 3.14; ❌ Error: Assignment to constant variable

const user = { name: "Alice", age: 30 };
console.log("Initial user:", user);
user.age = 31;
console.log("Updated user:", user); // Allowed because object properties can change

const numbers = [1, 2, 3];
console.log("Initial numbers:", numbers);
numbers.push(4); // Allowed
console.log("After push:", numbers);
// numbers = [5, 6]; ❌ Error: Reassignment not allowed


// 🔹 Sub Task 3 - PRIMITIVE vs REFERENCE TYPES
let value = 10;
console.log("Value 1:", value, typeof value);

value = "Hello";
console.log("Value 2:", value, typeof value);

let anotherValue = value;
console.log("Value 3:", anotherValue, typeof anotherValue);

anotherValue = 5;
console.log("Value 4:", anotherValue, typeof anotherValue);
console.log("Value 5:", value, typeof value); // Still "Hello"

let obj1 = { key: "first" };
let obj2 = obj1;
obj2.key = "second";

console.log("Obj1:", obj1); // key: "second"
console.log("Obj2:", obj2); // key: "second"


// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// 🔁 IMPORTANT POINTS FOR REVISION 🔁
// ✅ var → function/global scope. Can be re-declared & updated.
// ✅ let → block scope. Can be updated but NOT re-declared.
// ✅ const → block scope. Cannot be updated or re-declared.
//     - BUT for arrays & objects → values can change (mutation allowed)

// ✅ var is hoisted → initialized as undefined
// ✅ let & const are hoisted but in Temporal Dead Zone (TDZ) → accessing before declaration = ❌ error

// ✅ typeof → shows the data type (typeof x)

// ✅ Primitive types (string, number, boolean, etc) → copied by VALUE
// ✅ Reference types (object, array, function) → copied by REFERENCE

// ✅ const does not mean "constant value", it means "constant binding" — you can't reassign, but you can modify contents of objects/arrays

// ✅ Always prefer let and const over var
// ✅ Use const when you don't need to reassign
// ✅ Use let when you need to update value

// ✅ "undefined" → declared but not assigned
// ✅ "null" → assigned as empty on purpose
// ✅ "true/false" → Boolean values
// ✅ console.log() → used for debugging / output to console

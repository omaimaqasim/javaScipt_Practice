// ✅ 1. Async Function with Await and IIFE
async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("😴 Sleeping...");
    }, 2000);
  });
}

// ✅ IIFE = Immediately Invoked Function Expression
// This type of function runs automatically when defined
(async function main() {
  let a = await sleep();
  console.log(a);

  let b = await sleep();
  console.log(b);
})();


// ✅ 2. IIFE Usage Examples

// IIFE runs immediately after definition
(function () {
  console.log("👋 I am IIFE. I run immediately after JS starts!");
})();

// IIFE is independent and private
(function () {
  let secretMessage = "🤫 I am private inside IIFE";
  console.log(secretMessage);
})();

// ❌ secretMessage is not accessible outside
// console.log(secretMessage); // ❌ Error

// Functions inside IIFE cannot be accessed from outside
(function () {
  function greet() {
    console.log("👋 Hello from inside IIFE function!");
  }
  greet(); // ✅ Works
})();

// ❌ greet is not accessible outside
// greet(); // ❌ Error

// Purpose of IIFE — Run setup code once, safely
(function () {
  let name = "Omaima";
  console.log(`🚀 Welcome, ${name}. This runs only once and safely.`);
})();


// ✅ 3. Destructuring (Arrays and Objects)
(function () {
  // Array Destructuring with Rest
  let [x, y, ...rest] = [22, 33, 44, 55, 66, 77];
  console.log(x, y, rest); // 22 33 [44, 55, 66, 77]

  // Object Destructuring
  let obj = {
    a: 2,
    b: 3,
    c: "Omaima"
  };

  let { a, c } = obj;
  console.log(a, c); // 2 Omaima
})();


// ✅ 4. Spread Operator
function sum(a, b, c) {
  return a + b + c;
}

let arr = [11, 22, 33];
console.log(sum(arr[0], arr[1], arr[2])); // Without spread
console.log(sum(...arr));                 // With spread


// ✅ 5. Object Shorthand Property
const a = "the";
const b = "student";

const c = { a, b }; // Same as: { a: a, b: b }
console.log(c);     // Output: { a: 'the', b: 'student' }


// ✅ 6. Function Declaration Hoisting
hello();

function hello() {
  console.log("👋 Oh hi, how are you?");
}


// ✅ 7. Hoisting Examples

// Function hoisting
sayHello(); // ✅ Works

function sayHello() {
  console.log("👋 Hello from hoisted function!");
}

// var is hoisted (only declaration, not value)
console.log(x); // ✅ undefined
var x = 10;
console.log(x); // 10

// let & const are hoisted BUT not initialized
// console.log(y); // ❌ Error
let y = 20;
console.log(y);

// console.log(z); // ❌ Error
const z = 30;
console.log(z);

// Function expressions are NOT hoisted
// sayBye(); // ❌ Error
const sayBye = function () {
  console.log("👋 Bye!");
};



// 📘 🔁 ALL CONCEPTS SUMMARY (For Revision)
/*
📌 async/await:
- Clean way to handle asynchronous code.
- await pauses execution until Promise resolves.

📌 IIFE (Immediately Invoked Function Expression):
- Runs immediately when defined.
- Used to run setup or protect scope.

📌 Destructuring:
- Array: let [a, b] = [1, 2]
- Object: let {x} = obj

📌 Rest Operator:
- Collects remaining items into an array.
- let [a, b, ...rest] = [1, 2, 3, 4];

📌 Spread Operator:
- Spreads array elements one by one.
- sum(...[1, 2, 3]) → sum(1, 2, 3)

📌 Object Shorthand:
- let a = 5; let obj = { a }; → { a: 5 }

📌 Hoisting:
✅ Function declarations are hoisted.
✅ var is hoisted with undefined.
❌ let and const are hoisted BUT not initialized.
❌ Function expressions are NOT hoisted.
*/


/*
🔑 Final KEY POINTS to Remember:

✔ IIFE = private, self-running function.
✔ Destructuring = quick way to unpack values.
✔ Spread = break array into individual values.
✔ Rest = gather extra values into one.
✔ Function declarations can be used before defined.
✔ Use let/const instead of var for safer code.
✔ Don't use function expressions before defining them.
*/

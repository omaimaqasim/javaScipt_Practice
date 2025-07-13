// ✅ Task 1: Make a Timer Program with IIFE and Async
// 🎯 Your Goal:
// - Wait 2 seconds
// - Show a message: "⏰ Timer Done"
// - Use IIFE to run immediately
// - Use a private variable inside IIFE

(async function secretmessage() {
  // ✅ This variable is private (cannot be accessed outside)
  let password = "omaimazev123";
  console.log("👋 Hey Omaima, your password is: " + password);

  // ✅ Async timer function wrapped in a Promise
  async function timer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("⏰ Timer Done");
        resolve("✅ Timer finished successfully");
      }, 2000);
    });
  }

  // ✅ Wait for the timer to complete
  let result = await timer();
  console.log(result);
  console.log("🎉 Task completed!");
})(); // ✅ IIFE ends here

// ❌ Can't access private variable outside IIFE
// console.log(password); // ❌ Error: password is not defined



/*
🚫 MISTAKE REMINDER FOR TASK 1:
----------------------------------
❌ Forgot to wrap setTimeout in a Promise.
✅ Always use `return new Promise(...)` with await.

❌ Didn't close IIFE properly.
✅ End IIFE with `})();`

❌ Tried to access private variable outside IIFE.
✅ IIFE keeps variables private.
*/



// ✅ Task 2: Student Marks Analysis
// 🎯 Goal:
// - Use destructuring
// - Use rest & spread operators
// - Use function with spread input

console.log("task 2");

let student = {
  name: "Ali",
  class: "10th",
  marks: [85, 90, 92, 88, 79]
};

// ✅ 1. Object destructuring to get name and marks
let { name, marks } = student;
console.log("Student Name:", name);
console.log("Marks Array:", marks); // [85, 90, 92, 88, 79]

// ✅ 2. Array destructuring with rest operator
let [math, computer, ...rest] = marks;
console.log("Math:", math);                // 85
console.log("Computer:", computer);        // 90
console.log("Other Subjects:", rest);      // [92, 88, 79]

// ✅ 3. Function to calculate total of 3 numbers using spread
function calculatetotal(no1, no2, no3) {
  return no1 + no2 + no3;
}
console.log("Total of first 3 marks:", calculatetotal(...marks)); // 267



/*
🚫 MISTAKE REMINDER FOR TASK 2:
----------------------------------
❌ In destructuring, used quotes: { "name" } ❌
✅ Correct: { name }

❌ Printed strings in console.log: "name" instead of variable
✅ Correct: console.log(name)

❌ Forgot return in function earlier
✅ Always return from functions if you need result
*/

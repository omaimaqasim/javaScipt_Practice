// ✅ Task 0: Add Two Numbers with Error Handling

// Taking input from user using prompt
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

// NaN means "Not a Number"
// This check is for custom error handling
// JavaScript is forgiving (won’t show error by default), 
// but we can throw custom errors to alert the user.
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("❌ Sorry, this is not allowed 😢");
  // When we throw an error, JS immediately stops execution at that point
}

// Convert inputs to integers because prompt gives strings
let sum = parseInt(a) + parseInt(b);
console.log(sum);

// ✅ Handling runtime JS error using try...catch
function main() {
  try {
    console.log(`The sum of ${a} and ${b} is: `, sum * x); // 'x' is not defined
    return true;
  } catch (error) {
    alert(error.message);
    console.log("⚠️ Error is showing");
    return false;
  } finally {
    console.log("📁 Files are being closed");
  }
}

// Call the function
main();

/*
📌 Summary: Why use finally

- finally block always runs — whether there's an error or not
- Used for cleanup (like closing files, stopping loaders, etc.)
- Even if try or catch has a return, finally will still execute
- Helps ensure important ending tasks always run

** The main reason to use finally:
If we use console.log at the end of try-catch, and try succeeds,
JavaScript skips catch, and return may stop the code.
That's why finally is used — it always runs, whether try or catch is executed.
*/


// ✅ Task 1: Build a Safe Division Program

let no1 = prompt("Enter first number:");
let no2 = prompt("Enter second number:");

// Convert to numbers
let num1 = parseInt(no1);
let num2 = parseInt(no2);

// Check if input is valid
if (isNaN(num1) || isNaN(num2)) {
  throw SyntaxError("❌ Please enter valid integer numbers.");
}

try {
  // Check for division by zero
  if (num2 === 0) {
    throw SyntaxError("❌ Division by zero is not allowed!");
  }

  // Perform division
  let result = num1 / num2;
  console.log(`✅ The division of ${num1} by ${num2} is: ${result}`);
  
} catch (error) {
  console.log("⚠️ Error:", error.message);
  
} finally {
  console.log("✅ Program ended safely.");
}


// ✅ Task 2: Safe Square Root Calculator

let number = prompt("Enter a number: ");
number = parseInt(number);

// Check if number is valid
if (isNaN(number)) {
  throw SyntaxError("❌ Please enter a valid number!");
}

try {
  // Check for negative number
  if (number < 0) {
    throw SyntaxError("❌ Cannot find square root of a negative number!");
  }

  // Calculate square root
  let square_root = Math.sqrt(number);
  console.log("✅ The square root of " + number + " is " + square_root);

} catch (error) {
  console.log("⚠️ Error:", error.message);

} finally {
  console.log("🔚 Task complete.");
}


/*
📌 Explanation Notes:

1. `prompt()` always returns a string. To do math, use `parseInt()` or `Number()` to convert.
2. `isNaN()` checks if a value is **Not a Number**.
3. `throw` is used to manually generate an error (custom error).
4. `try...catch` handles unexpected runtime errors (e.g. undefined variable).
5. `finally` always runs — even if there's a `return` or error — often used for cleanup (e.g. closing files).

---------------------------------------
🔑 KEY REVISION POINTS:

✔ `prompt()` returns string → always convert for calculations  
✔ Use `isNaN(value)` to check if input is a valid number  
✔ Use `throw Error("message")` to show your own error to users  
✔ Use `try...catch` to handle errors without crashing program  
✔ Use `finally` to run final code (cleanup), always runs even after return or error  
✔ `parseInt("10")` → converts "10" (string) to 10 (number)

🧠 Tip: Error handling makes your code professional and user-friendly!
*/
